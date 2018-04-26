import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import App from './containers/app'
import {count} from './redux/reducers'

//创建store对象
const store = createStore(count,applyMiddleware(thunk))  //内部会第一次调用reducer函数得到并保存初始状态

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))



