import {UPDATE_POST, FETCH_POSTS, FETCH_USERS, FETCH_COMMENTS} from "./types";

export function createPost(post) {
    return (
        {
            type: UPDATE_POST,
            payload: post

        })
}
export function fetchPosts( ) {
    return async dispatch => {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
        dispatch({type: FETCH_POSTS, payload: response})
        const response1 = await fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
        dispatch({type: FETCH_COMMENTS, payload: response1})
        console.log(response1)
        const response2 = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
        dispatch({type: FETCH_USERS, payload: response2})
        console.log(response2)

    }
}

