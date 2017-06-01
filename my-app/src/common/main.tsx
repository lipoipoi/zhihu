import *as React from 'react';

export default class Main extends React.Component<{},any>{
    public constructor(){
        super();
    };
    public componentDidMount() {
        console.log("im body")
    }
    public render(){
        return(
        <div>
            im body
        </div>)
    }
}