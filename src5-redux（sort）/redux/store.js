/*redux最核心的管理对象模块*/
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //异步中间件模块
import {composeWithDevTools} from 'redux-devtools-extension'
import {count} from './reducers'

//创建store对象,应用上thunk中间件
export default createStore(count,composeWithDevTools(applyMiddleware(thunk)))  //内部会第一次调用reducer函数得到并保存初始状态