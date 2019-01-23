import {
    FETCH_STREAMS,
    FETCH_STREAM
} from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAMS: 
        return { ...state, ..._.mapKeys(action.payload, 'id'), ...state, ...state, ..._.mapKeys(action.payload, 'id')};
        
        case FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
        default:
        return state;
    }
}