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
我们创建的每个函数都有一个`prototype`(原型)属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。如果按照字母意思来理解，那么`prototype`就是通过调用构造函数而创建的那个对象实例的原型对象。使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。如下例子所示。
{% highlight ruby %}
function Person(){
	
}

Person.prototype.name = "names";
Person.prototype.age = 18;
Person.prototype.job = "打杂的";
Person.prototype.sayName = function (){
	alert(this.name);	
};

var person1 = new Person();
person1.sayName();		//"names"

var person2 = new Person();
person2.sayName();		//"names"

alert(person1.sayName == person2.sayName);		//true
{% endhighlight %}

虽然在所有实现中都无法访问到[[Prototype]]，但可以通过isPrototypeOf()方法来确定对象之间是否存在这种关系。从本质上讲，如果[[Prototype]]指向调用isPrototypeOf()方法的对象(Person.prototype)，那么这个方法就返回true，如下所示：
{% highlight ruby %}
alert(Person.prototype.isPrototypeOf(person1));		//true
alert(Person.prototype.isPrototypeOf(person2));		//true
{% endhighlight %}
这里，我们用原型对象的isPrototypeOf()方法测试了person1和person2。因为它们内部都有一个指向Person.prototype的指针，因此都返回了true。


ECMAScript 5增加了一个新方法，叫Object.getPrototypeOf()，在所有支持的实现中，这个方法返回[[Prototype]]的值。例如：
{% highlight ruby %}
alert(Object.getPrototypeOf(person1) == Person.prototype);		//true
alert(Object.getPrototypeOf(person1).name);						//"names"
{% endhighlight %}

使用hsaOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。这个方法(不要忘了它是从Object继承来的)值在给定属性存在于对象实例中时，才会返回true。来看下面这个例子。
{% highlight ruby %}
function Person(){
	
}

Person.prototype.name = "names1";
Person.prototype.age = 25;
Person.prototype.job = "打杂的";
Person.prototype.sayName = function (){
	alert(this.name);
};

var person1 = new Person();
var person2 = new Person();

alert(person1.hasOwnProperty("name"));		//false

person1.name = "names2";
alert(person1.name);						//"names2" -- 来自实例
alert(person1.hasOwnProperty("name"));		//true
{% endhighlight %}
通过使用hasOwnProperty()方法，什么时候访问的是实例属性，什么时候访问的是原型属性就一清二楚了。

同事使用hasOwnProperty()方法和in操作符，就可以确定该属性到底是存在于对象中，还是存在于原型中，如下所示。
{% highlight ruby %}
function hasPrototypeProperty(object, name){
	return !object.hasOwnProperty(name) && (name in object);
}
{% endhighlight %}
由于in操作符只要通过对象能够访问到属性就返回true，hasOwnProperty()只在属性存在于实例中时才返回true，因此只要in操作符返回true而hasOwnProperty()返回false，就可以确定属性是原型中的属性。

更简单的原型语法<br/>
前面的例子中每添加一个属性和方法，就要重新敲一遍Person.prototype。为了减少不必要的输入，也为了从视觉上更好的封装原型的功能，更常见的做饭是用一个包含所有属性和方法的`对象字面量`来重写整个原型对象，如下面的例子所示。
{% highlight ruby %}
function Person(){
	
}

Person.prototype = {
	name: "names",
	age: 25,
	job: "打杂的",
	sayName: function (){
		alert(this.name);
	}	
};
{% endhighlight %}
在上面的代码中，我们将Person.prototype设置为等于一个以对象字面量形式创建的新对象。最终结果相同，但于一个例外：constructor属性不再指向Person了。此时，尽管instanceof操作符还能返回正确的结果，但通过constructor已经无法确定对象的类型了，如下所示。
{% highlight ruby %}
var friend = new Person();

alert(friend instanceof Object);		//true
alert(friend instanceof Person);		//true
alert(friend.constructor == Person);	//false
alert(friend.constructor == Object);	//true
{% endhighlight %}
在此，用instanceof操作符测试Object和Person仍然返回true，但constructor属性则等于Object而不等于Person了。如果constructor的值真的很重要，可以像下面这样特意将它设置会适当的值。
{% highlight ruby %}
function Person(){
	
}

Person.prototype = {
	constructor: Person,
	name: "names",
	age: 25,
	job: "打杂的",
	sayName: function (){
		alert(this.name);
	}	
};
{% endhighlight %}
以上代码特意包含了一个constructor属性，并将它的值设置为Person，从而确保了通过该属性能够访问到适当的值。

原型对象的问题<br/>
原型模式也不是没有缺点。首先，它省略了为构造函数传递初始化参数这一环节，结果所有实例在默认情况下都将取得相同的属性值。虽然这会在某种程度上带来一些不方便，但这还不是原型最大的问题。原型模式最大的问题是由其共享的本性所导致的。



















