import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Profile = () => {
   const location = useLocation();
  const { username } = location.state;


  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  
  useEffect(() => {
    const storedPosts = localStorage.getItem(`${username}-userPosts`);
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, [username]);

  const handlePostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    setNewPost('');
 
    localStorage.setItem(`${username}-userPosts`, JSON.stringify(updatedPosts));
  };

  const handleDeletePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
 
    localStorage.setItem(`${username}-userPosts`, JSON.stringify(updatedPosts));
  };

  const handleCancel = () => {
    localStorage.setItem(`${username}-userPosts`, JSON.stringify(posts));
    setPosts([]);
    setNewPost('');
  };
  

  return (
    <body class="profile-page">
    <center>
    <div>
        <h2 style={{color:'brown',fontFamily:'monospace'}}>Welcome,{username}!!! to your Profile Page</h2>
        <div>
    <div className="profilepic">
        <img src={require('../pages/images/cat.png')} alt='text' height={"150"}/>
        <h2>{username}</h2>
        <p>Welcome to my page:)<br/> 
        i'll make you laugh,smile and occasionally scare the crap out of you.<br/>
        buckle up and enjoy the ride!!
        </p>
        <span><button>Posts</button></span><button>Followers</button><span><button>Following</button></span>
    </div>
    <div className="profile-container">
      
          <h4>Your Posts:</h4>
          {posts.length === 0 ? (
            <p>No posts yet :|</p>
          ) : (
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  {post}
                  <button  style={{marginLeft:'5em'}} onClick={() => handleDeletePost(index)}>Delete</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form onSubmit={handleCreatePost}>
          <label>
            Create a new post:
            <input
              style={{ marginLeft: '2em',padding:'40px' }}
              type="text"
              value={newPost}
              onChange={handlePostChange}
            />
          </label>
          <br />
          <br></br>
          <br></br>
          <button type="submit">Upload</button>
          <button style={{ marginLeft: '6em' }} type="reset" onClick={() => setNewPost('')}>
            Reset
          </button>
          <Link
            className="link"
            style={{
              marginLeft: '90px',
              textDecoration: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              color:'Black'
            }}
            onClick={handleCancel}
            to="/Login"
          >
            Logout
          </Link>
        </form>
      </div>
    </div>
    </center>
    </body>
  );
};

export default Profile;