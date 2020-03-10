/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJMap from './NJMap';
import NJMapContainer from './NJMapContainer';
import NJNav from './NJNav';

const navLinkListNational = [
  {
    linkText: 'Overview',
    urlText: 'overview',
    faIconClass: 'info',
  },
  {
    linkText: 'Forest & Land Use',
    urlText: 'forests-and-land-use',
    faIconClass: 'trees',
  },
  {
    linkText: 'Governance',
    urlText: 'governance',
    faIconClass: 'balance-scale-right',
  },
  {
    linkText: 'Partnerships',
    urlText: 'partnerships',
    faIconClass: 'handshake',
  },
];

const navLinkListJurisdictional = [
  {
    linkText: 'Overview',
    urlText: 'overview',
    faIconClass: 'info',
  },
  {
    linkText: 'Forests & Land Use',
    urlText: 'forests-and-land-use',
    faIconClass: 'trees',
  },
  {
    linkText: 'Governance',
    urlText: 'governance',
    faIconClass: 'balance-scale-right',
  },
  {
    linkText: 'Partnerships',
    urlText: 'partnerships',
    faIconClass: 'handshake',
  },
  {
    linkText: 'Report Cards',
    urlText: 'report-cards',
    faIconClass: 'file-alt',
  },
];

const NJHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 3% 3fr 330px 3%;
  grid-template-rows: 1fr 3fr 30px 30px;
  grid-template-areas:
    '. header-title header-flags .'
    '. . header-map-container .'
    'header-nav header-nav header-nav header-nav'
    'header-nav header-nav header-nav header-nav';

  background-image: ${({ bannerURL }) => `url(${bannerURL})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  background-origin: padding-box;
  background-attachment: fixed;
  box-shadow: 6px 18px 18px rgba(0,0,0,0.08), -6px 18px 18px rgba(0,0,0,0.08);

  height: 460px;
  position: sticky;
  overflow: hidden;
  top: -326px;
  width: 100%;
  z-index: 997;

  @media (max-width: 1025px) {
    grid-template-columns: 3% 1fr 1fr 3%;
    grid-template-rows: 1fr 2fr 30px 30px;
    grid-template-areas:
      '. header-title header-title .'
      '. header-flags header-flags .'
      'header-nav header-nav header-nav header-nav'
      'header-nav header-nav header-nav header-nav';

    height: 345px;
    top: -211px;
  }

  @media (max-width: 765px) {
    grid-template-rows: 1fr 1fr 30px 30px;
    height: 230px;
    top: -96px;
  }

  @media (max-width: 460px) {
    ${'' /* height: 115px; */}
  }
`;

const NJHeaderTitle = styled.h1`
  grid-area: header-title;

  align-self: center;
  justify-self: left;

  color: white;
  margin: 0;

  @media (max-width: 765px) {
    justify-self: center;
    font-size: 28px;
  }

  @media (max-width: 460px) {
    font-size: 24px;
  }
`;

const NJHeaderFlags = styled.div`
  grid-area: header-flags;

  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  align-self: center;
  justify-self: end;

  color: white;

  @media (max-width: 1025px) {
    align-self: start;
    justify-self: left;
  }

  @media (max-width: 765px) {
    justify-self: center;
  }

  @media (max-width: 460px) {
    ${'' /* display: none; */}
  }
`;

const NJFlag = styled.div`
  place-self: center;

  background: ${({ flagURL }) => `no-repeat center/100% url(${flagURL})`};
  height: 50px;
  width: 72px;

  @media (max-width: 460px) {
    height: 25px;
    width: 36px;
  }
`;

const NJHeader = ({ flags, fullName, headerImageURL, jurisdictionType, nationName, jurisdictionName }) => {
  const navLinkList = jurisdictionType === 'nation' ? navLinkListNational : navLinkListJurisdictional;

  return (
    <NJHeaderGrid bannerURL={headerImageURL}>
      <NJHeaderTitle>{fullName}</NJHeaderTitle>
      <NJHeaderFlags>
        <NJFlag flagURL={flags[0]} />
        <NJFlag flagURL={flags[1]} />
      </NJHeaderFlags>
      <NJNav navLinkList={navLinkList} />
      <NJMapContainer>
        <NJMap jurisdictionType={jurisdictionType} nationName={nationName} jurisdictionName={jurisdictionName} />
      </NJMapContainer>
    </NJHeaderGrid>
  );
};

export default NJHeader;
