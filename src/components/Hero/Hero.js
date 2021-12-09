import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! I'm Xiet <br/>
        And This Is My Personal Portfolio!
      </SectionTitle>
      <SectionText>
      Hello! I am a web developer ready to help you in everything you need for your site, whatever it is about: a start up, a small business or your personal blog!
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;