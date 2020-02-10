/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Loading from './Loading';

const GET_JURISDICTION_SAFEGUARDS = gql`
  query getJurisdictionSafeguards($name: String!, $languageCode: String!) {
    jurisdictionByName(name: $name) {
      id
      safeguard {
        id
        safeguardTranslate(code: $languageCode) {
          id
          languageCode
          description
        }
      }
    }
  }
`;

const OldGovernanceSafeguardsStyled = styled.div`
  border-top: 3px solid #3e522d;
  height: calc(100% - 2.5% - 40px);
  margin-top: 15px;
  overflow-y: scroll;
  padding: 15px;
  width: 100%;
`;

const OldGovernanceSafeguards = ({ jurisdiction, language, nation }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_SAFEGUARDS, {
    variables: { name: jurisdiction, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { description  } = data.jurisdictionByName.safeguard.safeguardTranslate;
  const safeguardsHTML = ReactHtmlParser(description);

  return (
    <OldGovernanceSafeguardsStyled>{safeguardsHTML}</OldGovernanceSafeguardsStyled>
  );
};

export default OldGovernanceSafeguards;
