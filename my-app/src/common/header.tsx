import * as React from 'react';
import './../css/head.css'
export default class Top extends React.Component<{},any>{
    public constructor(){
        super()
        this.state={navList:[
            {name:'全部',state:''},
            {name:'分享',state:'share'},
            {name:'问答',state:'ask'},
            {name:'招聘',state:'job'}
            ],isActive:0}
    };
    public handleActive=(index:Number)=>{
         this.setState(prevState => ({    // 这个参数
            isActive: index
        }));
    }
    public render(){
        const navbar=this.state.navList.map((item:any,i:number)=>{
            return <li key={i} className={i == this.state.isActive?'active':''} onClick={this.handleActive.bind(this,i)}><a  href="javascript:void(0)">{item.name}</a></li>
        })
        return(
            <div className="headContainer">
                <div className="top">
                    {navbar}
                </div>
            </div>
        )   
    }
}
