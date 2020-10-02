
exports.min = function min(array) {
  let resultMin = 0;

  if (array != undefined && array.length != 0) {
    const sortfunction = (a, b) => {
      return (a - b);
    }
    let sortedArray = array.sort(sortfunction);
    resultMin = sortedArray[0];
  }

  return resultMin;
}

exports.max = function max(array) {
  let resultMax = 0;
  if (array != undefined && array.length != 0) {
    const sortfunction = (a, b) => {
      return (a - b);
    }
    sortedArray = array.sort(sortfunction).reverse();
    resultMax = sortedArray[0];
  }
  return resultMax;
}

exports.avg = function avg(array) {
  let resultAvg = 0;
  let arrSum = 0;
  if (array != undefined && array.length != 0) {
    for (let i = 0; i < array.length; i++) {
      arrSum = arrSum + array[i];
      resultAvg = arrSum / (i + 1);
    }
  }

  return resultAvg;
}
