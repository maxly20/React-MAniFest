import styled from 'styled-components';
import Overlay from '../GlobalComponents/Overlay';
import FooterOneBg from '../../img/footerOne.jpg';
import FooterTwoBg from '../../img/footerTwo.jpg';
import FooterThreeBg from '../../img/footerThree.jpg';
import FooterFourBg from '../../img/footerFour.jpg';
import FooterFiveBg from '../../img/footerFive.jpg';
import FooterSixBg from '../../img/footerSix.jpg';

const FooterContainer = () => {
  const images = [
    FooterOneBg,
    FooterTwoBg,
    FooterThreeBg,
    FooterFourBg,
    FooterFiveBg,
    FooterSixBg,
  ];

  return (
    <DivStyles className='footerContainer'>
      <div className='footerCard first'>
        <h2 className='footer_logo'>
          MAniFest <span>.</span>
        </h2>

        <p>
          To take a trivial example, which of us ever undertakes laborious
          physical exercise, except to obtain.
        </p>
        <div className='socialWrap'>
          <div className='socialIcon'>
            <i className='fab fa-facebook-f fa-sm'></i>
          </div>
          <div className='socialIcon'>
            <i className='fab fa-instagram fa-sm'></i>
          </div>
          <div className='socialIcon'>
            <i className='fab fa-twitter fa-sm'></i>
          </div>
          <div className='socialIcon'>
            <i className='fab fa-linkedin-in fa-sm'></i>
          </div>
        </div>
      </div>
      <div className='footerCard second'>
        <h2>Contact</h2>
        <p>
          <i className='far fa-map fa-sm'></i> 999 Hope Street
        </p>
        <p>
          <i className='fas fa-phone fa-sm'></i> +61 04 999 999
        </p>
        <p>
          <i className='fas fa-envelope fa-sm'></i> info@manifest.com
        </p>
        <p>
          <i className='fas fa-globe-europe fa-sm'></i> www.manifest.com
        </p>
      </div>
      <div className='footerCard third'>
        <h2>Workshops</h2>
        <a href='#/'>Props Maker</a>
        {/* <a href='#/'>Cosplay Photography</a> */}
        {/* <a href='#/'>Costume Maker</a> */}
        {/* <a href='#/'>The Art of Cosplay</a> */}
      </div>
      <div className='footerCard forth'>
        <h2>Gallery</h2>
        <div className='imgContainer'>
          {images.map((img, index) => (
            <div key={index} className='imgWrapper'>
              <Overlay overlay='linear-gradient(120deg, #505add 0%, #df42b1 100%)' />
              <img src={img} alt='user' />
            </div>
          ))}
        </div>
      </div>
    </DivStyles>
  );
};

const DivStyles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 50px;
  .footerCard {
    width: 100%;
    max-width: 220px;
    color: #9293bc;
    h2 {
      color: #fff;
      margin-bottom: 14px;
    }
    &.first {
      img {
        padding: 8px 0 0 0;
      }
      p {
        margin: 14px 0;
        font-size: 14px;
        line-height: 1.7;
      }
      .socialWrap {
        display: flex;
        .socialIcon {
          display: flex;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid #9293bc;
          cursor: pointer;
          margin-right: 10px;
          transition: all 500ms ease-in-out;
          &:hover {
            background: #5d5e8d;
            border: 1px solid #5d5e8d;
          }
          i {
            color: #fff;
            margin: auto;
          }
        }
      }
    }
    &.second {
      p {
        font-weight: 400;
        font-size: 15px;
        &:not(:last-of-type) {
          margin-bottom: 14px;
        }
      }
    }
    &.third {
      max-width: 250px;
      a {
        text-decoration: none;
        display: inline-block;
        color: #9293bc;
        transition: color 500ms ease-in-out;
        &:hover {
          color: #fff;
        }
        &:not(:last-of-type) {
          margin-bottom: 14px;
        }
      }
    }
    &.forth {
      .imgContainer {
        width: 100%;
        min-height: 154px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .imgWrapper {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 5px;
          cursor: pointer;
          .overlay {
            opacity: 0;
            transition: all 500ms ease-in-out;
          }
          &:hover {
            .overlay {
              opacity: 0.8;
            }
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
        }
      }
    }
  }
  .footer_logo {
    font-size: 2rem;
    font-family: 'Righteous', cursive;
    span {
      color: #ca47b7;
      font-size: 2.5rem;
    }
  }
  @media (max-width: 640px) {
    flex-direction: column;
    .footerCard {
      &.first,
      &.second,
      &.third,
      &.forth {
        max-width: 100%;
        margin: 14px 0;
      }
      &.third {
        a {
          display: block;
        }
      }
      &.forth {
        .imgContainer {
          .imgWrapper {
            width: 32%;
            height: 110px;
            margin: 5px 0;
          }
        }
      }
    }
  }

  @media (min-width: 641px) and (max-width: 1140px) {
    flex-wrap: wrap;
    .footerCard {
      &.first,
      &.second,
      &.third,
      &.forth {
        max-width: 47%;
        margin: 14px 0;
      }
      &.forth {
        .imgContainer {
          .imgWrapper {
            width: 32%;
            height: 110px;
            margin: 5px 0;
          }
        }
      }
    }
  }
`;

export default FooterContainer;
