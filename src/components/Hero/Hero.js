import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! I'm Xiet <br />
          Welcome Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am a freelance full stack web developer. I mainly use React.js and Node.js for the realization of the sites.
        If you want, we could work together to create the right site for you. Be it a portfolio, a blog or a shop for your small business.
        Take a tour and see my projects!
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;