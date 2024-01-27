export const toFormData = (text: string, type: string, img?: File) => {
  let fd = new FormData();
  fd.append("postText", text);
  console.log(fd);
  return fd;
};
