import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostsByUserId } from '../../services/api';

const Posts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState(null);
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
        {posts && !posts.length && <h2>User has not any posts... 😥</h2>}
        {posts?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
