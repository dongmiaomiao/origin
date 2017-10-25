var oTab=document.getElementById('oTab'),
    oList=oTab.getElementsByTagName('li'),
    oDivLIst=oTab.getElementsByTagName('div');
for(i=0;i<oList.length;i++){
    oList[i].myIndex=[i];
    oList[i].onclick=function () {
        for(j=0;j<oList.length;j++){
            oList[j].className=oDivLIst[j].className=null;
        }
        this.className=oDivLIst[this.myIndex].className='select'
    }
}
