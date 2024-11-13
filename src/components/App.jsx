import ContextExample from './ContextExample/ContextExample';
import { Counter } from './Counter/Counter';
import ForwardRef from './ForwardRef/ForwardRef';
import Header from './Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* <Counter /> */}
      <ContextExample />
      <ForwardRef />
    </div>
  );
};
export default App;
