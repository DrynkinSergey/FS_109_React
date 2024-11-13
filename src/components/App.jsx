import { createContext } from 'react';
import ContextExample from './ContextExample/ContextExample';
import { Counter } from './Counter/Counter';
import ForwardRef from './ForwardRef/ForwardRef';
import Header from './Header/Header';

export const myContext = createContext();

const App = () => {
  return (
    <div>
      <Header />
      {/* <Counter /> */}
      <myContext.Provider value={{ model: 'RS 6', owner: 'Oleh' }}>
        <ContextExample auto='Audi' />
      </myContext.Provider>
      {/* <ForwardRef /> */}
    </div>
  );
};
export default App;
