import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './comment-item.css'

export default class commentItem extends Component{

    static propTypes = {
        comment:PropTypes.array.isRequired,
        removeComment:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }

    removeItem=()=>{
        //先确认
        const {comment,removeComment,index} = this.props
        if(window.confirm(`确定要删除${comment.name}的评论嘛？`)){
            //删除
            removeComment(index)
        }

    }

    render(){
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.removeItem}>删除</a>
                </div>
                <p className="user"><span>{comment.name}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}