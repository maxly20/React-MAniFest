import styled from 'styled-components';
import Container from '../GlobalComponents/Container';
import AboutInfo from './AboutInfo';
import AboutDate from './AboutDate';

const About = () => (
  <SectionStyles className='about'>
    <Container>
      <AboutInfo />
      <AboutDate />
    </Container>
  </SectionStyles>
);

const SectionStyles = styled.section`
  width: 100%;
  background: #151853;
  padding: 100px 0;
`;

export default About;
