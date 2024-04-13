export function crypto(text: string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetDisplaced = 'defghijklmnopqrstuvwxyzabc'
  let result = ''

  for (let i = 0; i < text.length; i++) {
    const index = alphabet.split('').indexOf(text[i])
    result += alphabetDisplaced[index]
  }

  return result
}
