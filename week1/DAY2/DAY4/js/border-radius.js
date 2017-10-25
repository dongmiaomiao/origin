var oList=document.getElementById('oLis');
var oLis=oList.getElementByTagName('li');
for (i=0;i<oLis.length;i++){
    var oLi=oLis[i];
    i%2===0?(oLi.className='c1',oLi.zhufeng='c1'):(oLi.className='c2',oLi.zhufeng='c2');

oLi.onmouseover=function(){
    this.className='c3'
}
oLi.onmouseout=function () {
     var oldval=this.zhufeng;
     this.className=oldval;

}
}