// 输入数组，最大的与第一个元素交换，最小的与最后一个元素交换，输出数组。

// 输入一个数字:
// 1
// 输入一个数字:
// 2
// 输入一个数字:
// 3
// 输入一个数字:
// 7
// 输入一个数字:
// 9
// 输入一个数字:
// 8
// 计算结果：
// 9
// 2
// 3
// 7
// 8
// 1




var arr = [1, 2, 3, 7, 9, 8];

function fn(arr) {
    var newArr = Object.assign([], arr);
        max = Math.max.apply(null, newArr),
        min = Math.min.apply(null, newArr);
    var len = newArr.indexOf(max);
    newArr.splice(len, 1);
    newArr.unshift(max);
    len = newArr.indexOf(min);
    newArr.splice(len, 1);
    newArr.push(min);
    return newArr;
}


fn(arr);