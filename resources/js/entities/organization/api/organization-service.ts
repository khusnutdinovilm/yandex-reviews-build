import { http, type IResource } from "@/shared/api";

import type { IOrganization } from "../model/types";

class OrganizationService {
  async connectOrganization(url: string) {
    return http.post<IResource<IOrganization>>("/api/organization", { url });
  }

  async getOrganization() {
    return http.get<IResource<IOrganization>>("/api/organization");
  }
}

export const organizationService = new OrganizationService();
