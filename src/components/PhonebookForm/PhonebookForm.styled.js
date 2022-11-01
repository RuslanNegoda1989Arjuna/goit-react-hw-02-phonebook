import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';

export const Input = styled(Field)`
  font-size: 22px;
  margin-top: 5px;
`;

export const FormUs = styled(Form)`
  margin: 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  border: 2px solid;
  background-color: aliceblue;
`;

export const LabelIn = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 200px;
  padding: 10px;
`;
