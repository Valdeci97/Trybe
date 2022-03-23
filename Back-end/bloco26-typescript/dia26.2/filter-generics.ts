type callback<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(items: Array<T>, func: callback<T>): Array<T> {
  const array: Array<T> = [];

  for (let i = 0; i < items.length; i += 1) {
    if (func(items[i], i, items)) {
      array.push(items[i]);
    }
  };

  return array;
};

console.log(myFilter([1, 2, 3], (item) => {
  return item < 3
}));
