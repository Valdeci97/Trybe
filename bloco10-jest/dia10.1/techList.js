const techList = (arr, name) => {
  if (!arr.length) {
    return 'Vazio!'
  }
  return [...arr].sort().map((element) => {
    return {
      tech: element,
      name,
    };
  });
};

module.exports = {
  techList
};