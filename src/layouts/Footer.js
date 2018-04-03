import React from 'react';

import facebookThumb from '../assets/images/social/facebook-white.svg';
import instagramThumb from '../assets/images/social/instagram-white.svg';
import twitterThumb from '../assets/images/social/twitter-white.svg';
import appStoreThumb from '../assets/images/store/app-store.svg';
import playStoreThumb from '../assets/images/store/play-store.svg';
import windowsStoreThumb from '../assets/images/store/windows-store.png';

import {WhiteLink} from '../components/common/Links';

const Footer = () => {
    return (
        <div className="row footer">
            <div className="col-md-10 mx-auto">
                <div className="row">
                    <div className="col">
                        <WhiteLink linkTo="/">Home |</WhiteLink>
                        <WhiteLink linkTo="/">Terms & Conditions |</WhiteLink>
                        <WhiteLink linkTo="/">Privacy Policy |</WhiteLink>
                        <WhiteLink linkTo="/">Help |</WhiteLink>
                        <WhiteLink linkTo="/">Manage Account</WhiteLink>
                    </div>
                </div>
                <div className="row footer__reserved">
                    <div className="col"><p>Copyright &copy;2016 DEMO Streaming. All Rights Reserved. </p></div>
                </div>
                <div className="row footer__social">
                    <div className="col-md-6 footer__social__icons">
                        <img src={facebookThumb} alt="Facebook Link" />
                        <img src={instagramThumb} alt="Facebook Link" />
                        <img src={twitterThumb} alt="Facebook Link" />
                    </div>
                    <div className="col-md-6 footer__store__icons">
                        <img src={appStoreThumb} alt="Facebook Link" />
                        <img src={playStoreThumb} alt="Facebook Link" />
                        <img src={windowsStoreThumb} alt="Facebook Link" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
