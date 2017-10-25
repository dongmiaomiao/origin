/*
* 在真实项目中当我们点击列表页面中的某一项，可以跳转到详情页面，在详情页面查看一些相关信息；列表页面中点击不同项，在详情页面中也可以展示不同的信息；详情页面是一个（不是多个），如同在同一个详情页面中，区分出点击的是列表页面中的哪一条信息？
*   ->URL问号传参：当点击列表页面中的每一项实现页面跳转的时候，我们向详情页面地址后面增加问号传参，在详情页面中，我们通过获取问号传递参数的值，展示不同的信息
* */



//=>获取URL地址中问号传递的参数值
function  queryURLParameter(url) {
    //=>url: "http://"
    var indexAsk = url.indexOf('?'),
        obj = {};
    if(indexAsk ===-1)  return obj;
    url =url.substr(indexAsk+1);
    var urlAry = url.split('&');
    for(var i = 0;i<urlAry.length;i++){
        var item = urlAry[i],
            itemAry = item.split('=');
        obj [itemAry[0]]=itemAry[1];
    }
    return obj;
}
var result=queryURLParameter('http://www.zhufengpeixun.cn/stu/?name=zxt&age=27&sex=0');
console.log(result);