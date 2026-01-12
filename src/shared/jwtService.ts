import jwt from "jsonwebtoken";
import { env } from '../../src/config/env.js';

export class JwtService {
  private readonly secret = env.jWT_SECRET;
  private readonly expiresIn = env.JWT_EXPIRES_IN_MINUTES * 60;
  private readonly algorithm = env.JWT_ALGORITHM;

  public sign({ userId }: { userId: string }): string | null {
    try {
      return jwt.sign({userId}, this.secret, {
        expiresIn: `${this.expiresIn}m`,
        algorithm: this.algorithm as jwt.Algorithm,
      })
    }catch {
      return null;
    }
  }

  public verify(token: string): {userId: string} | null {

    try{
      const decoded = jwt.verify(token, this.secret, {
        algorithms: [this.algorithm as jwt.Algorithm],
      })
      if(typeof decoded === 'object' && 'userId' in decoded){
        return {userId: decoded.userId as string};
      }
      return null;
    }catch{ 
      return null;
    }
  }
}