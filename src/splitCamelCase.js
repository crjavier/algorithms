
const splitCamelCase = (string) => {
  aux = '';
  for (let bla of string) {
    if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(bla)) {
      aux += ' ';
    }
    aux += bla;
  }
  return aux;
};

module.exports = {
  splitCamelCase,
};
