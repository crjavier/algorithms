
const centuryFromYear = (year) => {
    var century = parseInt(year / 100);
    return year % 100 != 0 ? ++century : century;
};

module.exports = {
    centuryFromYear,
};
