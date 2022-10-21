/**
 * @author L2 <lucascpinheiro10@gmail.com>
 */

const ALPHABET = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function encrypt(originalMessage: string, shiftRange: number): string {
  return (
    originalMessage
      .split("")
      // .map((letter) => {
      //   const isUpperCase = letter.toUpperCase() === letter;
      //   const position = ALPHABET.indexOf(letter.toLowerCase());

      //   if (position > -1) {
      //     const x = position + shiftRange
      //     if (x > ALPHABET.length) {

      //     }
      //     const shiftedLetter = ALPHABET[position + shiftRange];
      //     if (isUpperCase) {
      //       return shiftedLetter.toUpperCase();
      //     }
      //     return shiftedLetter;
      //   }
      //   return letter;
      // })
      .map((letter) => String.fromCharCode(letter.charCodeAt(0) + shiftRange))
      .join("")
  );
}
