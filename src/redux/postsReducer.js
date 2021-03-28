
import { FETCH_POSTS, FETCH_COMMENTS, FETCH_USERS} from './types'

const initialState = {
    posts : [],
    fetchedPosts : [],
    fetchedUsers : [],
    fetchedComments : [],
    comments : [],
    users : []
}



export const postsReducer = (state = initialState,action ) => {

      switch (action.type) {
          case FETCH_COMMENTS :
              return   { ...state, fetchedComments :action.payload }
          case FETCH_USERS :
              return   { ...state, fetchedUsers :action.payload }
          case FETCH_POSTS :
              return   { ...state, fetchedPosts :action.payload }
          default: return  state;
      }
}
