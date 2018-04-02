import React from 'react';
import { Link } from 'react-router';

import {WhiteLink, DarkLink} from '../components/common/Links';

const Header = () => {
    return (
        <div className="row header">
            <div className="col-md-10 mx-auto">
                <div className="row">
                    <div className="col-md-6 header__title">
                        <h1>DEMO Streaming</h1>
                    </div>
                    <div className="col-md-6">
                        <WhiteLink>Giriş</WhiteLink>
                        <DarkLink>Start Your Free Trial</DarkLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;