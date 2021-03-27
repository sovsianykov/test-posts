   import React from "react";
   import {Typography,Paper} from "@material-ui/core";

export default ({ post }) => {
    return (
        <div >
            <Paper>
                <Typography variant='subtitle1' align='center'>
                    title
                </Typography>
                <Typography variant='h5' align='center'>
                     {post.title}
                </Typography>
                <Typography variant='h5' align='center'>
                    {post.author}
                </Typography>
            </Paper>
        </div>
    )
}
