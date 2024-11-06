import OrderForm from './OrderForm/OrderForm';

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
      <h1>Formik</h1>
      <OrderForm />
    </div>
  );
};
export default App;
