import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoadingIconWrapper = styled.div`
  margin-right: 7px;
  color: var(--gray);
`;

const Loading = () => {
  return (
    <LoadingIconWrapper>
      <FontAwesomeIcon icon="circle-notch" className="fa-spin fa-lg" />
    </LoadingIconWrapper>
  );
};

export default Loading;
