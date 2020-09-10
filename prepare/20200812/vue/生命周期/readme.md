## 父子组件生命周期的调用顺序
- 调用顺序是先父后子 渲染顺序是先子后父
- 销毁操作是先父后子 销毁完成是先子后父

- 1. 加载渲染过程
    父beforeCreate
    父created
    父beforeMount
    子beforeCreate
    子created
    子beforeMounted
    子mounted
    父mounted

- 2. 子组件更新过程
    父beforeUpdate
    子beforeUpdate
    子updated
    父updated

- 3. 销毁过程
    父beforeDestory
    子beforeDestory
    子destoryed
    父destoryed
    