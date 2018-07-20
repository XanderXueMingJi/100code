// 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，
// 其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。
// 程序分析：利用for循环控制100-999个数，每个数分解出个位，十位，百位。


// var num = 456;
// var one = num % 10; // 个位数
// var two = num % 100 - one; //十
// var thr = num - one - two; //百


var arr = [];
for(var i = 100; i < 1000; i++) {

    var one = i % 10; // 个位数
    var two = i % 100 - one; //十
    var thr = i - one - two; //百
    var count = fhrFn(one) + fhrFn(two/10) + fhrFn(thr/100);
    if(count === i) {
        arr.push(i);
    }
    
}
console.log(arr);


function fhrFn(num) {
    return num * num * num;
}

// [153, 370, 371, 407]
















