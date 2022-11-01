import { Formik, Form, Field } from 'formik';
import { Button, FormUs, Input, LabelIn } from './PhonebookForm.styled';

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  // const userSubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = e.target;
  // };

  const userSubmit = (values, { resetForm }) => {
    console.log(values);
    // console.log(actions);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={userSubmit}>
      <FormUs>
        <LabelIn htmlFor="">
          Name
          <Input type="text" name="name" />
        </LabelIn>
        <LabelIn htmlFor="">
          Number
          <Input type="text" name="number" />
        </LabelIn>
        <Button type="submit">Submit</Button>
      </FormUs>
    </Formik>
  );
};
