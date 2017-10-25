/*
需求：让所有Li中的偶数行背景颜色变为#EEE
*/
//=>1、想要操作哪些元素就先获取哪些元素
//  getElementById：通过元素的ID来获取到这个元素
//  document.getElementById：此处出现的document是获取元素时候的上下文
// (context):上下文其实就是获取元素的时候限定的一个范围，这里限定在整个页面中获取需要的元素


//getElementByTagName：通过标签名来获取到一组元素集合

 var hotNewsBox= document.getElementById('hotNews'); //=>定义一个变量存储我们获取到的这个UL元素
 var newsList =hotNewsBox.getElementByTagName('li');  //在指定上下文（hotNewsBox）中通过标签把所以的LI获取到，存储在一个变量中


//=>在JS中获取的元素
//=>className：设置或者存储了当前元素的CLASS样式类


//=>id:
//=>style：

console.log(newsList);
//=>JS 中获取到的元素集合是一个类数组（类似数组但是不是数组）
//1、这个类数组集合是一个对象数据类型，有一个LENGTH属性存储值代表当前集合中获取元素的个数 newsList.length  /  newsList[length]
//2、这个集合中的每一项都是存储在数字属性名上面，如果想获取其中一项 newsList[0]第一项


//itar tab键自动生成循环
//=>为啥i要从零开始：因为newsList集合的索引就是从零开始的，我们查找的时候也是从索引零开始一个个的查找，i设置为零，那么i每一次循环存储的值相当于我们要查找的那个索引
for (var i = 0; i < hotNewsBox.length; i++) {
    var obj = hotNewsBox[i];

}



//->鼠标滑过变颜色：每一次循环都会给当前操作的这个LI绑定一个鼠标滑过


//->鼠标离开：让其回归原有颜色


/*
* 自定义属性思想：
* 真实项目中凡是符合：之前的一些信息，我们需要在后续某些操作的时候拿来使用，此时我们就可以在之前把信息存储在元素的一个属性名上(而这个属性名是自定义的)，后续使用的时候我们把属性名
* */






