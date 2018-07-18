// 输入三个整数x,y,z，请把这三个数由小到大输出。

function sortFn(...args) {
    console.log(args);
    return args.sort((a, b) => a - b);
}


sortFn(34, 45, 12, 56, 67, 30);


















