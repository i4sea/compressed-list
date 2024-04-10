const alphabet = "abcdefghijklmnopqrstuvwxyz";

const cesarAlphabet = "defghijklmnopqrstuvwxyzabc";

export function encrypt(myValue: string): string {
  let encryptedValue = "";

  for (const letter of myValue) {
    const letterIndex = alphabet.indexOf(letter);
    encryptedValue += cesarAlphabet[letterIndex];
  }

  return encryptedValue;
}
