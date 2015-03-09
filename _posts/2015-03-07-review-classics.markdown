---
layout: post
title: 阅读《css3权威指南(第三版)》，回顾经典，温故知新
category: read
---

<h3>回顾经典，温故知新</h3>
<p>在上一篇文章中写了自己为何要建这个个人主页。于是从这个周末起，以后将陆续读完当初未读完的书，好好的回顾一下，并且加深一些对基础知识概念的理解，为后期学习更高深的东西做铺垫。</p>
<ul>
	<li>css 和 文档</li>
</ul>
<h4>块级元素</h4>
<p>块级元素生成一个元素框，(默认地)它会填充其父元素的内容区，旁边不能有其他元素。</p>
<p>列表项是块级元素的一个特例。除了表现方式与其他块元素一致，列表项还会生成一个标记符 -- 无序列表中这通常是一个圆点，有序列表中则是一个数字 -- 这个标记符会“关联”到元素框。</p>
<h4>行内元素</h4>
<p>行内元素在一个文本行内生成元素框，而不会打断这行文本。行内元素最好的例子就是XHTML中的a元素。</p>
<p>注意：尽管“块” 和 “行内” 这两个词与XHTML中的块级和行内元素有很多共同点，但也存在一个重要的差别。在HTML和XHTML中，块级元素不能继承自行内元素(即不能嵌套行内元素中)。但是在css中，对于显示角色如何嵌套不存在任何限制。</p>
<p>下面来了解一个css属性：display。</p>
<div>
	<h5>display</h5>
	<table>
		<tr>
			<td style="width: 100px;">值</td>
			<td>none | inline | block | inline-block | list-item | run-in | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-column-group | table-column | table-cell | table-caption | inherit</td>
		</tr>
		<tr>
			<td style="width: 100px;">初始值</td>
			<td>inline</td>
		</tr>
		<tr>
			<td style="width: 100px;">应用于</td>
			<td>所有元素</td>
		</tr>
		<tr>
			<td style="width: 100px;">继承性</td>
			<td>无</td>
		</tr>
		<tr>
			<td style="width: 100px;">计算值</td>
			<td>对于浮动元素、定位元素和根元素可变；否则为指定值</td>
		</tr>
	</table>
</div>
<h4>link标记</h4>
<p>属性</p>
<p>在link中，rel代表“关系”。在这里，关系为stylesheet。type总是设置为text/css。这个值描述了使用link标记加载的数据的类型。这样一来，Web浏览器就知道了样式表是css样式表，这将确定浏览器如何处理其导入的数据。毕竟，将来可能会使用其他的样式语言，所以声明使用何种语言很重要。</p>
<p>接下来可以看到href属性。这个属性的值是样式表的URL。可以是绝对URL，也可以是相对URL，具体取决于要做的工作。</p>
<p>最后还有一个media属性。css2为这个属性定义了很多可取值。</p>
<dl>
	<dt>all</dt>
	<dd>用于所有表现媒体。</dd>
	<dt>aural</dt>
	<dd>用于语音合成器、屏幕阅读器和文档的其他声音表现。</dd>
	<dt>braille</dt>
	<dd>用Braille设备表现文档时使用。</dd>
	<dt>embossed</dt>
	<dd>用Braille打印设备打印时使用。</dd>
	<dt>handheld</dt>
	<dd>用于手持设备，如个人数字助理或支持Web的蜂窝电话。</dd>
	<dt>print</dt>
	<dd>为视力正常的用户打印文档时使用，另外还会在显示文档的 “打印预览” 时使用。</dd>
	<dt>projection</dt>
	<dd>用于投影媒体，如发表演讲时显示幻灯片的数字投影仪。</dd>
	<dt>screen</dt>
	<dd>在屏幕媒体(如桌面计算机监视器)中表现文档时使用。在这种系统上运行的所有Web浏览器都是屏幕媒体用户代理。</dd>
	<dt>tty</dt>
	<dd>在固定间距环境(如电传打字机)中显示文档时使用。</dd>
	<dt>tv</dt>
	<dd>在电视上显示文档时使用。</dd>
</dl>
<p>其中3个得到最广泛支持的类型是all、screen和print。</p>	
<hr />

<h3>选择器</h3>	
<p>分组选择器</p>
<ul>
	<li>使用逗号(,)来分隔</li>
</ul>
<p>通配选择器</p>
<ul>
	<li>通配选择器，显示为一个星号(*)。这个选择器可以与任何元素匹配，就像是一个通配符。</li>
</ul>
<p>类选择器和ID选择器</p>
<ul>
	<li>类选择器前面有一个 . 号。</li>	
	<li>ID选择器前面有一个 # 号</li>
</ul>
<p>属性选择器</p>
<ul>
	<li>简单属性选择器</li>
	<li>如果希望选择有某个属性的元素，而不论该属性的值是什么，可以使用一个简单属性选择器。例如：h1[class]{color: red;}</li>
</ul>

	`<table>
			<tr>
				<th width="150" align="center">类型</th>
				<th align="center">描述</th>
			</tr>
			<tr>
				<td align="center">[foo^="bar"]</td>
				<td align="center">选择foo属性值以 "bar" 开头的所有元素</td>
			</tr>
			<tr>
				<td align="center">[foo$="bar"]</td>
				<td align="center">选择foo属性值以 "bar" 结尾的所有元素</td>
			</tr>
			<tr>
				<td align="center">[foo*="bar"]</td>
				<td align="center">选择foo属性值中包含子串 "bar" 的所有元素</td>
			</tr>
		</table>`

		---- 未完待续 ----
