import React from "react";
import Post from "./Post";
import { Button} from "@material-ui/core";
import Posts from "./Posts";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";

export default ( ) => {
    const dispatch = useDispatch()
   const posts = useSelector(state =>
       state.posts.fetchedPosts
   )
    if (!posts.length) {
        return <Button  onClick={() => dispatch(fetchPosts())} variant='contained' color='primary' >Download posts</Button>
    }
    return posts.map(el =><Post post = {el} key = {el.id}/>)
}

