import styled from 'styled-components';

const Container = ({ children, isOpened }) => (
  <DivStyles className={(isOpened ? 'hidden' : '') + ' container'}>
    {children}
  </DivStyles>
);

const DivStyles = styled.div`
  width: 100%;
  max-width: 1110px;
  margin: 0 auto;
  @media (max-width: 1168px) {
    max-width: 90%;
  }
`;

export default Container;
