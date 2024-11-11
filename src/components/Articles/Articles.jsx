const Articles = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map(post => (
          <li key={post.objectID}>
            <a href={post.url ?? post.story_url}>{post.title ?? post.story_title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Articles;
