export const calDiffHr = (startDateStr: string) => {
  let startDate = new Date(startDateStr);
  let dateNow = new Date();
  let diffMilliSec = dateNow.getTime() - startDate.getTime();
  let formatTohr = diffMilliSec / 1000 / 60 / 60;
  if (formatTohr < 1) {
    return Math.round(formatTohr * 10) + " min";
  }
  return Math.round(formatTohr) + " hr";
};
