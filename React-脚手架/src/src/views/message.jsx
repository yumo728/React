import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Message extends Component {

  state = {
    messages: [
      /*{id: 1, title: 'message001'},
      {id: 2, title: 'message002'},
      {id: 3, title: 'message003'},
      {id: 5, title: 'message005'},*/
    ]
  }

  componentDidMount () {
    // 模拟异步ajax请求获取数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'},
      ]
      // 更新状态
      this.setState({
        messages
      })
    }, 1000)
  }

  render () {
    return (
      <ul>
        {
          this.state.messages.map((m, index) =><li key={index}><Link to='???'>{m.title}</Link></li> )
        }
      </ul>
    )
  }
}