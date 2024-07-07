import CrudFeatureLayoutMenu from "./CrudFeatureLayoutMenu";
import React, { useState } from 'react';
import axios from 'axios';

const UpdatePost=({ post, onUpdate, onClose })=>{

    console.log("update post::",post);
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(post.description);
    const [postedBy, setPostedBy] = useState(post.postedBy);
    const [image, setImage] = useState(post.image);

    const update = async () => {
        const updatedPost = { title, description, postedBy, image };
        console.log('updatedPost::',updatedPost);
        await axios.put(`http://localhost:3001/posts/${post.id}`, updatedPost);
        onUpdate(post.id, updatedPost);
        onClose();
      };

      
    return(
        <>
        <div className="modal fade show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Post</h5>
            <button type="button" className="close" onClick={onClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Posted By</label>
              <input type="text" className="form-control" value={postedBy} onChange={(e) => setPostedBy(e.target.value)} />
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={update}>Update</button>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default UpdatePost;