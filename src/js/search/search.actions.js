import axios from 'axios';
import {
    API_KEY,
    SEARCH_REQUESTED
} from '../constants';

const BASE_URL = 'https://api.themoviedb.org/3/search/tv';

function fetchSearch(result) {
    return {
        type: SEARCH_REQUESTED,
        payload: result
    }
}

export function requestSearch(term) {

    return function(dispatch) {
        axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                language: 'en-US',
                query: term
            }
        })
        .then((response) => {
            dispatch(fetchSearch(response.data.results));
        })
        .catch((err) => {
            dispatch(fetchSearch(err));
        })
    }
}