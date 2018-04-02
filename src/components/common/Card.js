import React from 'react';

const Card = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div>
                    <img style={{ width: '100%' }} src={props.url} className="img-responsive" alt="props.title" />
                </div>
                <div>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
