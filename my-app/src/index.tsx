import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Top from './common/header'
import {HashRouter,Route} from 'react-router-dom'
import * as ReactCSSTransitionGroup from './../node_modules/react-addons-css-transition-group'
import Main from './common/main'
import './css/base.css'
class Root extends React.Component<{},object>{
     public constructor(){
        super()
      };
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
                 <Route path="/1" component={Main}/>
                 <Route path="/3" component={Main}/>
              </ReactCSSTransitionGroup>
            </div>
          </HashRouter>
        )     
      }
}
ReactDOM.render(<Root/>,
  document.getElementById('root') as HTMLElement
);