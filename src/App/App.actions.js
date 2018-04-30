import axios from 'axios';

export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const SEARCH_TERM_ENTERED = 'SEARCH_TERM_ENTERED';
export const GENDER_SELECTED = 'GENDER_SELECTED';
export const NAT_SELECTED = 'NAT_SELECTED';
export const FILTER_DATA_SELECTED = 'FILTER_DATA_SELECTED';
export const CLEAR_FILTERS_SELECTED = 'CLEAR_FILTERS_SELECTED';


export function getData() {
    return dispatch => {

        axios.get('https://randomuser.me/api?results=500')
        .then( res => {
            dispatch({ type: DATA_AVAILABLE, data: res.data.results });            
        })
        .catch( err => {
            console.log('Error fetching data', err);
        })
    };
}

export function searchTermEntered(term) {
    return dispatch => {
        dispatch({ type: SEARCH_TERM_ENTERED, data: term });                    
    }
}

export function genderSelected(gender) {
    return dispatch => {
        dispatch({ type: GENDER_SELECTED, data: gender });                    
    }
}

export function natSelected(nat) {
    return dispatch => {
        dispatch({ type: NAT_SELECTED, data: nat });                    
    }
}

export function filterData() {
    return dispatch => {
        dispatch({ type: FILTER_DATA_SELECTED });                    
    }
}

export function clearFilters() {
    return dispatch => {
        dispatch({ type: CLEAR_FILTERS_SELECTED });                    
    }
}