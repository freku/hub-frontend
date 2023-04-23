export const min$fetch = async (url, options, minFetchTime = 1000) => {
  const startTime = Date.now();

  const data = await $fetch(url, options);

  const elapsedTime = Date.now() - startTime;
  const remainingTime = minFetchTime - elapsedTime;

  if (remainingTime > 0) {
    await new Promise((resolve) => setTimeout(resolve, remainingTime));
  }

  return data;
};

// useLazyAsyncData(
//   "user",
//   () =>
//     min$fetch(
//       "user",
//       {
//         method: "get",
//         baseURL: runtimeConfig.public.baseURL,
//         credentials: "include",
//         headers: {
//           "X-Requested-With": "XMLHttpRequest",
//         },
//         async onResponse({ response }) {
//           console.log("ass");
//           if (response.status === StatusCodes.OK) {
//             console.log("hole");
//             layout.value = "default";
//           } else {
//             console.log("hole2");
//             // layout.value = "login";
//             return await navigateTo("/");
//           }
//         },
//       },
//       750
//     ),
//   {
//     immediate: true,
//     watch: [route],
//   }
// );
