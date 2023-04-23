import { StatusCodes } from "http-status-codes";

export const redirectToLoginOnForbiddenResponse = () => {
  return {
    async onResponse({ response }) {
      const layoutStore = useLayoutStore();

      if (response.status === StatusCodes.FORBIDDEN) {
        layoutStore.layout = "login";
        return await navigateTo("/");
      }
    },
  };
};
