import { ADD_MOVIE_FAVORITE, CLEAR_MOVIE_DETAIL, GET_FAVORITES, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE, GET_SERIES, CLEAR_ELEMENTS } from '../actions'
const initialState = {
    moviesFavorites: [],
    moviesLoaded: [],
    movieDetail: {}
};

function sortElements(array, prop) {
    let sorted = [];
        sorted = array.sort((a, b) =>  {
            if (a[prop] < b[prop]) {return -1};
            if (a[prop] > b[prop]) {return 1};
            return 0;
        })
    return sorted;
}
   



function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_MOVIE_FAVORITE:
            return {
                ...state,
            }
        
        case GET_MOVIES:
            if(action.payload.hasOwnProperty('Error')) {
                return
            } else 
            return {
                ...state,
                moviesLoaded: sortElements(action.payload.Search, 'Year').reverse()
            }
        case GET_SERIES:
            if(action.payload.hasOwnProperty('Error')) {
                return
            } else return {
                ...state,
                moviesLoaded: sortElements(action.payload.Search, 'Year').reverse()
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case CLEAR_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: {}
            }
        case CLEAR_ELEMENTS:
            return {
                ...state,
                moviesLoaded: []
            }
        case GET_FAVORITES:
            return {
                ...state,
                moviesFavorites: sortElements(action.payload, 'Title')
            }
        case REMOVE_MOVIE_FAVORITE:
            return {
                ...state,
            }

        default:
            return state
            
    }
}

export default rootReducer;