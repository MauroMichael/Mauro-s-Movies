import Swal from 'sweetalert2';
import 'animate.css'
export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const CLEAR_MOVIE_DETAIL = 'CLEAR_MOVIE_DETAIL';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_SERIES = 'GET_SERIES';
export const CLEAR_ELEMENTS = 'CLEAR_ELEMENTS';


export function addMovieFavorite(id, title) {
    return function (dispatch) {
        const requestOptions = {
            method: 'POST',
        };

        let postFav = '';
        fetch(`http://localhost:3001/${id}/${title}`, requestOptions)
        .then(res => res.json())
        .then(data => {
            postFav = data;
            if(postFav === 'already') {
            Swal.fire({
                position: 'center',
                icon: 'info',
                iconColor: '#ffa420',
                color: '#ffa420',
                background: 'black',
                title: `"${title}" is already in Favorites`,
                showConfirmButton: false,
                timer: 2500,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
              })
            } else {
                Swal.fire({
                  position: 'top',
                  icon: 'success',
                  iconColor: 'yellow',
                  color: 'yellow',
                  background: 'black',
                  title: `Now "${title}" is on Favorites`,
                  showConfirmButton: false,
                  timer: 2500,
                  showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
                })
            }
            return dispatch({
                type: ADD_MOVIE_FAVORITE,
                })
            })
        .catch(e => {
            console.log('Error', e)
        })
    }
}

export function getMovies(title) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/getmovies?title=${title}`)
        .then(r => r.json())
        .then(json => {
            if(json.Response === 'False'){
                Swal.fire({
                    position: 'top',
                    icon: 'info',
                    iconColor: '#ffa420',
                    color: '#ffa420',
                    background: 'black',
                    title: '"' + title + '"' + ' was not found',//json.Error,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                  })
                }

            console.log(json);
            dispatch({type: GET_MOVIES,
                       payload: json})
        })
        .catch( e => {
            console.log('Error', e )
        })
    }
}

export function getSeries(title) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/getseries?title=${title}`)
        .then(r => r.json())
        .then(json => { 
            if(json.Response === 'False'){
                Swal.fire({
                    position: 'top',
                    icon: 'info',
                    iconColor: '#ffa420',
                    color: '#ffa420',
                    background: 'black',
                    title: '"' + title + '"' + ' was not found',//json.Error,
                    showConfirmButton: false,
                    timer: 2500,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            }
            dispatch({type: GET_SERIES,
                       payload: json})
        })
        .catch( e => {
            console.log('Error', e )
        })
    }
}

export function getMovieDetail(id) {
    return function(dispatch) {
        return fetch(`http://localhost:3001/detail/${id}`)
        .then(r => r.json())
        .then(json => {
            dispatch({type: GET_MOVIE_DETAIL,
                       payload: json})
        })
        .catch( e => {
            console.log('Error', e )
        })
    }
}

export function clearMovieDetail() {
    return {
        type: CLEAR_MOVIE_DETAIL
    }
}

export function clearElements() {
    return {
        type: CLEAR_ELEMENTS
    }
}

export function removeMovieFavorite(id) {
    return function(dispatch) {
        const removeOptions = {
            method: 'DELETE',
        };
        
        let remFav = '';
        fetch('http://localhost:3001/' + id, removeOptions)
        .then(r => r.json())
        .then(info => {
            remFav = info;
            Swal.fire({
                position: 'top',
                icon: 'success',
                iconColor: 'yellow',
                color: 'yellow',
                background: 'black',
                title: remFav,
                showConfirmButton: false,
                timer: 2500,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                  }
              });
            return dispatch({
                type: REMOVE_MOVIE_FAVORITE,
            })
        })
        .catch( e => {
            console.log('Error', e )
        })
    }
}

export function getFavorites() {
    return function(dispatch) {
        return fetch('http://localhost:3001/')
        .then(r => r.json())
        .then(data => {               
            dispatch({type: GET_FAVORITES,
                       payload: data })
            })
    }
}

