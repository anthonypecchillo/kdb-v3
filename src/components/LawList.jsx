/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import LawListItem from './LawListItem';

const GET_JURISDICTION_LAWS = gql`
  query getJurisdictionLaws($name: String!, $languageCode: String!) {
    regionByName(name: $name) {
      id
      laws {
        id
        lawNumber
        pubDate
        region {
          coatOfArmsUrl
        }
        citation {
          id
          filename
          url
        }
        lawTranslate(code: $languageCode) {
          id
          languageCode
          lawType
          name
          summary
        }
        lawTags {
          id
          lawTagTranslate(code: $languageCode) {
            id
            languageCode
            tagName
          }
        }
      }
    }
  }
`;

const LawListStyled = styled.div`
  background-color: white;
  border-top: 3px solid #3e522d;
  height: calc(100% - 5% - 37px - 15px);
  margin: 15px 0;
  overflow-y: scroll;
  width: 100%;
`;

const LawList = ({ jurisdiction, language, nation }) => {
  const region = jurisdiction || nation;
  const { data, loading, error } = useQuery(GET_JURISDICTION_LAWS, {
    variables: { name: region, languageCode: language },
  });
  // if (loading) return <Loading />;
  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  const { laws } = data.regionByName;

  return (
    <LawListStyled>
      {laws.map((law, index) => (
        <LawListItem index={index} key={law.id} law={law} lawListLength={laws.length} />
      ))}
    </LawListStyled>
  );
};

export default LawList;
