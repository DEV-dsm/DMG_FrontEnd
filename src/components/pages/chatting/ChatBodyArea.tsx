import React from 'react';
import { styled } from 'styled-components';

interface propsType {
  display: boolean;
}

export const ChatBodyArea = ({ display }: propsType) => {
  return (
    <Container display={display}>
      <div></div>
    </Container>
  );
};

const Container = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? 'block' : 'none')};
  width: 100%;
  height: 83%;
`;
