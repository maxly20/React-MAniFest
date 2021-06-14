import styled from 'styled-components';

const AboutDate = () => {
  return (
    <DivStyles className='aboutDate'>
      <div className='dateInfo'>
        <span>CONVENTION DATE</span>
        <h3>COUNT EVERY SECOND UNTIL THE EVENT</h3>
      </div>
      <div className='cardContainer'>
        <div key='1' className='dateCard'>
          <h2>52</h2>
          <p>Minutes</p>
        </div>
        <div key='2' className='dateCard'>
          <h2>22</h2>
          <p>Hours</p>
        </div>
        <div key='3' className='dateCard'>
          <h2>5</h2>
          <p>Days</p>
        </div>
        <div key='4' className='dateCard'>
          <h2>9</h2>
          <p>Months</p>
        </div>
      </div>
    </DivStyles>
  );
};

const DivStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 0 0 0;
  .dateInfo {
    width: 100%;
    max-width: 220px;
    span {
      color: #df42b1;
    }
    h3 {
      color: #fff;
      line-height: 1.3;
      font-weight: 500;
      margin: 8px 0 0 0;
    }
  }
  .cardContainer {
    width: 100%;
    max-width: 820px;
    display: flex;
    justify-content: space-between;
    .dateCard {
      border: 2px solid #ffffff;
      width: 100%;
      text-align: center;
      padding: 20px;
      max-width: 140px;
      h2 {
        color: #fff;
        font-size: 60px;
        line-height: 1;
      }
      p {
        color: #5d5e8d;
        font-weight: 500;
        font-size: 17px;
        margin: 6px 0 0 0;
      }
    }
  }
  @media (max-width: 875px) {
    .cardContainer {
      flex-wrap: wrap;
      .dateCard {
        max-width: 32%;
        margin: 4px 0;
        &:nth-child(4),
        &:nth-child(5) {
          max-width: 48%;
        }
      }
    }
  }
  @media (max-width: 1130px) {
    flex-direction: column;
    .dateInfo,
    .cardContainer {
      max-width: 100%;
    }
    .cardContainer {
      padding: 12px 0 0 0;
    }
  }
`;

export default AboutDate;
