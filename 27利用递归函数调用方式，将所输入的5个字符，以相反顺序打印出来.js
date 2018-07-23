// 利用递归函数调用方式，将所输入的5个字符，以相反顺序打印出来
function fn(str) {
    var newStr = '';
    var len = str.length - 1;
    while(len >= 0) {
        newStr += str[len];
        len --;
    }
    return newStr;
}

fn('abcdefg');


