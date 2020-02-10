/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Loading from './Loading';

const GET_JURISDICTION_LAW_POLICY_STRATEGY = gql`
  query getJurisdictionLawPolicyStrategy($name: String!, $languageCode: String!) {
    jurisdictionByName(name: $name) {
      id
      lawPolicyStrategy {
        id
        lawPolicyStrategyTranslate(code: $languageCode) {
          id
          languageCode
          description
        }
      }
    }
  }
`;

const OldGovernanceLawPolicyStrategyStyled = styled.div`
  border-top: 3px solid #3e522d;
  height: calc(100% - 2.5% - 40px);
  margin-top: 15px;
  overflow-y: scroll;
  padding: 15px;
  width: 100%;
`;

const OldGovernanceLawPolicyStrategy = ({ jurisdiction, language, nation }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_LAW_POLICY_STRATEGY, {
    variables: { name: jurisdiction, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { description  } = data.jurisdictionByName.lawPolicyStrategy.lawPolicyStrategyTranslate;
  const lawPolicyStrategyHTML = ReactHtmlParser(description);

  return (
    <OldGovernanceLawPolicyStrategyStyled>{lawPolicyStrategyHTML}</OldGovernanceLawPolicyStrategyStyled>
  );
};

export default OldGovernanceLawPolicyStrategy;
