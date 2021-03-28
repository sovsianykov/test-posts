import React from "react";
import PostCard from "./PostCard";
import { Button} from "@material-ui/core";
import Posts from "./Posts";
import { useDispatch,useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { fetchUsers } from "../redux/actions";
import { fetchComments } from "../redux/actions";




export default ( ) => {
    const dispatch = useDispatch()
    const update = () =>{
        dispatch(fetchPosts())
        dispatch(fetchUsers())
        dispatch(fetchComments())
    }
   const posts = useSelector(state =>
       state.posts.fetchedPosts
   )
    const users = useSelector(state =>
        state.users.fetchedUsers
    )





    if (!posts.length) {
        return <Button style={{ marginTop : ' 20px'}} onClick={update} variant='contained' color='primary' >Download posts</Button>
    }
    return posts.map((el,i) =><PostCard  post = {el} key = {el.id}  user={users[el.userId -1]}  />)
}

