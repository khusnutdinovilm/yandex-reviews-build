import { defineStore } from "pinia";
import { ref } from "vue";

import type { IOrganization } from "./types";
import { organizationService } from "../api/organization-service";

export const useOrganizationStore = defineStore("organization", () => {
  const organization = ref<IOrganization | null>(null);

  const connectOrganization = async (url: string) => {
    const { data: responseData } = await organizationService.connectOrganization(url);
    organization.value = responseData.data;
  };

  const getOrganization = async () => {
    const { data: responseData } = await organizationService.getOrganization();
    organization.value = responseData.data;
  };

  return {
    organization,
    getOrganization,
    connectOrganization,
  };
});
