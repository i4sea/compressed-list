export const compressItem = (title: string): string => {
  const hash: { [key: string]: number } = {};
  const charOrder: string[] = [];

  for (const char of title) {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
      charOrder.push(char);
    }
  }

  const res = [];

  for (const char of charOrder) {
    const numberOfTimes = hash[char];

    res.push(char);
    res.push(numberOfTimes);
  }

  return res.join("");
};
