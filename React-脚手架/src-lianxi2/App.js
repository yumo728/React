import React, {Component} from 'react';
import './App.css';
import CommentAdd from './components/comment-add/comment-add'
import CommentList from './components/comment-list/comment-list'



export default class App extends Component {

    state = {
        comments:[
            {name:'lili',content:'react好难啊'},
            {name:'momo',content:'react不难啊'},
            {name:'qiqi',content:'react还行啊'}
        ]
    }
  render() {
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
                    <CommentAdd/>
                    <CommentList comments = {comments}/>
                </div>
            </div>
        </div>
    )
  }
}

// export default App.jsx;
