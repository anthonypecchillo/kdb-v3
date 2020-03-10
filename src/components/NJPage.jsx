/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import NJHeader from './NJHeader';
import NJBody from './NJBody';

// import Wood from '../assets/icons/wood1.jpg';

const NJPageGrid = styled.div`
  display: grid;
  grid-template-rows: 460px auto;

  background-color: #e5e5e5;
  ${'' /* background: ${`repeat center/125% url(${Wood})`}; */}
  height: auto;
  padding-top: 75px;
  width: 100%;

  @media (max-width: 1025px) {
    grid-template-rows: 345px auto;
  }

  @media (max-width: 765px) {
    grid-template-rows: 230px auto;
  }
`;

const NJPage = ({
  flags,
  fullName,
  headerImageURL,
  jurisdictionName,
  jurisdictionType,
  language,
  nationName,
}) => {
  const { path } = useRouteMatch();
  return (
    <NJPageGrid>
      <NJHeader
        flags={flags}
        fullName={fullName}
        headerImageURL={headerImageURL}
        jurisdictionName={jurisdictionName}
        jurisdictionType={jurisdictionType}
        nationName={nationName}
      />
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/overview`} />
        </Route>
        <Route path={`${path}/:pageId`}>
          <NJBody
            jurisdictionName={jurisdictionName}
            jurisdictionType={jurisdictionType}
            nationName={nationName}
            language={language}
          />
        </Route>
      </Switch>
    </NJPageGrid>
  );
};

export default NJPage;
