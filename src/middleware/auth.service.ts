import type { JwtService } from "../shared/jwtService.js";

export class authMiddlewareService {
  constructor(private readonly jwtService: JwtService) {}

  public async verifyUser(token: string) {
    const decoded = this.jwtService.verify(token);

    if (!decoded) {
      throw new Error("Unauthorized: Invalid or expired token");
    }
    return decoded;
  }
}
