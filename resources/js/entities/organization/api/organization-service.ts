import { http } from "@/shared/api";

import type { IOrganization } from "../model/types";

class OrganizationService {
  async getOrganization() {
    return http.get<IOrganization>("/api/organization");
  }
}

export const organizationService = new OrganizationService();
