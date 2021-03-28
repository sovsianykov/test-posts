   import React, {useEffect} from "react";
   import {Typography, Paper, Button} from "@material-ui/core";
   import ContactMailOutlinedIcon from '@material-ui/icons/ContactMailOutlined';
   import EditIcon from '@material-ui/icons/Edit';
   import {makeStyles} from "@material-ui/core";
   import {useDispatch, useSelector} from "react-redux";
   import { fetchPosts } from "../redux/actions";
   import PostDetails from "./PostDetails";

   const useStyles =makeStyles({
       root : {
           width: "600px",
           // minHeight : '10vh',
           padding : "20px 30px",
           display : 'flex',
           flexDirection : 'column',
           justifyContent: 'flex-start',
           margin: '2vh auto',
           position: "relative",
           zIndex : 0
       },
       title: {
           fontSize: 20,
           marginLeft : 20,
           paddingBottom : '30px'

       },
       text: {

           fontSize: 18,
           color: "#043927",
       },
       span: {

           fontSize: 18,
           color: "#043927",
           position : "absolute",
           top : 10,
           left : 20
       },
         readMoreBtn : {
           // width : 60,
           fontSize: 14,
           position : "absolute",
           bottom : 10,
           left : 10
       },
       detailsHolder : {
           width : 500,
           position : "absolute",
           top: 80,
           left : 10
       },


   })
const PostCard = ({ post,user }) => {
    const classes = useStyles()

    const comments = useSelector(state =>
        state.comments.fetchedPosts
    )



    return (
        <div >
            <Paper className={classes.root}>

                <Typography variant='h6'  className={classes.text} align='right' >
                    <span className={classes.span}>username : {user.username}  </span>
                    <EditIcon/>
                </Typography>
                <Typography variant='subtitle2'  className={classes.text} >
                </Typography>
                <Typography variant='h4' className={classes.title} align='center'>
                       {post.title}
                </Typography>
                <Typography variant='body1' align='center'>
                </Typography>
            </Paper>
        </div>
    )
}
export default PostCard
