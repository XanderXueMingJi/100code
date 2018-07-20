// 输入一行字符，分别统计出其中英文字母、空格、数字和其它字符的个数。
// 123runoobc  kdf235*(dfl
//    char(英文) = 13,  space(间隔) = 2,   digit(数字) = 6,   others(其它) = 2

function fn(str) {
    var chin = 0,
        char = 0,
        digit = 0,
        space = 0,
        others = 0,

        reCh = /^[\u4E00-\u9FA5]+$/i, //中文 不要加g(全局)
        reEh = /^[A-Za-z]+$/i, //英文
        reNum = /^[0-9]+$/i, //英文
        reSpace = /(\s$)/; //空格

    for(var i = 0, len = str.length; i < len; i++ ) {
        if(reCh.test(str[i])) {
            chin++;
            continue;
        }

        if(reEh.test(str[i])) {
            char++;
            console.log('字符串:',str[i]);
            continue;
        }
        if(reNum.test(str[i])) {
            digit++;
            continue;
        }
        if(reSpace.test(str[i])) {
            space++;
            continue;
        }

        others++;
    }
    return {
        chin,
        char,
        digit,
        space,
        others,
    }
}

fn('123ru除noobc  k筏df235*(dfl');