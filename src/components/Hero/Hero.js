import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there!
      </SectionTitle>
      <SectionText>
        I'm a web developer based in Manila with 9 years of relevant experience.
        <br />I've worked with different startups as: frontend developer, backend developer, android developer and a little bit of UX research.
      </SectionText>
      <Button onClick={() => window.location = '#'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
