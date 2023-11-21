type TruncateString = {
  /**
   * The string to be truncated.
   */
  str: string;
  /**
   * The desired text length.
   */
  num: number;
};

export const truncateString = ({str, num}: TruncateString) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};
