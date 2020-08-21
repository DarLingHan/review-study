## http缓存

## 为什么要做持久化缓存呢
- 用户第一次访问我们的网站时，将一些静态资源，不经常更改的资源缓存到本地，当下次再访问时直接从缓存里读取，不用再占用流量访问服务器。

## webpack如何做持久化缓存
- 业务代码与第三方代码，业务代码经常变更，不触发第三方代码的重复加载。
- 按需加载：当用户用到某个资源的时候再去加载。
- 公共模块抽离，webpack的一个插件CommonChunkPlugin

## 缓存
一个优秀的缓存可以缩短网页请求，减少延迟，并且可以减少带宽，降低网络负荷。
缓存的分类：
    - 数据库缓存
    - 代理服务器缓存
    - cdn缓存
    - 浏览器缓存

## 浏览器缓存
页面的缓存状态是由header决定的，header的参数有四种
- ETag 内容实体经过特定的算法生成一个hash值 确定有没有过期
- Last-modified 服务器文件上次更新的时间
- Cache-control 过期的时间段
- Expires 过期时间，某一刻

Last-modified不能识别秒以下的过期时间；
某些服务器不能精确获取最后修改时间，所以last-modifed不生效;
一些资源的最后修改时间变了，但是内容却没有发生变化，用Etag更准确。

Expires = max-age +  请求时间 和 last-modifed结合使用
Cacahe-control 和 last-modified一起使用

last-modifed会向服务器传送 if-modified-since报头，询问last-modifed时间，如果没有修改，返回304状态码。

## 浏览器请求到展示资源的过程
用户请求资源 ——》 判断是否有缓存 ——》 没有缓存直接请求服务器 ——》 返回资源，缓存协商
用户请求资源 ——》 判断是否有缓存 ——》有缓存 ——》 判断缓存是否过期 ——》没有过期 ——》直接读取本地缓存里的数据
用户请求资源 ——》 判断是否有缓存 ——》有缓存 ——》 判断缓存是否过期 ——》过期了 ——》判断有无ETag ——》 没有ETag,判断有无Last-modified ——》 没有直接请求服务器 ——》返回资源，缓存协商
用户请求资源 ——》 判断是否有缓存 ——》有缓存 ——》 判断缓存是否过期 ——》过期了 ——》判断有无ETag ——》 有ETag，向服务器发送请求头 if-none-macth ——》 200就返回资源，缓存协商；304就读取本地缓存
用户请求资源 ——》 判断是否有缓存 ——》有缓存 ——》 判断缓存是否过期 ——》过期了 ——》判断有无ETag ——》 没有ETag,判断有无Last-modified ——》有last-modifed，向服务器发送请求头if-modifed-since ——》200就返回资源，缓存协商；304就读取本地缓存

Expires 和 Cache-control ——》 属于强制缓存
Last-Modified / If-Modified-Since和Etag / If-None-Match ——》 属于协商缓存

Pragma: no-cache兼容http 1.0 ，Cache-Control: no-cache是http 1.1提供的
