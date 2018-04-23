import React,{Component} from 'react'
export default class App extends Component{
    state = {
        result:0
    }

    addValue=()=>{
        //获取
        let {result} = this.state
        const selectorVal = +this.refs.selector.value
        result += selectorVal
        //更新对象
        this.setState({
            result
        })
    }

    reduceValue=()=>{
        //获取
        let {result} = this.state
        const selectorVal = +this.refs.selector.value
        //检查合法性
        if(result<=0){
            return
        }
        result -= selectorVal
        //更新对象
        this.setState({
            result
        })
    }

    oddValue=()=>{
        //获取
        let {result} = this.state
        const selectorVal = +this.refs.selector.value
        //检查合法性
        if(result%2 == 0){
            return
        }
        result += selectorVal
        //更新对象
        this.setState({
            result
        })
    }

    asyncValue=()=>{
        //获取
        let {result} = this.state
        const selectorVal = +this.refs.selector.value
        clearTimeout(timer)

        const timer = setTimeout(()=>{
            result += selectorVal
            //更新对象
            this.setState({
                result
            })
        },1000)
    }

    render(){
        return (
            <div>
                <h2>click {this.state.result} times</h2>
                <select ref='selector'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.addValue}>+</button>&nbsp;
                <button onClick={this.reduceValue}>-</button>&nbsp;
                <button onClick={this.oddValue}>increment if odd</button>&nbsp;
                <button onClick={this.asyncValue}>increment async</button>&nbsp;
            </div>
        )
    }
}