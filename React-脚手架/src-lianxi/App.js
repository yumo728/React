import React,{Component} from 'react'

import CommentAdd from './comment-add/comment-add'
import CommentList from './comment-list/comment-list'
export default class App extends Component{

    state = {
        comments:[
            {name:'Bobs',content:'react还不错'},
            {name:'timi',content:'react还不错'},
            {name:'kass',content:'react还不错'}
        ]
    }

    addComment=(comment)=>{
        const {comments} = this.state
        comments.unshift(comment)
        //更新数据
        this.setState({
            comments
        })
    }
    
    removeComment=(index)=>{
        const {comments} = this.state
        comments.splice(index,1)
        //更新数据
        this.setState({
            comments
        })
    }


    render(){
        const {comments} = this.state

        return (
            <div id="app">
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
                        <CommentAdd addComment={this.addComment}/>
                        <CommentList comments={comments} removeComment={this.removeComment}/>
                    </div>
                </div>
            </div>
        )
    }
}