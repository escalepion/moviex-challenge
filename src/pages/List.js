import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/common/Card';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    componentWillMount() {
        this.renderList();
    }
    renderList(){
        if(this.props.params.type === 'movie') {
            this.setState({ list: this.props.movieList.slice(0,21) });
        }else if(this.props.params.type === 'series') {
            this.setState({ list: this.props.serieList.slice(0,21) });
        }
    }
    mapList() {
        const key = 'Poster Art';
        return this.state.list.map((item, index)=> {
            return <div key={index} className="col-md-2"><Card imgUrl={item.images[key].url} title={item.title} /></div>
        });
    } 
    render () {
        return (
            <div className="row">
             {this.mapList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { movieList: state.movies.movieList, serieList: state.movies.serieList };
};

export default connect(mapStateToProps, null)(List);
