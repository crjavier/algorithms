
const groupItemsOfArrayBy = (arr, max) => {
    if (max === 0) return [];
    let response = [];
    let temp = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        if (count < max) {
            temp.push(arr[i]);
            count++;
        }

        if (count >= max || i == arr.length - 1) {
            response.push(temp);
            temp = [];
            count = 0;
        }

    }
    return response;
};

module.exports = {
    groupItemsOfArrayBy,
};