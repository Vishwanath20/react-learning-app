import { useEffect, useState } from "react";
import CrudFeatureLayoutMenu from "./CrudFeatureLayoutMenu";
import axios from "axios";
import UpdatePost from "./UpdatePost";

function ViewAllPost(){

    const[posts, setPosts]=useState(null);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/posts');
        setPosts(response.data);
       console.log(response);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      console.log(posts);
    };

    fetchPosts();
  }, []);


  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const startEdit = (id) => {
    setEditId(id);
  };

  const cancelEdit = () => {
    setEditId(null);
  };

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post)));
  };

    return(
        <>
        <CrudFeatureLayoutMenu></CrudFeatureLayoutMenu>
        <div className="d-flex p-2">
        <table className="table table-hover table-responsive table-bordered">
  <thead>
    <tr>
    
             <th>Title</th>
            <th>Description</th>
            <th>Posted By</th>
            <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {posts && posts.map(post =>(
       <tr key={post.id}>
        <td>{post.title}</td>
        <td>{post.description}</td>
        <td>{post.postedBy}</td>
        <td>
            <img src={post.image} alt="post-image"></img>
        </td>
       <td>
                <button className="btn btn-warning mr-2" onClick={() => startEdit(post.id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => deletePost(post.id)}>Delete</button>
              </td>
       </tr>
    ))}
  </tbody>
</table>

{editId && (
        <UpdatePost  post={posts.find(post => post.id === editId)} 
        onUpdate={updatePost} 
        onClose={cancelEdit} ></UpdatePost>
      )}

</div>
        </>
    );
}

export default ViewAllPost;