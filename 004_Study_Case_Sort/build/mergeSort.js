"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = function (arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = exports.mergeSort(arr.slice(0, mid));
    var right = exports.mergeSort(arr.slice(mid));
    return merge(left, right);
};
var merge = function (arr1, arr2) {
    var i = 0;
    var j = 0;
    var result = [];
    if (!Array.isArray(arr1))
        arr1 = arr1.split("");
    if (!Array.isArray(arr2))
        arr2 = arr2.split("");
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
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
