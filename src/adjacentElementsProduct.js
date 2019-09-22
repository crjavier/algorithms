const adjacentElementsProduct = (inputArray) => {
    // return Math.max(...inputArray.filter((_, i) => i < inputArray.length - 1).map((item, index) => item * inputArray[index + 1]));
    var lista = [];
    for (var i = 0; i < inputArray.length - 1; i++) {
        lista.push(inputArray[i] * inputArray[i + 1]);
    }
    return Math.max(...lista);
}

module.exports = {
    adjacentElementsProduct,
};
