import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleSetQuery }) => {
  const handleSubmit = values => {
    console.log(values);
    handleSetQuery(values.query);
  };
  const initialValues = {
    query: '',
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name='query' placeholder='Enter username' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
