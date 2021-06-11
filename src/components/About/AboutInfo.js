import styled from 'styled-components';
import Button from '../GlobalComponents/Button';
import AboutBg from '../../img/aboutBg.png';

const AboutInfo = () => (
  <DivStyles className='aboutInfo'>
    <div className='aboutDesc'>
      <span>ABOUT MAniFest</span>
      <h2>WELCOME TO THE BIGGEST ANIME & MANGA EVENT</h2>
      <p>
        MAniFest is the biggest anime and manga convention. It first arrived in
        Australia in 2021. Since then ManiFest has been a go-to event for many
        japanese anime and manga lovers. We pride ourselves on the variety of
        activities that the event offer, as well as the guest list that make
        other events envy of. Don't wait for your turn, ticket will sell out
        quickly. Grab your chance to join the biggest, baddest comicon in
        Australia.
      </p>
      <Button btnTitle='Interested' />
    </div>
    <img src={AboutBg} alt='about' />
  </DivStyles>
);

const DivStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .aboutDesc {
    width: 100%;
    max-width: 520px;
    color: #fff;
    span {
      color: #df42b1;
      border-bottom: 2px solid #4b4d7b;
    }
    h2 {
      font-size: 40px;
      line-height: 1.2;
      margin: 26px 0;
    }
    p {
      font-size: 15px;
      line-height: 1.8;
    }
    .btn {
      margin: 64px 0 0 0;
    }
  }
  @media (max-width: 876px) {
    flex-direction: column;
    img {
      margin: 50px 0 0 0;
      max-width: 94%;
    }
    .aboutDesc {
      h2 {
        font-size: 30px;
      }
      .btn {
        margin: 20px 0 0 0;
      }
    }
  }
  @media (min-width: 877px) and (max-width: 1120px) {
    .aboutDesc,
    img {
      max-width: 48%;
    }
    .aboutDesc {
      h2 {
        font-size: 28px;
      }
    }
  }
`;

export default AboutInfo;
