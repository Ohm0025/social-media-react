const checkEmpty = (str: string | undefined) => {
  if (str) {
    let result = str.slice(3, -4);
    result = result.replace("<br>", "");
    console.log(result.trim());
    if (!result.trim()) {
      console.log("is empty");
      return true; //is empty jing jing
    }
    console.log("is not empty");
    return false;
  }
  return true;
};

export { checkEmpty };
