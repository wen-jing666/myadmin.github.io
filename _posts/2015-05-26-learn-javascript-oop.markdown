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
在ECMAScript中的属性值有两种：数据属性和访问器属性。<br/>
1.数据属性 <br/>
数据属性包含一个数据值的位置。在这个位置上可以读取和写入值。数据属性有4个描述其行为的特性。

* [[Configurable]]：表示能否通过delete删除属性从而重新定义属性。
* [[Enumerable]]：表示能否通过for-in循环返回属性。
* [[Writable]]：表示能否修改属性的值。
* [[Value]]：包含这个属性的数据值。

要修改属性的默认的特性，必须使用ECMAScript5的Object.defineProperty()方法。这个方法接收三个参数：属性所在的对象、属性的名字和一个描述符对象。其中，描述符对象的属性必须是：configurable、enumerable、writable和value。如下所示：
{% highlight ruby %}
var person = {};
Object.defineProperty(person, "name", {
	writable: false,
	value: "no names"
});

alert(person.name);		//"no names"
person.name = "names";
alert(person.name);		//"no names"
{% endhighlight %}
以上例子创建了一个名为name的属性，它的值是"no names"，是只读的。这个属性是不可修改的。

###创建对象

虽然Object构造函数或对象字面量都可以用来创建单个对象，但这些方式有个明显的缺点：`使用同一个接口创建很多对象，会产生大量的重复代码。`为了解决这个问题，我们来学习使用工厂模式的一种变体。

<h4>工厂模式</h4>
工厂模式是软件工程领域一种广为人知的设计模式，这种模式抽象了创建具体对象的过程。
{% highlight ruby %}
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function (){
		aler(this.name);
	};
	return o;
}

var person1 = createPerson("no name", 18, "打杂");
var person1 = createPerson("no name2", 25, "打杂2");
{% endhighlight %}
工厂模式虽然解决了创建多个相识对象的问题，但却没有解决对象识别的问题(怎么知道一个对象的类型)。随着javascript的发展，又一个新模式出现了。

<h4>构造函数模式</h4>
首先我们可以用构造函数模式重写一下前面的例子。
{% highlight ruby %}
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function (){
		aler(this.name);
	};
}

var person1 = new Person("no name", 18, "打杂");
var person2 = new Person("no name2", 25, "打杂2");
{% endhighlight %}
在这个例子中，Person()函数取代了createPerson()函数。Person()中的代码除了与createPerson()中相同的部分外，还存在以下不同之处：

* 没有显式地创建对象；
* 直接讲属性和方法赋给了this对象；
* 没有return语句。

此外，该函数名Person使用的是大写字母P。按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头。

要创建Person的新实例，必须使用`new`操作符。以这种方式调用构造函数实际上会经历以下4个步骤：

* (1)创建一个新对象；
* (2)将构造函数的作用域赋给新对象(因此this就是指向了这个新对象)；
* (3)执行构造函数中的代码(为这个新对象添加属性)；
* (4)返回新对象。

在前面这个例子中，`person1`和`person2`分别保存着`person`的一个不同的实例。这两个对象都有一个`constructor`(构造函数)属性，该属性指向Person，如下所示。
{% highlight ruby %}
alert(person1.constructor == Person);		//true
alert(person2.constructor == Person);		//true
{% endhighlight %}
对象的`constructor`属性最初是用来标识对象类型的。但是，提到检测对象类型，还是`instanceof`操作符要更可靠一些。我们在这个例子中创建的所有对象既是Object的实例，同时也是Person的实例，这一点通过instanceof操作符可以得到验证。
{% highlight ruby %}
alert(person1 instanceof Object);		//true
alert(person1 instanceof Person);		//true
alert(person2 instanceof Object);		//true
alert(person2 instanceof Person);		//true
{% endhighlight %}
创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型；而这正是构造函数模式胜过工厂模式的地方。

构造函数模式虽然好用，但也并非没有缺点。使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。

<h4>原型模式</h4>











