import Form from './Forms/Form';
import UseIDExample from './UseIDExample/UseIDExample';

const App = () => {
  const register = data => {
    console.log('Data received!');
    setTimeout(() => {
      console.log('Data processed!');
    }, 1000);
    setTimeout(() => {
      console.log('Congratulation you registration is done! 🔥');
      console.log(data);
    }, 2000);
  };
  return (
    <div>
      <h1>FORMS</h1>
      <Form register={register} />
      <UseIDExample />
    </div>
  );
};
export default App;
