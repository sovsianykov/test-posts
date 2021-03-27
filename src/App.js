import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import {Button, Grid, Paper} from "@material-ui/core";

function App() {
  return (
      <main >
         <Grid container justify = 'center'>
             <Paper>

                 <Grid item xs={6} md={6} xs={12}    >


                     <div >
                         <FetchedPosts posts={[]}/>
                     </div>

                 </Grid>
             </Paper>


         </Grid>



      </main>
  );
}

export default App;
