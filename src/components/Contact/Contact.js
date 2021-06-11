import styled from 'styled-components';
import Title from '../GlobalComponents/Title';
import Container from '../GlobalComponents/Container';
import ContactRow from './ContactRow';
import ContactForm from './ContactForm';

const Contact = () => (
  <SectionStyles className='contact' id='contact'>
    <Title subtitle='HAVE QUESTION?' title='CONTACT US' />
    <Container>
      <div className='contactInfo'>
        <ContactRow contactSubtitle='Address:' contactTitle='999 Hope Street' />
        <ContactRow contactSubtitle='Phone:' contactTitle='+61 4 99 999 999' />
        <ContactRow contactSubtitle='Email:' contactTitle='info@manifest.com' />
        <ContactRow contactSubtitle='Website:' contactTitle='www.manifest.com' />
      </div>
      <ContactForm />
    </Container>
  </SectionStyles>
);

const SectionStyles = styled.section`
  width: 100%;
  padding: 100px 0;
  background: #151853;
  .title {
    p {
      color: #df42b1;
    }
  }
  .container {
    padding: 60px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 670px) {
    .container {
      flex-direction: column;
    }
  }
`;

export default Contact;
