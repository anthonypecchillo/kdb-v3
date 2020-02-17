/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import React from 'react';
// import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

// import Loading from './Loading';

import Avatar from '../assets/images/avatar.png';
import Indonesia from '../assets/images/Indonesia.jpg';

// const GET_NATIONAL_COMMITMENTS = gql`
//   query getNationCommitments($nationName: String!, $languageCode: String!) {
//     nationByName(nationName: $nationName) {
//       id
//       name
//       contentNational {
//         id
//         contentNationalTranslate(code: $languageCode) {
//           id
//           languageCode
//           commitments
//         }
//       }
//     }
//   }
// `;


const CommitmentsGrid = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const CommitmentsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const CommitmentsPhoto = styled.div`
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

const CommitmentsContent = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;

const NationalCommitments = ({ language, nation }) => {
  // const { data, loading, error } = useQuery(GET_NATIONAL_Commitments, {
  //   variables: { nationName: nation, languageCode: language },
  // });
  // if (loading) return <Loading />;
  // if (error) return <p>ERROR</p>;

  // const commitmentsHTML = ReactHtmlParser(commitments);

  return (
    <CommitmentsGrid>
      <CommitmentsTitle>Commitments</CommitmentsTitle>
      <CommitmentsContent>
        {/* {commitmentsHTML} */}
        No instructions, other than text content will go here.
      </CommitmentsContent>
    </CommitmentsGrid>
  );
};

export default NationalCommitments;
