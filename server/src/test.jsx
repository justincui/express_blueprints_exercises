import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
class Report extends Component{
    render(){
        return <div> Error Report </div>;
    }
}
ReactDOMServer.renderToStaticMarkup(<Report/>);