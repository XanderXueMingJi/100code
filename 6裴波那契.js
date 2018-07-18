function fb(num) {
    num -= 1;
    if(num === 0) {
        return 1;
    }
    if(num === 1 || num === 2) {
        return num;
    }
    var a = 1,
        b = 1;
    while(num) {
        [a, b] = [b, a+b]; // 这里要想明白!!!
        num -= 1;
    }
    return a;
}
fb(8); //成功了