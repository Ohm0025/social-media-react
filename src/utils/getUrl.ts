const getPathName = (fullPath: string) => {
  const arrPath = fullPath.split("final-project/");
  return arrPath[1];
};

export { getPathName };
