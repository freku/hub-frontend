export const formattedLastRunTime = (updatedAt) => {
  const date = new Date(updatedAt);

  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };

  return date.toLocaleString("en-GB", options);
};
