import { combineReducers } from 'redux';
import streamReducer from './streamReducer';
import PopularReducer from './PopularReducer';

export default combineReducers (
    {
        streams: streamReducer,
        popular_series: PopularReducer
    }
);