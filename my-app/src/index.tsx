import * as React from 'react';
import * as ReactDOM from 'react-dom';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import {BrowserRouter as Router,Route,Link} from './../node_modules/react-router-dom'
import './index.css';
import App from './App'

class Main extends React.Component<{},object>{
      constructor(){
        super()
      };
      componentDidMount() {
        fetch("https://cnodejs.org/api/v1/user/atian25",{method: 'GET', cache: 'reload',headers: {'Content-Type': 'application/json'}})
        .then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
      };
      render(){
          return( <Router>
            <div>
                <Link to="/">首页</Link>
                <br/>
                <Link to="/two">第二页</Link>
                <br/>
                <Link to="/Lists">一个列表</Link>
                <br/>
                <Route exact path="/"  component={App}/>
                <Route path="/two"/>
                <Route path="/Lists" />
            </div>
        </Router>)     
      }
}
ReactDOM.render(<Main/>,
  document.getElementById('root') as HTMLElement
);