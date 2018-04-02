import React from 'react';

import Card from '../components/common/Card';

const Home = () => {
    return (
        <div className="row">
            <div className="col-md-2">
                <Card title="Deneme" linkTo="/list" imgUrl="https://streamcoimg-a.akamaihd.net/000/105/3102/1053102-PosterArt-54c83e37dfc1500b61ac3f37b3e062a4.jpg"/>
            </div>
            <div className="col-md-2">
                <Card title="Deneme" imgUrl="https://streamcoimg-a.akamaihd.net/000/105/3102/1053102-PosterArt-54c83e37dfc1500b61ac3f37b3e062a4.jpg"/>
            </div>
        </div>
    );
}

export default Home;