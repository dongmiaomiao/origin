// var areaStr = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// var result = '';
//  for(var i=0;i<4;i++){
//      var ran=Math.round(Math.random()*61);
//      var char =areaStr .charAt(ran);
//      result+= char;
//  }
//  codeBox.innerHTML=result;



function queryCode() {
    var result ="";
    areaStr ='1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    for (var i =0;i<4;i++){
        var ran=Math.round(Math.random()*61);
        result+=areaStr[ran];
    }
    codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick=queryCode;