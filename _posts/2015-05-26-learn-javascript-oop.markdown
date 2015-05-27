---
layout: post
title: javascript 面向对象(oop)
category: study
---

最近闲来无事，又重新温故了一下*《javascript 高级程序设计》(第三版)*的前六章。

关于高程三，尤其是第六章，主要讲解了js里面的各种面向对象的写法。每看一次这章，对js的面向对象就加深了一层理解。

今天就把最近学到的、看到的关于js的面向对象的知识记录一下，以便将来更好的回顾。

从书上最基础的地方说起，面向对象这个东西，其实说起来就是一种思想，当然了，真正想要理解面向对象，还是需要去学习一门真正的面向对象的语言(java就是一门真正面向对象的语言)。未来有空闲的时间，也会去学习一下java。

要理解面向对象，首先就得理解对象。创建一个对象最简单的方法，就是创建一个Object实例，然后再给它添加属性和方法。
{% highlight ruby %}
var person = new Object();
person.name = "no name";
person.age = 18;
person.job = "打杂";
person.sayName = function (){
	alert(this.name);	
};
{% endhighlight %}
如上所示，创建了一个名为person的对象，并为它添加了三个属性(name、age和job)和一个方法(sayName())。这些属性在创建时都带有一些特征值，javascript通过这些特征值来定义它们的行为。

###属性类型
在ECMAScript中的属性值有两种：数据属性和访问器属性。
> 1.数据属性
>
> 数据属性包含一个数据值的位置。在这个位置上可以读取和写入值。数据属性有4个描述其行为的特性。
>
- [[Configurable]]：表示能否通过delete删除属性从而重新定义属性。
- [[Enumerable]]：表示能否通过for-in循环返回属性。
- [[Writable]]：表示能否修改属性的值。
- [[Value]]：包含这个属性的数据值。

> 要修改属性的默认的特性，必须使用ECMAScript5的Object.defineProperty()方法。
>


