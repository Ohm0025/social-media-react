export const calDiffHr = (startDateStr: string) => {
  let startDate = new Date(startDateStr);
  let dateNow = new Date();
  let diffMilliSec = dateNow.getTime() - startDate.getTime();
  let formatTohr = diffMilliSec / 1000 / 60 / 60;
  if (formatTohr < 1) {
    let matnInMin = Math.round(formatTohr * 60);
    if (matnInMin < 1) {
      return "just now";
    }
    return matnInMin + " min";
  }
  if (formatTohr >= 24) {
    return Math.round(formatTohr / 24) + " day";
  }
  return Math.round(formatTohr) + " hr";
};

// export const calDiffHr = (startDateStr: any) => {
//   let startDate = new Date(startDateStr);
//   let dateNow = new Date();
//   console.log(startDate);
//   console.log(dateNow);
// };
