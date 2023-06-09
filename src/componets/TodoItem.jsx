import React from 'react';
import styled, { css } from 'styled-components';

export default function TodoItem({ done, text }) {
  return (
    <TodoItemBlock>
      <Text done={done}>{text}</Text>
    </TodoItemBlock>
  );
}

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Text = styled.div`
  flex: 1;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
