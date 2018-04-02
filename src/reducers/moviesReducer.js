import {
    FETCH_MOVIES
} from '../actions/types';

const INITIAL_STATE = {
    movieList: undefined,
    serieList: undefined
};


export default (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state, 
                movieList: action.payload.entries.filter(i => i.programType === 'movie'),
                serieList: action.payload.entries.filter(i => i.programType === 'series'),
            };
        default:
            return state;
    }
}