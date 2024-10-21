const List = ({ data, title }) => {
  console.log(data, title);

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map(item => (
          <section key={item.id}>
            <li>
              {item.title} <button>Delete</button>
            </li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default List;
