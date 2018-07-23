// 利用递归方法求5!。

// 例如 5!=5*4*3*2*1


function fn(num) {
    if(num === 1) {
        return 1;
    } 
    return num * fn(num - 1);
}


fn(5);


