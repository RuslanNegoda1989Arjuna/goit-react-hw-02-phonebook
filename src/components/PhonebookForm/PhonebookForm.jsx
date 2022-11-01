// import * as yup from 'yup';

import { Formik } from 'formik';
import { Button, FormUs, Input, LabelIn } from './PhonebookForm.styled';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.number().required(),
// });

const initialValues = {
  name: '',
  number: '',
  contacts: [],
};

export const PhonebookForm = () => {
  // const userSubmit = e => {
  //   e.preventDefault();
  //   const { name, number } = e.target;
  // };

  const userSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log(values.name);
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={userSubmit}>
      <FormUs>
        <LabelIn htmlFor="">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </LabelIn>
        <LabelIn htmlFor="">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </LabelIn>
        <Button type="submit">Submit</Button>
      </FormUs>
    </Formik>
  );
};
