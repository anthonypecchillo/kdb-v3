/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

import Loading from './Loading';

import Avatar from '../assets/images/avatar.png';
import Indonesia from '../assets/images/Indonesia.jpg';

const GET_JURISDICTION_DESCRIPTION = gql`
  query getJurisdictionDescription($name: String!, $languageCode: String!) {
    jurisdictionByName(name: $name) {
      id
      name
      contentJurisdictional {
        id
        contentJurisdictionalTranslate(code: $languageCode) {
          id
          languageCode
          description
          driversOfDeforestation
          forestMonitoringMeasurementSystems
        }
      }
    }
  }
`;


const DescriptionGrid = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const DescriptionTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const DescriptionPhoto = styled.div`
  background: no-repeat center/100% url(${Avatar});
  background: ${({ photo }) => photo && `no-repeat center/200% url(${photo})`};
  background-position: top left;
  float: right;
  height: 300px;
  max-height: 300px;
  max-width: 48%;
  margin: 10px;
  width: 100%;

  @media (max-width: 765px) {
    display: block;
    float: none;
    min-height: 300px;
    max-width: 100%;
    margin: 0 auto;
  }
`;

const DescriptionContent = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

const NJDescription = ({ jurisdiction, language }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_DESCRIPTION, {
    variables: { name: jurisdiction, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { description } = data.jurisdictionByName.contentJurisdictional.contentJurisdictionalTranslate;
  const descriptionHTML = ReactHtmlParser(description);

  return (
    <DescriptionGrid>
      <DescriptionTitle>Description</DescriptionTitle>
      <DescriptionContent>
        <DescriptionPhoto photo={Indonesia} />
        {descriptionHTML}
      </DescriptionContent>

    </DescriptionGrid>
  );
};

export default NJDescription;
