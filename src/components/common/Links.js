import React from 'react';
import { Link } from 'react-router';

export const WhiteLink = (props) => {
    return (
        <Link to="/" className="white_link">{props.children}</Link>
    );
};

export const DarkLink = (props) => {
    return (
        <Link to="/" className="dark_link">{props.children}</Link>
    );
};