import styled from 'styled-components';
import { useState } from 'react';
import Title from '../GlobalComponents/Title';
import ScheduleNavItem from './ScheduleNavItem';
import Container from '../GlobalComponents/Container';
import ScheduleCard from './ScheduleCard';
import ScheduleOneBg from '../../img/scheduleOne.jpg';
import ScheduleTwoBg from '../../img/scheduleTwo.jpg';
import ScheduleThreeBg from '../../img/scheduleThree.jpg';
import ScheduleFourBg from '../../img/scheduleFour.jpg';

const Schedule = () => {
  const [day, setDay] = useState('Friday');

  return (
    <SectionStyles className='schedule' id='pages'>
      <Title subtitle='OUR TIMETABLE' title='SCHEDULE PLAN' />
      <div className='scheduleNav'>
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName='Friday'
          itemDate='January 14, 2022'
        />
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName='Saturday'
          itemDate='January 15, 2022'
        />
        <ScheduleNavItem
          day={day}
          setDay={setDay}
          itemName='Sunday'
          itemDate='January 16, 2022'
        />
      </div>
      <Container>
        {day === 'Friday' && (
          <>
            <ScheduleCard
              scheduleImg={ScheduleOneBg}
              scheduleTitle='How to make your first prop'
              scheduleDesc='by Kamui'
            />
            <ScheduleCard
              scheduleImg={ScheduleTwoBg}
              scheduleTitle='Cosplay makeup secret'
              scheduleDesc='by Reika'
            />
            <ScheduleCard
              scheduleImg={ScheduleThreeBg}
              scheduleTitle='Cosplay Photography in low light'
              scheduleDesc='by Isaac Leung'
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle='How to survive your first convention'
              scheduleDesc='by Ayu'
            />
          </>
        )}
        {day === 'Saturday' && (
          <>
            <ScheduleCard
              scheduleImg={ScheduleTwoBg}
              scheduleTitle='How to pose for a cosplay shoot'
              scheduleDesc='by Pingping'
            />
            <ScheduleCard
              scheduleImg={ScheduleThreeBg}
              scheduleTitle='How to scout your shoot venue'
              scheduleDesc='by Dan'
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle='Love your cosplay prop'
              scheduleDesc='by Kamui'
            />
          </>
        )}
        {day === 'Sunday' && (
          <>
            <ScheduleCard
              scheduleImg={ScheduleOneBg}
              scheduleTitle='Dealing with Difficult People at Convention'
              scheduleDesc='by Ayu'
            />
            <ScheduleCard
              scheduleImg={ScheduleFourBg}
              scheduleTitle='How to earn money from cosplay'
              scheduleDesc='by Kamui'
            />
          </>
        )}
      </Container>
    </SectionStyles>
  );
};

const SectionStyles = styled.section`
  width: 100%;
  background: #151853;
  padding: 100px 0;
  .scheduleNav {
    display: flex;
    justify-content: center;
  }
  .container {
    min-height: 634px;
  }
  @media (max-width: 970px) {
    .scheduleNav {
      padding: 14px 0 0 0;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  @media (max-width: 1168px) {
    .scheduleNav {
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

export default Schedule;
