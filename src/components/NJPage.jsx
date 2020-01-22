/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import NJHeader from './NJHeader';
import NJBody from './NJBody';

const NJPageGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 460px auto;

  height: 6000px;
  width: 100%;
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
        jurisdictionType={jurisdictionType}
        nationName={nationName}
        jurisdictionName={jurisdictionName}
      />
      <Switch>
        <Route exact path={path}>
          <Redirect to={`${path}/overview`} />
        </Route>
        <Route path={`${path}/:pageId`}>
          <NJBody nationName={nationName} jurisdictionName={jurisdictionName} language={language} />
        </Route>
      </Switch>
    </NJPageGrid>
  );
};

export default NJPage;
