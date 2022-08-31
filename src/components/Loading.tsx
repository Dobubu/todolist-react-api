import { useState } from 'react';
import styled from 'styled-components';
import SquareLoader from 'react-spinners/SquareLoader';

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Loading = () => {
  const [color, setColor] = useState('#FFD370');
  const [size, setSize] = useState(50);

  return (
    <LoadingWrapper>
      <SquareLoader color={color} size={size} />
    </LoadingWrapper>
  );
};

export default Loading;
