import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call Me</LinkTitle>
        <LinkItem href="tel: xxx-xxxxxx">xxx-xxxxxx</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email Me</LinkTitle>
        <LinkItem href="mailto:xietniet@gmail.com">xietniet@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating!</Slogan>
        </CompanyContainer>
      <SocialContainer>
        <SocialIcons href='https://github.com/Xiet-Dev'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
