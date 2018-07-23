// 有一分数序列：2/1，3/2，5/3，8/5，13/8，21/13...求出这个数列的前20项之和。
var res = 0;
var zi = 2;
var mu = 1;
for(var i = 0; i < 20; i++) {
    res += zi / mu;
    [zi, mu] = [zi + mu, zi];
}

console.log(res); // 32.66026079864164



//32.6602607986 答案


