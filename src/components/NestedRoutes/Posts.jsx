import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const Posts = () => {
  const { userId } = useParams();
  // https://localhost/users/:userId/posts
  // userID = 7
  // https://localhost/users/7/posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPostsByUserId(userId);
      setPosts(data);
    };
    getData();
  }, [userId]);
  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
