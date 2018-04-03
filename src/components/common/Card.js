import React from 'react';
import { Link } from 'react-router';

const Card = (props) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card__image">
                    <Link to={props.linkTo}><img src={props.imgUrl} className="img-responsive" alt="props.title" /></Link>
                </div>
                <div className="card__title">
                    <p>{props.title}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
