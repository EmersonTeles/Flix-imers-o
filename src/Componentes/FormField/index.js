/* eslint-disable react/jsx-filename-extension */
/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

const FormFieldWapprer = styled.div`
  position:relative;

  textarea{
    min-height: 150px;
  }

  input[type="color"]{
    padding:0 5px 5px 56px;
  }
`;
const Label = styled.label`

`;
Label.Text = styled.span`
  color: black;
  height: 55px;
  position: absolute;
  top: 0;
  padding-left: 14px;
  z-index: 1001;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;

  transition: .4s ease-in-out;
`;

const Input = styled.input`
  background: #f5f5f5;
  color: Black;
  display: block;
  resize: none;
  width: 100%;
  height: 60px;

  font-size: 18px;
  padding: 15px 15px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 6px solid #53585d;
  border-radius: 5px;
  margin-bottom: 10px;
  &:focus{
    border-bottom-color: #ff0101;
  }
  &:focus:not([type='color']) + ${Label.Text}{
    transform: scale(0.6) translateY(-10px);
    color: #7b7b7b;
  }
  &:hover + ${Label.Text}{
    color: #7c7c7c;
  }
  ${({ value }) => {
    const hasValue = value.length > 0;
    return hasValue && css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(.6) translateY(-10px);
          color: #7b7b7b;
        }
      `;
  }
}
`;
function FormField({
  label, name, type, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWapprer>
      <Label
        htmlFor={fieldId}
      >
        <Input
          id={fieldId}
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </FormFieldWapprer>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
