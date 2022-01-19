# 生命周期

## new vue()
- init Events & Lifecycle
- 初始化 事件 生命周期

## beforeCreate
- init injections & reactivity
- 创建之前 注射与反应性 还没有data数据

## created
- 创建 这事有data

### 从creatd()钩子函数到beforeMount钩子函数之间称之为编译模板阶段，此时模板编译成功，生成了一个编译好的模板字符串，在内存中将这个模板字符串渲染为内存中的DOM，但是还在内存中，没有挂载到页面中。

## beforeMount
- 可以在渲染前最后一次获取到vue中的数据，

## mounted
- 钩子函数发生在此阶段，此时的vue实例已经被渲染到页面上，用户可以看到vue实例的页面，我们可以操作DOM等

## beforeUpdate
- 更改之前

## updated
- 更改后

### 当用户关闭整个页面或者执行了某些$destroy时，就会从运行阶段进入销毁阶段（主要的一大特点是运行了beforeDestroy钩子函数

## beforeDestroy
- 销毁前执行的钩子函数，可以继续使用vue实例中的数据，如data methods filters，derictives等等。

## destroyed
- vue实例中的数据不可用了。
