// 有四个数字：1、2、3、4，能组成多少个互不相同且无重复数字的三位数？各是多少？
var arr = []
for(var i = 1; i < 5; i++) {
    for(var j = 1; j < 5; j++) {
        for(k = 1; k < 5; k++) {
            if(i !== j && i !== k && j !== k) {
                arr.push(i*100 + j * 10 + k);
            }
        }
    }
}



