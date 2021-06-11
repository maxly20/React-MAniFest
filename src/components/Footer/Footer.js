import styled from 'styled-components';
import Title from '../GlobalComponents/Title';
import Container from '../GlobalComponents/Container';
import FooterContainer from './FooterContainer';
import Copyright from './Copyright';

const Footer = () => (
  <FooterStyles>
    <Title />
    <Container>
      <FooterContainer />
      <Copyright />
    </Container>
  </FooterStyles>
);

const FooterStyles = styled.footer`
  width: 100%;
  padding: 100px 0 0 0;
  background: #111343;
`;

export default Footer;
