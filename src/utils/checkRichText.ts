const checkEmpty = (str: string | undefined) => {
  if (str) {
    let result = str.slice(3, -4);
    result = result.replace("<br>", "");

    if (!result.trim()) {
      return true; //is empty jing jing
    }

    return false;
  }
  return true;
};

export { checkEmpty };
