// 对10个数进行排序。
// 5
// 3
// 23
// 67
// 2
// 56
// 45
// 98
// 239
// 9

// 排列之后：
// 2
// 3
// 5
// 9
// 23
// 45
// 56
// 67
// 98
// 239

var arr = [5, 3, 23, 67, 2, 56, 45, 98, 239, 9];
var newArr = arr.sort((a, b) => a - b);
console.log(newArr);