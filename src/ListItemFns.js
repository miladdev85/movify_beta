export const textFormat = (paragraph, title = "", length = 300) => {
  let maxLength = length;
  if (title.length > 25 && paragraph.length > 270) maxLength = 270;

  if (paragraph.length > maxLength) {
    const exp = new RegExp(`^([\\s\\S]{${maxLength}}\\S*)[\\s\\S]*`);
    return `${paragraph.replace(exp, "$1")} ...`;
  } else if (paragraph.length < maxLength) {
    return paragraph;
  } else {
    return;
  }
};
