import styled from 'styled-components';

const NotFound = () => {
  return <Container>Page NotFound</Container>;
};

export default NotFound;

export const Container = styled.div`
  font-size: 1.5rem;
  height: calc(100vh - 250px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
