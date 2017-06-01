import *as React from 'react';
import {Link} from './../../node_modules/react-router-dom'

export default class Top extends React.Component<{},any>{
    public constructor(){
        super()
        this.state={navList:[{name:'全部',state:'all'},{name:'全部1',state:'all'},{name:'全部2',state:'all'},{name:'全部3',state:'all'}]}
    };
    public render(){
        const navbar=this.state.navList.map((item:any,i:number)=>{
            return <li key={i}  ><Link to={"/"+i} replace >{item.name}</Link></li>
        })
        return(
            <div className="top">
                {navbar}
            </div>
        )   
    }
}
