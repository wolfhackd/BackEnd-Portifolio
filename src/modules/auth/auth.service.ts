import type { FastifyReply, FastifyRequest } from "fastify";
import { GitHubAuthService } from "./providers/github.service.js";
import { JwtService } from "../../shared/jwtService.js";
import { CookieService } from "../../shared/cookie-service.js";



export class AuthService {
  public constructor(
    private readonly githubService : GitHubAuthService,
    private readonly jwtService : JwtService,
  ) {}


  public login = async(req: FastifyRequest, reply: FastifyReply) => {
    try{
      const {code} = req.body as {code:string};

      if(!code){
        return reply.status(400).send({error: 'Missing Code'});
      }

      const accessTokenUrl = await this.githubService.getAccessTokenUrl(code);
      if(accessTokenUrl){
        console.log('Passei pelo --> Access Token URL:', accessTokenUrl);
      }
      const userData = await this.githubService.getUserData(accessTokenUrl);
      if(userData){
        console.log('Passei pelo --> GitHub User Data:', userData);
      }
      const isUserValid = await this.githubService.verifyUser(userData);
      if(isUserValid){
        console.log('Passei pelo --> User is valid');
      }
      
      if(!isUserValid){
        return reply.status(401).send({error: 'Invalid User'});
      }
      
      const token = this.jwtService.sign({userId: userData.id.toString()});

      if(!token){
        return reply.status(500).send({error: 'Could not generate token'});
      }

      CookieService.setAuthCookie(reply, token);
      return reply.status(200).send({message: 'Authentication Successful'});

    } catch(error){
      console.error('Error during GitHub authentication:', error);
      return reply.status(500).send({ error: 'Internal Server Error' });
    }
  }
}