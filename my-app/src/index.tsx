import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Top from './common/header'
import Foot from './common/Foot'
import {HashRouter,Route} from 'react-router-dom'
import * as ReactCSSTransitionGroup from './../node_modules/react-addons-css-transition-group'
import Main from './common/main'
import './css/base.css'
class Root extends React.Component<{},any>{
     public constructor(){
        super()
        this.state={isBottom:false}
      };
      componentDidMount () {
        const that =this;
        document.addEventListener("scroll",function(){
           if(window.scrollY>=document.documentElement.scrollHeight-window.outerHeight-30){
              that.setState(prevState=>({isBottom:true}))
           }
        })
      }
     public render(){
          return( 
          <HashRouter>
            <div> 
            <Top/>
            <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnter={false}
                  transitionLeave={false}>
                 <Route path="/" component={Main}/>
                 <Route path="/news"  component={Top}/>
                 <Route path="/myInfo" component={Foot}/>
              </ReactCSSTransitionGroup>
              <Foot/>
            </div>
          </HashRouter>
        )     
      }
}
ReactDOM.render(<Root/>,
  document.getElementById('root') as HTMLElement
);