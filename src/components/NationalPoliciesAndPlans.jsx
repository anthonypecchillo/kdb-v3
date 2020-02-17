/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Loading from './Loading';

const GET_NATION_POLICIES_AND_PLANS = gql`
  query getNationPoliciesAndPlans($name: String!, $languageCode: String!) {
    nationByName(name: $name) {
      id
      contentNational {
        contentNationalTranslate(code: $languageCode) {
          policiesPlansText
        }
      }
    }
  }
`;

const NationalPoliciesAndPlansStyled = styled.div`
  border-top: 3px solid #3e522d;
  height: calc(100% - 2.5% - 40px);
  margin-top: 15px;
  overflow-y: scroll;
  padding: 15px;
  width: 100%;
`;

const NationalPoliciesAndPlans = ({ jurisdiction, language, nation }) => {
  const { data, loading, error } = useQuery(GET_NATION_POLICIES_AND_PLANS, {
    variables: { name: nation, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { policiesPlansText  } = data.nationByName.contentNational.contentNationalTranslate;
  const policiesPlansHTML = ReactHtmlParser(policiesPlansText);

  return (
    <NationalPoliciesAndPlansStyled>{policiesPlansHTML}</NationalPoliciesAndPlansStyled>
  );
};

export default NationalPoliciesAndPlans;
