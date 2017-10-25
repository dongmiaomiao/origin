// var ary=[3,4,3,4,5,6,7,8];
// var obj ={};
// for( var i=0;i<ary.length;i++){
//     var cur=ary[i];
//
// if(typeof obj[cur]!=='undefined'){
//     ary[i]=ary[ary.length-1];
//     ary.length--;
//     i--;
//     continue;
// }
// obj[cur]=cur;
// }

// console.log(ary);



var ary=[3,4,5,3,2,5,6,4,6];
 var obj={};
 for(var i=0; i<ary.length;i++){
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













// var ary=[2,6,4,5,6,5,4,4,3,6,9,7];
// var obj={};
// for(var i=0;i<ary.length;i++){
//     var cur=ary[i];
//     if(typeof obj[cur]!=='undefined'){
//         ary[i]=ary[ary.length-1];
//         ary.length--;
//         i--;
//         continue;
//     }
//     obj[cur]=cur;
// }
// console.log(ary);






// var ary=[6,7,4,3,9,5,7,4,3,4,6,9,3,9,4,6];
// var obj = {};
// for (var i = 0; i < ary.length; i++) {
//     var cur = ary[i];
//     if (typeof obj[cur] !== 'undefined') {
//         //ary.splice(i, 1);//=>使用splice会导致后面的索引向前进一位,如果后面有很多项,消耗的性能很大
//         //=>思路:我们把最后一项拿过来替换当前要删除的这一项,然后再把最后一项删除
//         ary[i] = ary[ary.length - 1];
//         ary.length--;
//         i--;
//         continue;
//     }
//     obj[cur] = cur;
// }
// console.log(ary);
