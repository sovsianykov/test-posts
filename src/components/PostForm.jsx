import React from "react";
import {connect} from 'react-redux'
import {createPost} from  '../redux/actions'


 class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        title : ''
    };
    this.setState(
        {tile : ''}
    )
  }

  submitHandler = event => {
    event.preventDefault();
    const {title} = this.state
      if (!title.trim()) {
          return
      }
      const  newPost = {
         title,
          id: Date.now().toString()

      }

      this.props.createPost(newPost)
      this.setState(
          {tile : ''})

  }
  changeInputHandler =  event =>{
      event.persist()
     this.setState( prev => ({...prev,...{[event.target.name]: event.target.value
      }}))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            post title
          </label>
          <input type="text" className="form-control" id="title"
                 name='title'
                 onChange={this.changeInputHandler}
                 value={this.state.title}
          />
        </div>
        <button className="btn btn-success" type="submit">
          create
        </button>
      </form>
    );
  }
}


const mapDispatchToProps = {
    createPost
}
export default connect(null,mapDispatchToProps)(PostForm)
