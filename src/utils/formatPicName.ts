export const formatPicName = (originalName: string) => {
  let splitName = originalName.split("/images");
  return splitName[1];
};
