import React from 'react';
import { Link } from 'react-router';

export const WhiteLink = (props) => {
    return (
        <Link to={props.linkTo} className="white_link">{props.children}</Link>
    );
};

export const DarkLink = (props) => {
    return (
        <Link to={props.linkTo} className="dark_link">{props.children}</Link>
    );
};