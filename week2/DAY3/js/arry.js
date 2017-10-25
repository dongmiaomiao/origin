var ary= [8,1,5,2,4,9,6,2];

//=>冒泡排序
function bubble(ary){
    for (var i=0;i<ary.length-1;i++){
        for(var j=0;j<ary.length-1-i;j++){
            if(ary[j]>ary[j+1]){
                var temp=ary[j];
                ary[j]=ary[j+1];
                ary[j+1]=temp;
            }
        }
    }
    // return ary;
}
bubble(ary);
console.log(ary);