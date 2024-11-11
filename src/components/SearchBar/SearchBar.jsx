import { Field, Form, Formik } from 'formik';

const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = values => {
    console.log(values);
    onChangeQuery(values.query);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='query' placeholder='Search...' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
