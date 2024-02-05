const checkEmpty = (str: string) => {
  let result = str.slice(3, -4);
  result = result.replace("<br>", "");
  console.log(result.trim());
  if (!result.trim()) {
    console.log("is empty");
    return true; //is empty jing jing
  }
  console.log("is not empty");
  return false;
};

export { checkEmpty };
