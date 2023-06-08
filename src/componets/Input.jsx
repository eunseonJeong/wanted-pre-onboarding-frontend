import React from 'react';
import styled from 'styled-components';

export const Input = ({
  type,
  value,
  onChange,
  name,
  placeholder,
  ...restProps
}) => {
  return (
    <>
      <StInput
        required
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        {...restProps}
      />
    </>
  );
};

const StInput = styled.input`
  display: block;
  background: white;
  outline: none;
  width: 400px;
  height: 50px;
  margin: 0px;
  padding: 0 10px;
  border: 1px solid;
`;
