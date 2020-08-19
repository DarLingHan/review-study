## 浏览器进程
在Chrome中，主要的进程有4个：
- 浏览器进程 (Browser Process)：负责浏览器的TAB的前进、后退、地址栏、书签栏的工作和处理浏览器的一些不可见的底层操作，比如网络请求和文件访问。
- 渲染进程 (Renderer Process)：负责一个Tab内的显示相关的工作，也称渲染引擎。
- 插件进程 (Plugin Process)：负责控制网页使用到的插件
- GPU进程 (GPU Process)：负责处理整个应用程序的GPU任务

## 浏览器的进程模式
- Process-per-site-instance (default) - 同一个 site-instance 使用一个进程
- Process-per-site - 同一个 site 使用一个进程
- Process-per-tab - 每个 tab 使用一个进程
- Single process - 所有 tab 共用一个进程
    Process-per-site-instance 是最重要的，因为这个是 Chrome 默认使用的模式，也就是几乎所有的用户都在用的模式。当你打开一个 tab 访问 a.baidu.com ，然后再打开一个 tab 访问 b.baidu.com，这两个 tab 会使用两个进程。而如果你在 a.baidu.com 中，通过JS代码打开了 b.baidu.com 页面，这两个 tab 会使用同一个进程。

## Browser Process 划分出不同的工作线程
- UI thread：控制浏览器上的按钮及输入框；
- network thread：处理网络请求，从网上获取数据；
- storage thread：控制文件等的访问

## 渲染进程中，包含线程分别是：
- 一个主线程（main thread）
- 多个工作线程（work thread）
- 一个合成器线程（compositor thread）
- 多个光栅化线程（raster thread）

## 浏览器对事件的处理
以点击事件（click event）为例，让鼠标点击页面时候，首先接受到事件信息的是Browser Process，但是Browser Process只知道事件发生的类型和发生的位置，具体怎么对这个点击事件进行处理，还是由Tab内的Renderer Process进行的。Browser Process接受到事件后，随后便把事件的信息传递给了渲染进程，渲染进程会找到根据事件发生的坐标，找到目标对象（target），并且运行这个目标对象的点击事件绑定的监听函数（listener）。
