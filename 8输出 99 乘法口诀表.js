for(var i = 1; i < 10; i++) {
    var str = '';
   for(var j = 1; j <=i; j++) {
       str += i + '*' + j + '=' + i*j + ' '
   }
   console.log(str);
}