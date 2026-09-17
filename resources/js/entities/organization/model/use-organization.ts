import { computed, ref } from "vue";
import { useOrganizationStore } from "./store";

export const useOrganization = () => {
  const organizationStore = useOrganizationStore();

  const organization = computed(() => organizationStore.organization);

  const isLoading = ref(false);
  const isEmpty = computed(() => !organizationStore.organization);

  const loadOrganization = async () => {
    isLoading.value = true;

    try {
      await organizationStore.getOrganization();
    } finally {
      isLoading.value = false;
    }
  };

  const connectOrganization = async (url: string) => {
    await organizationStore.connectOrganization(url);
  };

  return {
    organization,
    isLoading,
    isEmpty,
    loadOrganization,
    connectOrganization,
  };
};
