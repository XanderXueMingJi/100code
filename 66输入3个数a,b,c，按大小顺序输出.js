// 输入3个数a,b,c，按大小顺序输出


function fn(...arr) {
    return arr.sort((a, b) => a - b);
}

fn(56, 34, 78);