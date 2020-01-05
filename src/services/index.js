// 1 2 3 4 2 6

const maximumSum = (integerArray) => {
  let arraySum = integerArray.reduce((a, b) => a + b, 0);
  let sum = 0;
  let arrayLength = integerArray.length;

  for (let i = 0; i < arrayLength; i++) {
    if (i % 2 === 0) {
      sum += arraySum;
    } else {
      sum -= arraySum;
    }

    arraySum -= integerArray.pop();

  }

  return sum;
};

let integerArray = [1, 2, 3, 4, 2, 6];
console.log(maximumSum(integerArray));
