// 暂停一秒输出，并格式化当前时间   2015-10-21 17:48:40
console.log(11);
setTimeout(() =>{
    var date = new Date();
    console.log(date.getFullYear() + '-' + 
                (date.getMonth() + 1)  + '-' +
                date.getDate() + '  ' +
                date.getHours() + ':' +
                date.getMinutes() + ':' +
                date.getSeconds()
            )
}, 1000);