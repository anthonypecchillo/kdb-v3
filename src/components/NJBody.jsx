/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import NationalOverviewPage from './NationalOverviewPage';
import ScrollToTopOnMount from './ScrollToTopOnMount';

import NJOverviewPage from './NJOverviewPage';
import NJForestAndLandUsePage from './NJForestAndLandUsePage';
import NJGovernancePage from './NJGovernancePage';
import NJPartnershipsPage from './NJPartnershipsPage';
import NJReportCardsPage from './NJReportCardsPage';

const NJBodyStyled = styled.div`
  background-color: #e5e5e5;
  /* background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
  height: 100%;
  padding: 2.5% 1.25%;
  width: 100%;
`;

const NJBody = ({ nationName, jurisdictionName, jurisdictionType, language }) => {
  const { pageId } = useParams();
  let view;

  if (jurisdictionType === 'nation') {
    switch (pageId) {
      case 'overview':
        view = <NationalOverviewPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'forests-and-land-use':
        view = <NJForestAndLandUsePage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'governance':
        view = <NJGovernancePage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'partnerships':
        view = <NJPartnershipsPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'report-cards':
        view = <NJReportCardsPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
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
        view = <NJGovernancePage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'partnerships':
        view = <NJPartnershipsPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      case 'report-cards':
        view = <NJReportCardsPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
        break;
      default:
        view = null;
    }
  }

  return (
    <NJBodyStyled>
      <ScrollToTopOnMount />
      {view}
    </NJBodyStyled>
  );
};

export default NJBody;
