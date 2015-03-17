---
layout: post
title: 阅读《css3权威指南(第三版)》第三章
category: read
---

<h2>结构和层叠</h2>

{% highlight ruby %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}