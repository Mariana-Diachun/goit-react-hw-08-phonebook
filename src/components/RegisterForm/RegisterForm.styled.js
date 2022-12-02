import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  border: 2px solid #00ca90;
  border-radius: 50px;
  outline: none;
  &:hover,
  &:focus {
    border-color: red;
  }
  padding: 2px;
`;

export const Label = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  margin-top: 10px;
`;

export const Alert = styled(ErrorMessage)`
  color: rgba(33, 33, 33, 0.2);
  font-weight: 500;
  font-size: 18px;
  line-height: 1.88;
  letter-spacing: 0.06em;
`;

export const Button = styled.button`
  margin-top: 30px;
  padding: 5px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  letter-spacing: 0.06em;
  background-color: #53cda6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  &:hover,
  &:focus {
    background-color: red;
  }
  cursor: pointer;
  width: 100px;
`;
