var num =10;
num >=0 ? (num <= 10 ? num++:num--):(num <= -10? num++:num--);

if (num >= 10){
    if (num<=10){
        num++;
    }else {
        num--;
    }
}else{
    if (num<=10){
        num++;
    }else(num--);
}
console.log(num);