# HTML文本处理基础

## 基础：标题和段落

```HTML
<p>我是一个段落</p>
```

```HTML
<h1>我是一级标题</h1>
<h6>我是六级标题</h6>
```

下面是一些基础原则：

- 最好只对每个页面用一次`<h1>`。
- 确保在正确的层次使用正确地标题级数。
- 除非有必要，标题级数不超过3。层级太多的文件会变得笨重，难以浏览，如果可行的话，将内容分散到多个页面上。

### 为什么我们需要语义？

`<h1>`的语义值可以以多种形式被使用。比如搜索引擎、屏幕阅读器。

我们可以让任何一个元素看起来像个顶级标题。

```HTML
<span style="font-size: 32px; margin: 21px 0; display: block;">这是个顶级标题吗？</span>
```

![alt text](image.png)

显然，不是的，它没有顶级标题的语义值。`<span>`元素没有语义，使用CSS或者JS时，可以用它来包裹内容。

## 列表

### 无序列表

```HTML
<ul>
    <li>苹果</li>
    <li>香蕉</li>
    <li>橘子</li>
</ul>
```

### 有序列表

```HTML
<ol>
    <li>第一步</li>
    <li>第二步</li>
    <li>第三步</li>
</ol>
```