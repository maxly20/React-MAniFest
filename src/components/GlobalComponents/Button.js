import styled from 'styled-components';

const Button = ({ btnTitle }) => (
  <ButtonStyles className='btn'>
    {btnTitle}
    <i className='fas fa-long-arrow-alt-right'></i>
  </ButtonStyles>
);

const ButtonStyles = styled.button`
  background: linear-gradient(120deg, #df42b1 0%, #505add 100%);
  color: #fff;
  border: none;
  outline: none;
  text-transform: uppercase;
  border-radius: 50px;
  font-weight: 500;
  padding: 14px 32px;
  cursor: pointer;
  transition: all 500ms ease-in-out;
  i {
    margin-left: 8px;
  }
`;

export default Button;
