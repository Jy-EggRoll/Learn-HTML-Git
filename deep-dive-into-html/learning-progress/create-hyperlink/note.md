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

相对URL：就是和当前的页面html文件处于同一文件夹的文件、文件夹，再继续衍生的位置。

如果示例文件是`https://www.example.com/projects/index.html`，那么当前的目录就在`projects`下。如果`text.txt`文件位于和`index.html`相同的文件夹下，那么只要使用`text.txt`就能直接访问到这个文件，这就是相对URL。如果有一个文件夹`dir`位于和`index.html`相同的位置下，`dir`里面有一个`OK.txt`文件，那么我们可以用`dir/OK.txt`这个相对路径访问到这个文件。

## 链接的最佳实践

### 使用清晰的链接措辞

直接把信息转化成链接，这比引导点击更合适。

这是好的：

```html
<p><a href="https://www.baidu.com/">进入百度网站</a></p>
```
这是一般的：

```html
<p><a href="https://www.baidu.com/">点击这里</a>进入百度</p>
```

![alt text](image.png)

其他提示：

- 不要在链接文本中直接体现出URL，这很丑。
- 不要在文本中提示：链接到，这其实是无用的内容。不论是屏幕阅读器还是一般的视觉用户，他们都会很自然地觉得这是一个链接。这是因为链接的颜色一般和其他文本不一样，而且链接具有下划线。
- 链接的标签应该尽可能短。
- 尽量减少相同文本链接到不同地方的情况。如出现了多次“单机此处”，但是每一个都代表了不同的链接。

### 链接到非HTML资源——留下清晰的提示

当链接到一个需要下载的资源时，或者点击之后会进行一些行为（比如弹出一个窗口），应当使用更加明确的措辞，以减少混乱。

![alt text](image-1.png)

代码示例：

```html
<!DOCTYPE html>
<html lang="zh-cn">

<head>
    <meta charset="utf-8">
</head>

<body>
    <p>
        <a href="https://www.example.com/somepdf.pdf">下载一个PDF文件（10MB）</a>
    </p>

    <p>
        <a href="https://www.example.com/video/" target="_blank">观看视频（将打开新标签页，高清）</a>
    </p>
</body>

</html>
```

### 在下载链接时使用download属性

```html
<p>
    <a href="https://www.example.com/something" download="MySoftWare.exe">下载我的软件（中文版，64位）</a>
</p>
```