import {
    FETCH_MOVIES
} from './types';
import sampleData from '../data/sampleData';

export const fetchMovies = () => {
    return { type: FETCH_MOVIES, payload: sampleData };
}
