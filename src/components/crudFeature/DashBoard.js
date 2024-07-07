// Dashboard.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DashBoard = ( ) => {

    const [role, setRole]=useState(null);
    const [posts, setPosts] = useState([]);

    // useEffect(()=>{
    //     setRole(localStorage.getItem("userRole"));
    // },[]);

    useEffect(() => {
      const fetchPosts = async () => {
        const response = await axios.get('http://localhost:3001/posts');
        console.log('inside DashBoard response:',response);
        setPosts(response.data);
      };
      fetchPosts();
    }, []);

  return (
    <>
    <div className="row">
   
     {posts.map(post => (
         <div className="col-md-4" key={post.id}>
          <div className="mb-4">
      <div className="card" style={{width:"18rem"}}>
  <img className="card-img-top" src={post.image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Cras justo odio</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
</div>
</div>



))}
</div>
    </>
    
  );
};

export default DashBoard;
