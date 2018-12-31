const N = 5;
var str = ''; 
var cnt = 1;
for(var i = 0; i < N; i++) {
    for(j = 0; j < N - i; j++) {
        str += ' ';
    }
    for(j = 0; j < cnt; j++) {
        str += "*" 
    }
    console.log(str);
    str = '';
    cnt += 2;
}