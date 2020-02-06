/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import NJHeader from './NJHeader';
import NJBody from './NJBody';

const NJPageGrid = styled.div`
  height: 6000px;
  padding-top: 75px;
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
