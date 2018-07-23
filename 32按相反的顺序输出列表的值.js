// 按相反的顺序输出列表的值。
// ['one', 'two', 'three']
// three
// two
// one

var arr = ['one', 'two', 'three'];
var len = arr.length - 1;
for(var i = len; i>= 0; i--) {
    console.log(arr[i]);
}