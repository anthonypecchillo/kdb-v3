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
  ${'' /* grid-template-columns: 50px 3fr minmax(330px, 1fr) 50px; */}
  ${'' /* grid-template-columns: 50px 3fr 330px 50px; */}
  grid-template-columns: 3% 3fr 330px 3%;
  grid-template-rows: 1fr 3fr 30px 30px;

  background-image: ${({ bannerURL }) => `url(${bannerURL})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
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
  }
`;

const NJHeaderTitle = styled.h1`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
  justify-self: start;

  color: white;
  margin: 0;
`;

const NJHeaderFlags = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  align-self: center;
  justify-self: end;

  color: white;

  @media (max-width: 1025px) {
    display: none;
  }
`;

const NJFlag = styled.div`
  place-self: center;

  background: ${({ flagURL }) => `no-repeat center/100% url(${flagURL})`};
  height: 50px;
  width: 72px;
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
