import React, { Component } from 'react';
    
    
class MyNewComponent extends Component{
    render(){
        return(
            <div>
                <h1>
                    { this.props.header }
                </h1>
                <h2>{ this.props.children }</h2>
            </div>
        );
    }
}
    
export default MyNewComponent;

