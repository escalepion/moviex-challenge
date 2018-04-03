import React from 'react';

const ContentContainer = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 mx-auto">
                {props.children}
            </div>
        </div>
    );
}

export default ContentContainer;
