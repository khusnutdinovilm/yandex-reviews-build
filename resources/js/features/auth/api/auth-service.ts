import { http } from "@/shared/api/http";

import type { IUser, IUserForm } from "../model/types";

class AuthService {
  async login(userData: IUserForm) {
    await http.get("/sanctum/csrf-cookie");
    return http.post<IUser>("/api/login", userData);
  }

  async getUser() {
    return http.get<IUser>("/api/user");
  }

  async logout(): Promise<void> {
    await http.post("/api/logout");
  }
}

export const authService = new AuthService();
