import React from 'react';

import seriesThumb from '../assets/images/series_thumb.jpg';
import moviesThumb from '../assets/images/movies_thumb.jpg';

import Title from '../layouts/Title';
import Content from '../layouts/Content';
import Card from '../components/common/Card';

const Home = () => {
    return (
        <div>
            <Title content="Popular Titles" />
            <Content>
                <div className="row">
                    <div className="col-6 col-md-2">
                        <Card title="Popular Series" linkTo="/list/series" imgUrl={seriesThumb} />
                    </div>
                    <div className="col-6 col-md-2">
                        <Card title="Popular Movies" linkTo="/list/movie" imgUrl={moviesThumb} />
                    </div>
                </div>
            </Content>
        </div>
    );
}

export default Home;