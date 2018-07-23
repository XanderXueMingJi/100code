// 题目：打印出如下图案（菱形）:

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *



//    *
//   ***
//  *****
// *******

var num = 7;
var show = Math.round(num / 2);
var str = '';

for (var i = 0; i < num; i++) {
    if (show === i) {
        str += '*';
    } else {
        str += ' ';
    }

}

console.log(str);



var n = prompt("请输入一个数字");
//输入n,n为等腰三角形的行数
for (var i = 1; i <= n; i++) {
    //外循环控制等腰三角形的行数
    for (var j = n - 1; j >= i; j--) {
        //打印等腰三角形每行前的空格数
        document.write("&nbsp;");
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        //输出等腰三角形
        document.write("*");
    }
    document.write("<br />");
}



var n = prompt("请输入一个数字");
//输入n,n为等腰三角形的行数
for (var i = 1; i <= n; i++) {
    //外循环控制等腰三角形的行数
    for (var j = n - 1; j >= i; j--) {
        //打印等腰三角形每行前的空格数
        document.write("&nbsp;");
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        //输出等腰三角形
        document.write("*");
    }
    document.write("<br />");
}


var n = 7;
var str = '';
//输入n,n为等腰三角形的行数
for (var i = 1; i <= n; i++) {
    //外循环控制等腰三角形的行数
    for (var j = n - 1; j >= i; j--) {
        //打印等腰三角形每行前的空格数
        // document.write("&nbsp;");
        str += ' ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        //输出等腰三角形
        // document.write("*");
        str += '*';
    }
    // document.write("<br />");
    // document.write("<br />");
    console.log(str);
    str = '';
}




var n = 7;
var str = '';
for (var i = 1; i <= n; i++) {
    for (var j = n - 1; j >= i; j--) {
        str += ' ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        str += '*';
    }
    console.log(str);
    str = '';
}


