import *as React from 'react';
import './../css/main.css'
import {getFetch,getAllName} from './../plugin/until'
export default class Main extends React.Component<{},any>{
    public constructor(){
        super();
        this.state={list:[]};
    };
    public componentWillMount () {
        const that=this;
        getFetch("https://cnodejs.org/api/v1/topics",{page:1,tab:'',limit:20})
        .then((res:any)=>res.json()).then((data:any)=>{
                that.setState(prevState=>({
                    list:data.data
                }))
        })
        .catch((err:string)=>console.log(err))
    }
    public render(){
        const listArr=this.state.list.map((item:any,i:number)=>{
                return (
                <div key={i} className="ceil">
                    <a><img className="userLogo" src={item.author.avatar_url}/></a>
                    <span className="title">{item.title}</span>
                    <span className="tab">{getAllName(item.tab)}</span>
                </div>)
        })
        return(
        <div className="contaienr">
            {listArr}
        </div>
        )
    }
}