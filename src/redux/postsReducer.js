
import {UPDATE_POST, FETCH_POSTS, FETCH_COMMENTS, FETCH_USERS} from './types'

const initialState = {
    posts : [],
    fetchedPosts : [],
    comments : [],
    users : []
}



export const postsReducer = (state = initialState,action ) => {

      switch (action.type) {
          case FETCH_COMMENTS :
              return   { ...state, comments :action.payload }
          case FETCH_USERS :
              return   { ...state, users :action.payload }
          case FETCH_POSTS :
              return   { ...state, fetchedPosts :action.payload }
          default: return  state;
      }
}
