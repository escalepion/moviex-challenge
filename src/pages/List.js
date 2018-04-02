import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../components/common/Card';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            errorMessage: undefined
        };
    }
    componentWillMount() {
        this.setState({ errorMessage: 'Loading...' });
        setTimeout(() => {
            this.renderList();
        }, 2000);
    }
    renderList(){
        if(this.props.params.type === 'movie') {
            this.setState({ list: this.props.movieList.slice(0,21), errorMessage: undefined });
        }else if(this.props.params.type === 'series') {
            this.setState({ list: this.props.serieList.slice(0,21), errorMessage: undefined });
        }else {
            this.setState({ errorMessage: 'Oops, something went wrong...' });
        }
    }
    mapList() {
        const key = 'Poster Art';
        return this.state.list.map((item, index)=> {
            return <div key={index} className="col-md-2"><Card imgUrl={item.images[key].url} title={item.title} /></div>
        });
    } 
    render () {
        if(this.state.errorMessage) {
            return(
                <div className="row">
                    <div className="col">{this.state.errorMessage}</div>
                </div>
            );
        }
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
