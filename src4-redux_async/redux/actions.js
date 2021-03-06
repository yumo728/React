/*包含多个action creator(创建action对象的工厂函数)的模块*/
//同步action：返回一个action对象，其中不能执行异步代码
//异步action：返回一个函数（接收dispatch），在此函数中可以执行异步代码，最终分发一个同步action
import {INCREMENT,DECREMENT} from './action-types'

/*export function increment(number) {
    return ({
        type:INCREMENT,number
    })
}*/
//同步增加的action
export const increment = (number) =>({type:INCREMENT,number})
//同步减少的action
export const decrement = (number) =>({type:DECREMENT,number})
//异步增加的action

export const incrementAsync = (number) => {
    return dispatch =>{
        //执行异步操作
        setTimeout(()=>{
            //同步分发增加的action
            dispatch(increment(number))
        },1000)
    }
}


// export const incrementAsync = number =>{
//     return function (dispatch){
//         //执行异步任务
//         setTimeout(()=>{
//             //同步分发增加的action
//             dispatch(increment(number))
//         },1000)
//     }
// }