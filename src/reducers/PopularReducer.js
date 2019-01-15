import {
    FETCH_POPULAR_SERIES,
    FETCH_POPULAR_SERIAL
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POPULAR_SERIAL: 
        return { ...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_POPULAR_SERIES:
        return { ...state, [action.payload.id]: action.payload };
        default:
        return state;
    }
}