import streams from '../apis/streams';
import popular_series from '../apis/streams';
import history from './history';
import {FETCH_STREAMS, FETCH_STREAM, FETCH_POPULAR_SERIES} from './types';

export const selectSeason = season => {
    return {type: 'SELECTED_SEASON', payload: season}
}

export const fetchStreams = () => async dispacth => {
    const response = await streams.get('/streams');
    dispacth({type: FETCH_STREAMS, payload: response.data});
    history.push('/');
}

export const fetchStream = (id) => async dispacth => {
    const response = await streams.get(`/streams/${id}`);
    dispacth({type: FETCH_STREAM, payload: response.data});
}

export const PopularSerial = (id) => async dispacth => {
    const response = await popular_series.get(`/popular_series/${id}`);
    dispacth({type: FETCH_POPULAR_SERIES, payload: response.data});

}