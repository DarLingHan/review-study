// v-bind 都是动态绑定的 所有指令中的值都是变量

/**
 * v-if/v-show
 * 
 * v-if 不会出现在dom节点里 v-show会出现在dom节点里 通过css属性 display:none 控制
 * v-show不能配合template使用 v-if/v-else可以
 */

//  methods 和 window.addeventListener有关 ($event)

/**
 * v-once绑定一次
 * 只是渲染一次 渲染后就会产生缓存，下次更新直接读缓存，有效防止多次渲染
 */

 /**
  * v-html
  * 就是innerHtml
  * 导致xss攻击，不要把用户输入的直接显示出来 cross site scripting 跨站脚本攻击
  * 执行用户输入对脚本或其他脚本 很危险
  * 
  * CSRF 跨站请求伪造 cross site request forgery
  * XSS利用的是用户对指定网站对信任
  * 
  * CSRF利用的是网站对用户浏览器对信任 
  *     列入用户刚访问过银行系统 借助用户浏览器还保存着用户对信息 以用户对名义继续访问银行系统进行操作
  */