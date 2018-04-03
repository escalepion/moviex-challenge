import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div className="row title">
                <div className="col-md-10 mx-auto">{this.props.content}</div>
            </div>
        );
    }
}

export default Title;