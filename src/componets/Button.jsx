import React from 'react';
import styled from 'styled-components';

export default function Button({ children, w, h, onClick, disabled }) {
  return (
    <StButton w={w} h={h} onClick={onClick} disabled={disabled}>
      {children}
    </StButton>
  );
}

const StButton = styled.button`
  background-color: white;
  border: 1px solid gray;
  width: ${(props) => props.w || '50px'};
  height: ${(props) => props.h || '30px'};
  margin: 2.5px;
  cursor: pointer;
`;
