// 两个乒乓球队进行比赛，各出三人。甲队为a,b,c三人，乙队为x,y,z三人。
// 已抽签决定比赛名单。有人向队员打听比赛的名单。
// a说他不和x比，
// c说他不和x,z比，请编程序找出三队赛手的名单。
// order is a -- z     b -- x    c--y


function fn(arr1, arr2) {
    var arr = [];
    for(var i = 0, len1 = arr1.length; i < len1; i++) {
        for(var j = 0, len2 = arr2.length; j < len2; j++) {
            var str1 = arr1[i];
            var str2 = arr2[j];
            if(str1 === 'a' && str2 !== 'x' ){
                arr.push({
                    str1,
                    str2,
                })
                continue;
            }
            if(str1 === 'c' && str2 !== 'x' && str2 !== 'z') {
                arr.push({
                    str1,
                    str2,
                })
                continue;
            }

        }
    }
    return arr;
}

fn(['a', 'b', 'c'], ['x', 'y', 'z']);


