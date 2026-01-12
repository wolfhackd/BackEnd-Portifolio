import { env } from "../../../config/env.js";
import axios from "axios";


export class GitHubAuthService {
  private clientId = env.GITHUB_CLIENT_ID
  private clientSecret = env.GITHUB_CLIENT_SECRET

  public async getAccessTokenUrl(code:string): Promise<string> {
    const response = await axios.post('https://github.com/login/oauth/access_token',{
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code
},{headers:{
      Accept: 'application/json'
}})
    return response.data.access_token;
  }

  public async getUserData(accessToken: string): Promise<any> {
    const response = await axios.get('https://api.github.com/user',{
      headers:{
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      }
    });
    return response.data;
  }

  public async verifyUser(user:any): Promise<boolean>{
    if (user.login !== 'wolfhackd') {
      return false;
    }
    return true;
  }
}