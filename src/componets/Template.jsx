import React from 'react';
import styled from 'styled-components';

export default function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

const TemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 30px;
  margin-bottom: 32px;
  padding: 5%;
  flex-direction: column;

  overflow: auto;
`;
