var oTab=document.getElementById('oTab');
var oList=oTab.getElementsByTagName('li');
var oDivList=oTab.getElementsByTagName('div');
for(var i=0;i<oList.length;i++){
    oList[i].myIndex=[i];
    oList[i].onclick=function () {
        for(var j=0;j<oList.length;j++){
            oList[j].className=oDivList[j].className=null;
        }
        this.className=oDivList[this.myIndex].className='select';
    }

}
