/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CIFOR_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/CIFOR.png';
const EII_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/EII.png';
const GFW_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/GFW.png';
const MDA_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/MDA.png';
const NORAD_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/NORAD.png';
const PNS_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/PNS.png';
const RBF_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/RBF.png';
const TCG_LOGO_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/logos/TCG.png';

const FACEBOOK_URL = 'https://www.facebook.com/GCFTF';
const CIFOR_URL = 'https://www.cifor.org';
const EII_URL = 'https://www.earthinnovation.org';
const GCFTF_URL = 'https://www.gcftf.org';
const GFW_URL = 'https://www.globalforestwatch.org';
const INSTAGRAM_URL = 'https://www.instagram.com/gcftaskforce/';
const MDA_URL = 'https://www.mda.org.pe/';
const NORAD_URL = 'https://norad.no/en/front/';
const PNS_URL = 'http://www.pronatura-sur.org/';
const RBF_URL = 'https://www.rbf.org/';
const TCG_URL = 'https://www.theclimategroup.org';
const TWITTER_URL = 'https://twitter.com/gcftaskforce';
const YOUTUBE_URL = 'https://www.youtube.com/channel/UCI4m4y7gTCa_o75aGBXNOaw';

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1.5fr 4.5fr 2fr 1fr;
  align-items: center;

  background-color: #3e522d;
  color: white;
  height: 352px;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 1.5fr 2.5fr 1.5fr 3fr 1.5fr;
    grid-row-gap: 20px;
    grid-template-areas:
      'backtomainsite2'
      'navlistgrid'
      'socialgrid'
      'withsupportfrom'
      'acknowledgementsgrid'
      'copyright';

    height: 405px;
  }
`;

const AcknowledgementsGrid = styled.div`
  grid-column: 2/3;
  grid-row: 2/5;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 22px;
  grid-column-gap: 22px;
  align-items: start;
  justify-items: center;

  height: 100%;
  margin: 0 15px;

  @media (max-width: 765px) {
    grid-area: acknowledgementsgrid;
    grid-row: 5/6;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 1fr 1fr;
    margin: 0 30px;
    grid-column-gap: 15px;
    align-items: start;
  }
`;

const FooterTitle1 = styled.h3`
  margin: 0 15px;

  @media (max-width: 765px) {
    display: none;
  }
`;

const FooterTitle2 = styled.h3`
  margin: 0 15px;

  @media (max-width: 765px) {
    grid-area: withsupportfrom;
    place-self: center;
  }
`;

const FooterNavListGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-row-gap: 15px;

  margin: 15px;

  @media (max-width: 765px) {
    grid-area: navlistgrid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: center;

    margin: 0;
  }
`;

const FooterNavListItemLink = styled(Link)`
  text-decoration: none;
`;

const FooterNavListItemGrid = styled.div`
  display: grid;
  grid-template-columns: 30px auto 4fr;

  color: white;
  cursor: pointer;
  transition: color 0.4s ease 0.05s;

  &:active {
    text-decoration: ${({ underline }) => underline && 'underline solid black'};
  }

  &:hover {
    color: #b5db37;
    cursor: pointer;
  }

  &:link {
    color: white;
  }

  &:visited {
    color: white;
  }

  @media (max-width: 765px) {
    font-size: 18px;
  }
`;

const FooterSocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto) 50%;
  grid-gap: 15px;

  margin-left: 15px;

  @media (max-width: 765px) {
    grid-area: socialgrid
    grid-template-columns: repeat(4, auto);
    justify-items: center;

    margin-left: 0;
  }
`;

const Icon = styled.i`
  place-self: center;
`;

const SocialIcon = styled.i`
  place-self: start;

  color: white;
  transition: color 0.6s ease 0s;

  &:hover {
    color: #b5db37;
  }
`;

const FooterCopyrightText = styled.div`
  grid-row: 4/5;

  align-self: start;

  margin-left: 15px;

  @media (max-width: 765px) {
    grid-area: copyright;
    grid-column: 1/5;

    background-color: black;
    color: #b5db37;
    height: 100%;
    line-height: 50px;
    margin: 0;
    text-align: center;
    width: 100%;
  }
`;

const LogoLink = styled.a`
  align-self: ${({ row }) => (row ? 'start' : 'end')};

  height: 115px;
  width: 115px;

  @media (max-width: 1025px) {
    height: 115px;
    width: 115px;
  }

  @media (max-width: 765px) {
    height: 50px;
    margin-bottom: 0;
    width: 50px;
  }
