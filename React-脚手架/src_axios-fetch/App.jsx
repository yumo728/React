import React,{Component} from 'react'
import axios from 'axios'
export default class App extends Component{
    state = {
        stateName:'',
        stateUrl:''
    }

    componentDidMount(){
        //执行异步操作
        const url = 'https://api.github.com/search/repositories?q=r&sort=stars'

        /*axios.get(url)
            .then((response)=> {
                const result = response.data
                const most = result.items[0]
                const stateName = most.name
                const stateUrl = most.html_url
                //更新数据
                this.setState({
                    stateName,
                    stateUrl
                })

            })
            .catch((error)=> {
                console.log('请求失败：'+error)
            });*/

        fetch(url).then(function(response) {
            return response.json()
        }).then((data)=> {
            const most = data.items[0]
            const stateName = most.name
            const stateUrl = most.html_url
            //更新数据
            this.setState({
                stateName,
                stateUrl
            })
        }).catch((e)=> {
            console.log(e)
        });
    }

    render(){
        const {stateName,stateUrl} = this.state
            if(!stateName){
                return <h2>Lodaing...</h2>
            }else{
                return(
                    <h2>most is <a href={stateUrl}>{stateName}</a></h2>
                )
            }
        }
    }