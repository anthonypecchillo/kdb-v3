/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import NJOverviewPage from './NJOverviewPage';
import NJForestAndLandUsePage from './NJForestAndLandUsePage';
import NJGovernancePage from './NJGovernancePage';
import NJPartnershipsPage from './NJPartnershipsPage';
import NJReportCardsPage from './NJReportCardsPage';

const NJBodyStyled = styled.div`
  background-color: #e5e5e5;
  /* background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
  height: 100%;
  padding: 2.5%;
  width: 100vw;
`;

const NJBody = ({ nationName, jurisdictionName, language }) => {
  const { pageId } = useParams();
  let view;

  switch (pageId) {
    case 'overview':
      view = <NJOverviewPage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
      break;
    case 'forests-and-land-use':
      view = <NJForestAndLandUsePage jurisdictionName={jurisdictionName} nationName={nationName} language={language} />;
      break;
    case 'governance':
      view = <NJGovernancePage />;
      break;
    case 'partnerships':
      view = <NJPartnershipsPage />;
      break;
    case 'report-cards':
      view = <NJReportCardsPage />;
      break;
    default:
      view = null;
  }

  return (
    <NJBodyStyled>
      <center>{`Nation/Jurisidiction ${pageId} page!`}</center>
      <br />
      <br />
      {view}
    </NJBodyStyled>
  );
};

export default NJBody;
