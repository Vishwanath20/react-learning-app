import CrudFeatureLayoutMenu from "./CrudFeatureLayoutMenu";
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPost(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [postedBy, setPostedBy] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("inside AddPost handlesubmit");
    e.preventDefault();
    const postedBy = localStorage.getItem('userEmail');
    const newPost = { title, description, postedBy, image };
    console.log('newPost:',newPost);
    await axios.post('http://localhost:3001/posts', newPost);
    //navigate('/');
  };
   

    return(
        <>
         <>
        <CrudFeatureLayoutMenu></CrudFeatureLayoutMenu>

        <div className="container">
          <h1>Add Post</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Post Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label>Posted By</label>
              <input
                type="text"
                className="form-control"
                value={postedBy}
                onChange={(e) => setPostedBy(e.target.value)}
              />
            </div> */}
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Post</button>
          </form>
        </div>
      </>
        </>
    );
}

export default AddPost;