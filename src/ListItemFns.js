export const textFormat = (paragraph, length = 300) => {
  let maxLength = length;

  if (paragraph.length > maxLength) {
    const exp = new RegExp(`^([\\s\\S]{${maxLength}}\\S*)[\\s\\S]*`);
    return `${paragraph.replace(exp, "$1")} ...`;
  } else if (paragraph.length < maxLength) {
    return paragraph;
  } else {
    return;
  }
};
