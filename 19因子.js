// 一个数如果恰好等于它的因子之和，这个数就称为"完数"。例如6=1＋2＋3.编程找出1000以内的所有完数。
// 6
// 1 2 3
// 28
// 1 2 4 7 14
// 496
// 1 2 4 8 16 31 62 124 248
// function fn(num) {
//     var arr = [1];
//     var newNum = num;
//     for(var i = 2; i <= newNum; ) {
//         if(newNum % i === 0) { // 能整除
//             arr.push(i);
//             newNum = newNum / i;
//             i = 2;
//         }else {
//             i++
//         }
//     }
//     if(num === 0) {
//         return [0];
//     }
//     return arr;
// };
function fn(num) {
    var arr = [1];
    var newNum = num;
    for(var i = 2; i < newNum; i++) {
        if(newNum % i === 0) { // 能整除
            arr.push(i);
        }
    }
    if(num === 0) {
        return [0];
    }
    return arr;
};


function go(num) {
    var countArr = [];
    for(var i = 1; i <= num; i++) {
        // console.log('当前值:', i, ':', fn(i));
        var arr = fn(i);
        var count = arr.reduce((a, b) => a + b );
        if(count === i) {
            countArr.push(i);
        }
    }
    return countArr;
}

go(1000);











