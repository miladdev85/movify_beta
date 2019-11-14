// Reg exp to cut the string and add ... at the end
// Length can be taken in as a parameter

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

// Check to see if we are near the end of screen
// Used for downloading more items when scrolling down in MoreMediaFetcher component

export const genericBottomScroll = (items, element) => {
  if (items.length && window.innerHeight + element.scrollTop > element.offsetHeight - 1000) {
    return true;
  } else {
    return false;
  }
};
