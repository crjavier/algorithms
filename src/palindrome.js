
const checkPalindrome = (inputString) => {
    // return inputString == inputString.split("").reverse().join("");
    for (let i = 0, j = inputString.length - 1;
        i < inputString.length / 2;
        i++ , j--) {
        if (inputString[i] != inputString[j]) {
            return false;
        }
    }
    return true;
};

module.exports = {
    checkPalindrome,
};
