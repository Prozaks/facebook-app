import React, { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [likeCounts, setLikeCounts] = useState({});
  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const newPostObj = {
        id: Date.now(), 
        content: newPost,
      };

      setPosts([...posts, newPostObj]);
      setNewPost(""); 
    }
  };

  // Function to handle like button click
  const handleLike = (postId) => {
    setLikeCounts({
      ...likeCounts,
      [postId]: (likeCounts[postId] || 0) + 1, 
    });
  };

  return (
    <div className="App">
      <h1>Facebook App</h1>
      <div>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="What's on your mind?"
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button onClick={handlePostSubmit}>Post</button>

        {/* list of post */}
        <h2>Posts</h2>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="post">
              <p>{post.content}</p>
              <button onClick={() => handleLike(post.id)}>
                Like {likeCounts[post.id] || 0}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}


export default App;

