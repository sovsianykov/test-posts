import {combineReducers} from "redux";
import { postsReducer } from "./postsReducer";

export  const rootReducer = combineReducers({
    posts : postsReducer,
    fetchedPosts : postsReducer,
    users : postsReducer,
    fetchedUsers : postsReducer,
    fetchedComments : postsReducer,
    comments : postsReducer
})