`;

const Logo = styled.div`
  background: ${({ logo }) => `no-repeat center/100% url(${logo}`});
  background-color: white;
  height: 115px;
  width: 115px;

  @media (max-width: 1025px) {
    height: 115px;
    width: 115px;
  }

  @media (max-width: 765px) {
    height: 50px;
    width: 50px;
  }
`;

const BackToMainSiteLink = styled.a`
  text-decoration: none;

  @media (max-width: 765px) {
    display: none;
  }
`;

const BackToMainSiteLink2 = styled.a`
  display: none;
  text-decoration: none;

  @media (max-width: 765px) {
    grid-area: backtomainsite2;
    justify-self: center;

    display: initial;
    line-height: 50px;
  }
`;

const Footer = ({ content }) => {
  const { ABOUT, BACK_TO_MAIN_SITE, CONTACTS, MORE, SOURCES, WITH_SUPPORT_FROM } = content;

  return (
    <FooterGrid>
      <FooterTitle1>{MORE}</FooterTitle1>

      <FooterTitle2>{WITH_SUPPORT_FROM}</FooterTitle2>

      <FooterNavListGrid>
        <FooterNavListItemLink to="/about">
          <FooterNavListItemGrid>
            <Icon className="fas fa-info" />
            <span>{ABOUT}</span>
          </FooterNavListItemGrid>
        </FooterNavListItemLink>
        <FooterNavListItemLink to="/sources">
          <FooterNavListItemGrid>
            <Icon className="far fa-file-pdf" />
            <span>{SOURCES}</span>
          </FooterNavListItemGrid>
        </FooterNavListItemLink>
        <FooterNavListItemLink to="/contact">
          <FooterNavListItemGrid>
            <Icon className="far fa-address-book" />
            <span>{CONTACTS}</span>
          </FooterNavListItemGrid>
        </FooterNavListItemLink>
        <BackToMainSiteLink href={GCFTF_URL} rel="noopener noreferrer" target="_blank">
          <FooterNavListItemGrid>
            <Icon className="fas fa-home" />
            <span>{BACK_TO_MAIN_SITE}</span>
          </FooterNavListItemGrid>
        </BackToMainSiteLink>
      </FooterNavListGrid>

      <AcknowledgementsGrid>
        <LogoLink href={NORAD_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={NORAD_LOGO_URL} />
        </LogoLink>
        <LogoLink href={RBF_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={RBF_LOGO_URL} />
        </LogoLink>
        <LogoLink href={CIFOR_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={CIFOR_LOGO_URL} />
        </LogoLink>
        <LogoLink href={GFW_URL} rel="noopener noreferrer" target="_blank" row={0}>
          <Logo logo={GFW_LOGO_URL} />
        </LogoLink>
        <LogoLink href={PNS_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={PNS_LOGO_URL} />
        </LogoLink>
        <LogoLink href={MDA_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={MDA_LOGO_URL} />
        </LogoLink>
        <LogoLink href={EII_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={EII_LOGO_URL} />
        </LogoLink>
        <LogoLink href={TCG_URL} rel="noopener noreferrer" target="_blank" row={1}>
          <Logo logo={TCG_LOGO_URL} />
        </LogoLink>
      </AcknowledgementsGrid>

      <FooterSocialGrid>
        <a href={FACEBOOK_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-facebook-f fa-3x" />
        </a>
        <a href={TWITTER_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-twitter fa-3x" />
        </a>
        <a href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-instagram fa-3x" />
        </a>
        <a href={YOUTUBE_URL} rel="noopener noreferrer" target="_blank">
          <SocialIcon className="fab fa-youtube fa-3x" />
        </a>
      </FooterSocialGrid>

      <FooterCopyrightText>©Governors' Climate and Forests Task Force, 2019</FooterCopyrightText>

      <BackToMainSiteLink2 href={GCFTF_URL} rel="noopener noreferrer" target="_blank">
        <FooterNavListItemGrid>
          <Icon className="fas fa-home" />
          <span>{BACK_TO_MAIN_SITE}</span>
        </FooterNavListItemGrid>
      </BackToMainSiteLink2>

      <div />
    </FooterGrid>
  );
};

export default Footer;
