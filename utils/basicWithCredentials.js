export const basicWithCredentials = (options) => {
  const runtimeConfig = useRuntimeConfig();

  return {
    baseURL: runtimeConfig.public.baseURL,
    immediate: options?.immediate || false,
    credentials: "include",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  };
};
