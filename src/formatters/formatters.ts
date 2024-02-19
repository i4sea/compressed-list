export const compressTitle = (str: string): string => {
    let formattedString = '';
    let currentChar = '';
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === currentChar) {
        count++;
      } else {
        if (count > 0) {
          formattedString += currentChar + count;
        }
        currentChar = str[i];
        count = 1;
      }
    }
  
    formattedString += currentChar + count;
  
    return formattedString;
  };