const isHappy = (n: number, count = 1): boolean => {
  if (n === 1) return true;
  if (count >= 1000) return false;
  let nStr = String(n);
  let result = 0;
  for (let i = 0; i < nStr.length; i++) {
    result += powerOfTwo(Number(nStr[i]));
  }
  return isHappy(result, (count += 1));
};

const powerOfTwo = (base: number, exp = 2): number => {
  let result = 1;
  for (let i = exp; i > 0; i--) {
    result *= base;
  }
  return result;
};

console.log(powerOfTwo(2));
console.log(isHappy(19));

// 5 => [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
// Naive Approach
const generate = (numRows: number): number[][] => {
  if (!numRows) return [];
  const result: number[][] = [[1]];

  let d = 0;
  let j = 0;

  for (let i = 1; i < numRows; i++) {
    let row: number[] = [1];

    while (j + 1 < result[d].length) {
      row.push(result[d][j] + result[d][j + 1]);
      j++;
    }

    row.push(1);
    result.push(row);

    j = 0;
    d++;
  }

  return result;
};
console.log(generate(5));

const climbStairs = (n: number, table = [1, 1]): number => {
  for (let i = 2; i <= n; i++) table[i] = table[i - 1] + table[i - 2];
  return table[n];
};
console.log(climbStairs(5));

const isPowerOfThree = (n: number): boolean =>
  n < 1 ? false : Math.pow(3, 33) % n === 0 ? true : false;
console.log(isPowerOfThree(81));

function plusOnes(arr: number[]): number[] {
  for (let i = arr.length - 1; i > -1; i--) {
    let cur = arr[i];
    if (cur >= 0 && cur < 9) {
      arr[i] = cur + 1;
      break;
    }
    if (cur === 9) {
      arr[i] = 0;
    }
  }

  if (arr[0] === 0) arr.unshift(1);

  return arr;
}
console.log(
  plusOnes([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])
);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzzer(arr: number[]): (string | number)[] {
  return arr.map(el =>
    el % 5 === 0 && el % 3 === 0
      ? "fizbuzz"
      : el % 5 === 0
      ? "buzz"
      : el % 3 === 0
      ? "fizz"
      : el
  );
}
console.log(fizzBuzzer(array));

function trailingZeroes(n: number): number {
  let result = 0;
  for (let i = 5; i <= n; i *= 5) {
    result += Math.floor(n / i);
  }
  return result;
}
console.log(trailingZeroes(55));
