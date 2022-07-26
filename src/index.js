const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const PLACEHOLDER = {
  '10': '.',
  '11': '-',
};

function decode(expr) {
  // write your solution here
  return expr
    .split('**********')
    .map((word) => word.match(/.{1,10}/g))
    .map((arrayChars) => arrayChars
      .map((char) => char
        .match(/.{1,2}/g)
        .map((char) => PLACEHOLDER[char] || "")
        .filter((char) => char !== '')
        .join(''))
      .map((char) => MORSE_TABLE[char])
      .join(''))
    .join(' ');
}

module.exports = {
  decode
}