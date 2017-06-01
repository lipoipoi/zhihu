import * as React from  'react';
import './../css/foot.css'
import {Link} from './../../node_modules/react-router-dom'

export default class Foot extends React.Component<{},any>{
       public constructor(){
            super();
            this.state={navList:[
            {name:'主页',url:'/'},
            {name:'消息',url:'/news'},
            {name:'我的',url:'/myInfo'}
            ],isActive:0}
        }
       public changeType=(index:number)=>{
         this.setState(prevState => ({    // 这个参数
            isActive: index
        }));
       };
       public render(){
           const types=this.state.navList.map((item:any,i:number)=>{
                return <li key={i}  className={i == this.state.isActive?'typeActive':''}><Link onClick={this.changeType.bind(this,i)} to={item.url}>{item.name}</Link></li>
           })
            return(
                <div className="footContainei">
                    <ul className="foot">
                         {types}
                    </ul>
                </div>
                )
        }
}