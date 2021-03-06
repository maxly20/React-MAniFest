import styled from 'styled-components';
import Overlay from '../GlobalComponents/Overlay';
import Container from '../GlobalComponents/Container';
import Nav from '../Nav/Nav';
import HeroBg from '../../img/heroBg.jpg';
import HeroInfo from './HeroInfo';

const Hero = () => (
  <SectionStyles className='hero' id='home'>
    <Overlay overlay='#000' opacity='.4' />
    <Nav />
    <Container>
      <HeroInfo />
    </Container>
  </SectionStyles>
);

const SectionStyles = styled.section`
  width: 100%;
  min-height: 100vh;
  background: url('${HeroBg}') no-repeat center/cover;
  display: flex;
  transition: all 600ms ease-in-out;
  .container {
    margin: auto;
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 720px) {
    background-position: 10% 100%;
  }
`;

export default Hero;
