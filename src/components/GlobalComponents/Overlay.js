import styled from 'styled-components';

const Overlay = ({ overlay, opacity }) => (
  <DivStyles
    style={{ background: overlay, opacity: opacity }}
    className='overlay'
  ></DivStyles>
);

const DivStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Overlay;
