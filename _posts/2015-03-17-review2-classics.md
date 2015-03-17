---
layout: post
title: 阅读《css3权威指南(第三版)》第三章
category: read
---

<h2>结构和层叠</h2>

继承是从一个元素向其后代元素传递属性值所采用的机制。确定应当向一个元素应用哪些值时，用户代理不仅要考虑继承，还要考虑声明的特殊性，另外需要考虑声明本身的来源。这个过程就称为  `层叠`。

<h4>特殊性</h4>
选择器的特殊性由选择器本身的组件确定。特殊性值表述为4个部分，如：0，0，0，0。一个选择器的具体特殊性如下确定：
<ul>
	<li>对于选择器中给定的各个ID属性值，加0，1，0，0。</li>
	<li>对于选择器中给定的各个类属性值、属性选择或伪类，加0，0，1，0。</li>
	<li>对于选择器中给定的各个元素和伪元素，加0，0，0，1。</li>
	<li>结合符和通配选择器对特殊性没有任何贡献。</li>
</ul>
例如，以下规则中选择器的特殊性见注释：

{%highlight css%}
h1 {color: red;}  	/* specificity = 0,0,0,1 */
p em {color: purple;}  	/* specificity = 0,0,0,2 */
.grape {color: purple;}  	/* specificity = 0,0,1,0 */
*.bright {color: yellow;}  	/* specificity = 0,0,1,0 */ 
p.bright em.dark{color: maroon;}  	/* specificity = 0,0,2,2 */ 
#id216 {color: blue;}  	/* specificity = 0,1,0,0 */
div#sidebar *[href] {color: silver;}  	/* specificity = 0,1,1,1 */
{%endhighlight%}

<h4>重要性</h4>
有时某个声明可能非常重要，超过了所有其他声明。
CSS2.1称之为重要声明（原因显而易见），并允许在这些声明的结束分号之前插入!important来标志。
 `p.dark{color: #333 !important; background: white;}`









{% highlight ruby %}
{% endhighlight %}

