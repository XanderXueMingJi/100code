// 给一个不多于5位的正整数，要求：一、求它是几位数，二、逆序打印出各位数字。
function fn(num) {
    var str = num + '';
    var len = str.length;
    console.log('它是' + len + '位数');
    for(var i = len - 1; i >=0; i--) {
        console.log(str[i]);
    }
}

fn(12345);













