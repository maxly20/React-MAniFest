import styled from 'styled-components';

const Title = ({ subtitle, title }) => (
  <DivStyles className='title'>
    <p>{subtitle}</p>
    <h2>{title}</h2>
  </DivStyles>
);

const DivStyles = styled.div`
  text-align: center;
  color: #fff;
  position: relative;
  p {
    font-size: 17px;
  }
  h2 {
    font-size: 40px;
    line-height: 1;
    font-weight: 600;
  }
`;

export default Title;
