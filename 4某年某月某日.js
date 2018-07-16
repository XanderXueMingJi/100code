// 输入某年某月某日，判断这一天是这一年的第几天？




function getDay(date) {
    // date = {
    //     year: 2018,
    //     mon: 07,
    //     day: 16
    // }

    var arr = [];
    var num = 0;
    // 判断是否为闰年 1、能整除4且不能整除100 2、能整除400
    if((date.year % 4 === 0 && data.year % 100 !== 0) || date % 400 === 0) {
        arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }else {
        arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }
    for(var i = arr.length - 1; i > 0 ; i--) {
        if(i + 1 === date.mon) {
            num += date.day;
        }else if(i + 1 < date.mon) {
            num += arr[i];
        }
    }
    return num;
}


var obj = {
	year: 2015,
	mon: 6,
	day: 7
}


getDay(obj) // 127  实际应该是158有问题!!















