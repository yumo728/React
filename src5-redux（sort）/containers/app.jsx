import React from 'react'
import Counter from '../components/counter'
import {increment,decrement,incrementAsync} from '../redux/actions'
import {connect} from 'react-redux'

//将状态映射标签属性（一般属性）
const mapStateToprops = (state)=>({count:state})  //函数返回值对象中的所有属性都会成为Counter的一般属性
const mapDispatchToProps= {increment,decrement,incrementAsync}

// const mapDispatchToProps = dispatch =>({ //函数返回值杜希昂中的所有方法都会成为Couter的函数属性
//     increment:number => dispatch(increment(number)),
//     decrement:number => dispatch(decrement(number))
// })

export default connect(
    mapStateToprops, //指定被包装UI组件的一般属性
    mapDispatchToProps //指定被包装UI组件的函数属性
)(Counter)  //返回一个容器组件，内部包装UI组件
//容器组件会自动向UI组件传递指定的标签属性
