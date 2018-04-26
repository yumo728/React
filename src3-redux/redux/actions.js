/*包含多个action creator(创建action对象的工厂函数)的模块*/
import {INCREMENT,DECREMENT} from './action-types'

/*export function increment(number) {
    return ({
        type:INCREMENT,number
    })
}*/
export const increment = (number) =>({type:INCREMENT,number})

export const decrement = (number) =>({type:DECREMENT,number})