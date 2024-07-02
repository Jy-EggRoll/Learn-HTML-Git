# 创建超链接

## 什么是超链接

超链接是互联网最棒的创新点，它的出现让“互联网”变成一个*互联的网络*。超链接几乎可以指向任何东西，任何东西也可以转化成超链接。

## 链接的解析

### 块级链接

```html
<a href="https://www.baidu.com">
    <h1>
        这是一个指向百度的标题快
    </h1>
</a>
```

### 图片链接

```html
<a href="https://www.baidu.com">
    <img src="./logo.png" alt="也指向百度">
</a>
```

### 使用title属性添加支持信息

`title`在``<a>`之中，和`href`是平级关系。

```html
<a href="https://www.baidu.com" title="这是一个指向百度的标题">
    <h1>
        这是一个指向百度的标题快
    </h1>
</a>
```

值得注意的是，title提示的信息只有将鼠标悬浮在链接之上的时候才会显示，这样的信息提示手段不直观，对于完全使用键盘的用户也不友好。所以，建议少用`title`来提示信息。

## 统一资源定位符（URL）与路径（path）快速入门

统一资源定位符（Uniform Resource Locator, URL）是一个定义了在网络上位置的文本字符串。

```html
<p>
    <a href="URL-and-path.html">当前目录下的一个HTML文件</a>
</p>

<p>
    <a href="new-dir/newfile.txt">指向子目录的一个txt文件</a>
</p>

<p>
    <a href="../note.md">指向上级目录的大纲笔记</a>
</p>
```

### 文档片段

超链接除了可以链接到文档外，也可以链接到文档内的一部分。这个部分被称之为文档片段。要做到这一点，被链接的部分要被分配一个`id`。

用`id`链接，不仅可以链接到其他文档的部分，也可以链接到文档自身的部分。

```html
<p id="OK">这是一个待链接的部分</p>

<a href="#OK">链接到本文档的待链接部分</a>

<a href="otherpath/other.html#otherid">链接到其他文档的特定部分</a>
```

### 绝对URL和相对URL

绝对URL：由其在Web上的绝对位置定义的位置，包括协议和域名。

如果`index.html`上传到了`project`这个目录，`project`位于web服务站点的根目录，web站点的域名为`https://www.example.com`，那么这个网站就可以通过`https://www.example.com/project/index.html`来访问（或者链接就是`https://www.example.com/project/`，大多数web服务器会默认加载`index.html`这类页面）。

不管绝对URL在哪里使用，它总是指向确定的相同位置。