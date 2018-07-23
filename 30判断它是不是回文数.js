// 一个5位数，判断它是不是回文数。即12321是回文数，个位与万位相同，十位与千位相同。

//只拿五位数做参考
function fn(num) {
    var str = num + '';
    var bool = str[0] === str[4] && str[1] === str[3];
    var res = bool?'':'不';
    console.log(res + '是回文');
    return;
}

fn(12321)





