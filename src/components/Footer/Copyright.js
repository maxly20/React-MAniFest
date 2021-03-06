import styled from 'styled-components';

const Copyright = () => (
  <DivStyles className='copyright'>
    <p>Copyright ©2021 MAniFest. All rights reserved</p>
    <div className='links'>
      <a href='#/'>
        <span></span>Terms of Service
      </a>
      <a href='#/'>
        <span></span>Privacy Policy
      </a>
    </div>
  </DivStyles>
);

const DivStyles = styled.div`
  width: 100%;
  padding: 16px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #414269;
  p {
    font-size: 14px;
    color: #9293bc;
    a {
      text-decoration: none;
      color: #fff;
      display: inline-block;
      transition: color 300ms ease-in-out;
      &:hover {
        color: #df42b1;
      }
    }
  }
  .links {
    display: flex;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 300;
      color: #9293bc;
      transition: color 300ms ease-in-out;
      &:hover {
        color: #fff;
      }
      &:last-of-type {
        margin-left: 24px;
      }
      span {
        width: 4px;
        height: 4px;
        margin-right: 5px;
        border-radius: 50%;
        background: #505add;
      }
    }
  }
  @media (max-width: 890px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    p {
      br {
        display: none;
      }
    }
    .links {
      padding: 6px 0 0 0;
    }
  }
`;

export default Copyright;
