// 求s=a+aa+aaa+aaaa+aa...a的值，其中a是一个数字。例如2+22+222+2222+22222(此时共有5个数相加)，几个数相加由键盘控制。
// n = 4
// a = 4
// 4
// 44
// 444
// 4444
// 计算和为： 4936

function fn(num, len) { //目前只支持个位数
    var ref = 0;
    var newNum = 0;
    for(var i = 0; i < len; i++) {
        newNum += num * Math.pow(10, i);
        ref += newNum;
        
    }
    return ref;
};

fn(4, 4)







