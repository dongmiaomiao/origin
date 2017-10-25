var oListBox=document.getElementById('oListBox');
  var  oList=oListBox.getElementsByTagName('li');

for (var i = 0; i < oList.length; i++) {
     var n=i%3,
     curLi =oList[i];
    if(n===0){
        curLi.style.backgroundColor="#e00";
    }else if(n===1){
        curLi.style.backgroundColor="#777";
    }else {
        curLi.style.backgroundColor="#004";
    }
}
// for (var i = 0; i < oList.length; i++) {
//     var n = i % 3,
//         curLi = oList[i];
//     if (n === 0) {
//         curLi.style.backgroundColor = '#555';
//     } else if (n === 1) {
//         curLi.style.backgroundColor = '#eee';
//     } else {
//         curLi.style.backgroundColor = '#ddd';
//     }
// }