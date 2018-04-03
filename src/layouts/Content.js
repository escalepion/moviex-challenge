import React from 'react';

const Content = (props) => {
    return (
        <div className="row content">
            <div className="col-md-10 mx-auto">
                {props.children}
            </div>
        </div>
    );
}

export default Content;
