var shakeBtn=document.getElementById('shakeBtn');
 var range1='ABCDEF',
     range2='QWERTYUIOPASDFGHJKLZXCVBNM1234567890';
 shakeBtn.onclick=function () {
     n++;
     if(n > 3){
         alert('不能在摇号了！');
     }
 }
