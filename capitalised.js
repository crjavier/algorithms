// const withSpaces = (word) => (
//     word
//         .split('')
//         .map(i => (
//             isUpperCase(i) ? ' ' + i : i
//         ))
//         .join('')
// );

// const isUpperCase = (letter) => (
//     String.fromCharCode(...[...Array(26).keys()].map(i => i + 65)).includes(letter)
// );

const withSpaces = (word) => word.split('').map(i => String.fromCharCode(...[...Array(26).keys()].map(i => i + 65)).includes(i) ? ' ' + i : i).join('');

function solution(string) {
    let value = '';
    for (let char of string) {
        ascii = char.charCodeAt(0);
        value += 65 <= ascii && ascii <= 90 ? `, ${char}` : char;
    }
    return value;
}

// 65 90

const res = withSpaces('losGusanosComePollitos');
console.log(res);

const response = solution('lasCompuertasSeEstanAbriendo');
console.log(response);
