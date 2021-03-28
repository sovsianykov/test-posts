import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import { Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import SearchAppBar from "./components/Navbar";
const useStyles =makeStyles({
    root : {
        width: "1100px",
        minHeight : '80vh',
        background : "#f5f8f8",
        display : 'flex',
        justifyContent: "center",
        margin: '80px auto'
    },
    gridItem : {
        alignSelf:'center'
    }
})


function App() {
    const classes = useStyles()
  return (
      <main  className={classes.root}>
         <Grid container justify = 'center'>
                 <Grid item xs={8} md={8} xs={12}    >
                     <div >
                         <SearchAppBar/>
                         <FetchedPosts posts={[]}/>
                     </div>
                 </Grid>
         </Grid>



      </main>
  );
}

export default App;
