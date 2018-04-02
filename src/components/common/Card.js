import React from 'react';
import { Link } from 'react-router';

const Card = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div>
                    <Link to={props.linkTo}><img style={{ width: '100%' }} src={props.imgUrl} className="img-responsive" alt="props.title" /></Link>
                </div>
                <div>
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
