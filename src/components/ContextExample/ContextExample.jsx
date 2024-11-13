import ChildOne from './ChildOne';

const ContextExample = ({ auto }) => {
  return (
    <div>
      <h2>Component Parent</h2>
      <ChildOne auto={auto} />
    </div>
  );
};
export default ContextExample;
