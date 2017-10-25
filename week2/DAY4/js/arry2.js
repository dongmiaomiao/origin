var ary=[1,4,5,3,6,5,8,7,5,6,8];
var obj={};
for(var i=0;i<ary.length;i++){
    var cur=ary[i];
    if(typeof obj[cur]!=='undefined'){
        ary[i]=ary[ary.length-1];
        ary.length--;
        i--;
        continue;

    }
    obj[cur]=cur;
}
console.log(ary);