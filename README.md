# 0.React
* 定义
	* 用于构建用户界面的 JavaScript 库(只关注于View)，由Facebook开源
* 特点
	1. Declarative(声明式编码)
	2. Component-Based(组件化编码)
	3. Learn Once, Write Anywhere(支持客户端与服务器渲染)
	4. 高效
	5. 单向数据流
* 高效的原因
	* 虚拟(virtual)DOM, 不总是直接操作DOM
	* DOM Diff算法, 最小化页面重绘
## 1.1 基本使用
* 相关js库
	1. react.development.js: React的核心库
	2. react-dom.js: 提供操作DOM的react扩展库
	3. babel.min.js: 解析JSX语法代码转为纯JS语法代码的库
	4. prop-types.js 可选，接受属性时
* 虚拟DOM
	* React提供了一些API来创建一种 `特别` 的一般js对象
 		* var element = React.createElement('h1', {id:'myTitle'},'hello')
 		* 上面创建的就是一个简单的虚拟DOM对象
	* 虚拟DOM对象最终都会被React转换为真实的DOM
	* 我们编码时基本只需要操作react的虚拟DOM相关数据, react会转换为真实DOM变化而更新界面
## 1.2 JSX
1. 全称:  JavaScript XML
2. react定义的一种类似于XML的JS扩展语法: XML+JS
3. 作用: 用来创建react虚拟DOM(元素)对象
	* var ele = <-h2>Hello JSX!</h2>
	* 注意1: 它不是字符串, 也不是HTML/XML标签
	* 注意2: 它最终产生的就是一个JS对象
4. 标签名任意: HTML标签或其它标签
5. 标签属性任意: HTML标签属性或其它
6. 基本语法规则
	* 遇到 <开头的代码, 以标签的语法解析: html同名标签转换为html同名元素, 其它标签需要特别解析
	* 遇到以 { 开头的代码，以JS语法解析: 标签中的js代码必须用{ }包含
7. babel.js的作用
	* 浏览器不能直接解析JSX代码, 需要babel转译为纯JS的代码才能运行
	* 只要用了JSX，都要加上type="text/babel", 声明需要babel来处理
## 1.3 渲染虚拟DOM(元素)
1. 语法:  ReactDOM.render(virtualDOM, containerDOM) 
2. 作用: 将虚拟DOM元素渲染到页面中的真实容器DOM中显示
3. 参数说明
	* 参数一: 纯js或jsx创建的虚拟dom对象
	* 参数二: 用来包含虚拟DOM元素的真实dom元素对象(一般是一个div)
## 1.4 建虚拟DOM的2种方式
1. 纯JS(一般不用，也不用babel)
 	* React.createElement('h1',{id:'myTitle'},title)
2. JSX:
	* <-h1 id='myTitle'>{title}</h1>
![](https://i.imgur.com/s5elSjA.png)
# 2. 模块与组件和模块化与组件化的理解
## 2.1 模块
* 理解: 向外提供特定功能的js程序, 一般就是一个js文件
* 原因: js代码更多更复杂
* 作用: 复用js, 简化js的编写, 提高js运行效率
## 2.2 组件
* 理解: 用来实现特定(局部)功能效果的代码集合(html/css/js)
* 为什么: 一个界面的功能更复杂
* 作用: 复用编码, 简化项目编码, 提高运行效率
## 模块化
* 当应用的js都以模块来编写的, 这个应用就是一个模块化的应用
## 组件化
* 当应用是以多组件的方式实现, 这个应用就是一个组件化的应用
# React面向组件编程
## 基本理解和使用

![](https://i.imgur.com/K2nijvq.png)

## 自定义组件
* 定义组件
	* 方式1: 工厂函数组件(简单组件)
	* 方式2:  ES6类组件(复杂组件)
* 渲染组件标签

![](https://i.imgur.com/U10Gqkq.png)

## 注意
1. 组件名必须首字母大写
2. 虚拟DOM元素只能有一个根元素
3. 虚拟DOM元素必须有结束标签
## render()渲染组件标签的基本流程
1. React内部会创建组件实例对象
2. 得到包含的虚拟DOM并解析为真实DOM
3. 插入到指定的页面元素内部

# 组件三大属性1: state
![](https://i.imgur.com/ppbPKPz.gif)

## 理解
* state是组件对象最重要的属性, 值是对象(可以包含多个数据)
* 组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)
## 编码操作
![](https://i.imgur.com/IaC0GEw.png)
# 组件三大属性2: props
![](https://i.imgur.com/VMevnhf.png)

![](https://i.imgur.com/oH3qINa.png)
## 理解
* 每个组件对象都会有props(properties的简写)属性
* 组件标签的所有属性都保存在props中
## 作用
* 通过标签属性从组件外向组件内传递变化的数据
* 注意: 组件内部不要修改props数据
![](https://i.imgur.com/aFnIWLH.png)

## props和state属性的区别（面试题）
* state: 组件自身内部可变化的数据
* props: 从组件外部向组件内部传递数据, 组件内部只读不修改

# 组件三大属性3之一: refs与事件处理
![](https://i.imgur.com/gVN6CzY.png)

![](https://i.imgur.com/4cZykOd.gif)
## 组件的3大属性之二: refs属性
1. 组件内的标签都可以定义ref属性来标识自己
	* <input type="text" ref={input => this.msgInput = input}/>
	* 回调函数在组件初始化渲染完或卸载时自动调用
2. 在组件中可以通过this.msgInput来得到对应的真实DOM元素
3. 作用: 通过ref获取组件内容特定标签对象, 进行读取其相关数据
## 事件处理
1. 通过onXxx属性指定组件的事件处理函数(注意大小写)
	* React使用的是自定义(合成)事件, 而不是使用的原生DOM事件
	* React中的事件是通过事件委托方式处理的(委托给组件最外层的元素)
2. 通过event.target得到发生事件的DOM元素对象
![](https://i.imgur.com/DnoXx6h.png)
## 强烈注意
1. 组件内置的方法中的this为组件对象
2. 在组件类中自定义的方法中this为null
	* 强制绑定this: 通过函数对象的bind()
	* 箭头函数(ES6模块化编码时才能使用)
# 组件的组合
* 功能: 组件化实现此功能
	1. 显示所有todo列表
	2. 输入文本, 点击按钮显示到列表的首位, 并清除输入的文本
![](https://i.imgur.com/WxHmlVc.gif)
## 功能界面的组件化编码流程(无比重要)
![](https://i.imgur.com/SW7ribC.png)
