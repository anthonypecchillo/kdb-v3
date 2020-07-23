/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

import NationalOverviewPage from './NationalOverviewPage';
// import NationalApproachesPage from './NationalApproachesPage';
import NationalForestsAndLandUsePage from './NationalForestsAndLandUsePage';
import NationalGovernancePage from './NationalGovernancePage';
import ScrollToTopOnMount from './ScrollToTopOnMount';

import NJOverviewPage from './NJOverviewPage';
import NJForestAndLandUsePage from './NJForestAndLandUsePage';
import NJGovernancePage from './NJGovernancePage';
import NJPartnershipsPage from './NJPartnershipsPage';
import NJReportCardsPage from './NJReportCardsPage';

import TempIconList from './TempIconList';

const NJBodyStyled = styled.div`
  background-color: #e5e5e5;
  /* background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
  height: 100%;

  ${({ hasTiles }) => hasTiles && css`
    justify-self: center;
    padding: 50px 1.25%;
    width: 95%;
    max-width: 1480px;
  `};

  @media (max-width: 1280px) {
    width: 100%;
    max-width: none;
  }
`;

const NJBody = ({ nationName, jurisdictionName, jurisdictionType, language }) => {
  const { pageId } = useParams();
  let hasTiles = true;
  let view;

  if (jurisdictionType === 'nation') {
    switch (pageId) {
      case 'overview':
        view = <NationalOverviewPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'forests-and-land-use':
        // view = <NationalApproachesPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        view = <NationalForestsAndLandUsePage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'governance':
        view = <NationalGovernancePage jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} nationName={nationName} language={language} />;
        break;
      case 'partnerships':
        hasTiles = false;
        view = <NJPartnershipsPage jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} nationName={nationName} language={language} />;
        break;
      default:
        view = null;
    }
  }

  if (jurisdictionType === 'state') {
    switch (pageId) {
      case 'overview':
        view = <NJOverviewPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'forests-and-land-use':
        view = <NJForestAndLandUsePage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'governance':
        view = <NJGovernancePage jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} nationName={nationName} language={language} />;
        break;
      case 'partnerships':
        hasTiles = false;
        view = <NJPartnershipsPage jurisdictionName={jurisdictionName} jurisdictionType={jurisdictionType} nationName={nationName} language={language} />;
        break;
      case 'report-cards':
        view = <NJReportCardsPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        // <TempIconList />
        break;
      default:
        view = null;
    }
  }

  return (
    <NJBodyStyled hasTiles={hasTiles}>
      <ScrollToTopOnMount />
      {view}
    </NJBodyStyled>
  );
};

export default NJBody;
