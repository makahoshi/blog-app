import React, { Component } from 'react';

import './FullPostV2.css';

class FullPostV2 extends Component {
    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id){
            post = (
                <div className="FullPost">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.author}</p>
                    <p>{this.props.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
            return post;
    }
}

export default FullPostV2;