export const mergeSort = (
  arr: (number | string)[] | string
): (number | string)[] | string => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (
  arr1: (number | string)[] | string,
  arr2: (number | string)[] | string
): (number | string)[] | string => {
  let i = 0;
  let j = 0;
  let result: (number | string)[] = [];

  if (!Array.isArray(arr1)) arr1 = arr1.split("");
  if (!Array.isArray(arr2)) arr2 = arr2.split("");

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};
