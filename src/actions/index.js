import streams from '../apis/streams';
import { FETCH_STREAMS, FETCH_STREAM } from './types';


export const fetchStreams = () => async dispacth => {
    const response = await streams.get('/streams');
    dispacth({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchStream = (id) => async dispacth => {
    const response = await streams.get('/streams/${id}');
    dispacth({ type: FETCH_STREAM, payload: response.data });
}
