/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import React from 'react';
// import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

// import Loading from './Loading';

// const GET_NATIONAL_ADFD = gql`
//   query getNationADFD($nationName: String!, $languageCode: String!) {
//     nationByName(nationName: $nationName) {
//       id
//       name
//       contentNational {
//         id
//         contentNationalTranslate(code: $languageCode) {
//           id
//           languageCode
//           approachesToDeforestationoAndForestDegradation
//         }
//       }
//     }
//   }
// `;


const NADFDGrid = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const NADFDTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

// const NADFDPhoto = styled.div`
//   background: no-repeat center/100% url(${defaultImage});
//   background: ${({ photo }) => photo && `no-repeat center/200% url(${photo})`};
//   background-position: top left;
//   float: right;
//   height: 300px;
//   max-height: 300px;
//   max-width: 48%;
//   margin: 10px;
//   width: 100%;
//
//   @media (max-width: 765px) {
//     display: block;
//     float: none;
//     min-height: 300px;
//     max-width: 100%;
//     margin: 0 auto;
//   }
// `;

const NADFDContent = styled.div`
  height: 100%;
  width: 100%;
`;

const NationalApproachesToDeforestationAndForestDegradation = ({ language, nation }) => {
  // const { data, loading, error } = useQuery(GET_NATIONAL_NADFD, {
  //   variables: { nationName: nationName, languageCode: language },
  // });
  // if (loading) return <Loading />;
  // if (error) return <p>ERROR</p>;

  // const nadfdHTML = ReactHtmlParser(nadfd);

  return (
    <NADFDGrid>
      <NADFDTitle>National Approaches to Deforestation and Forest Degradation</NADFDTitle>
      <NADFDContent>
        {/* {nadfdHTML} */}
        <ul style={{padding: '0 25px 0 40px'}}>
          <li>Targets and Reference Levels</li>
          <br/>
          <ul>
            <li>What has Brazil said is the reference level that they are going to use to judge whether or not they are reducing deforestation.</li>
            <br/>
            <ul>
              <li>Describe the Approach</li>
              <br/>
              <li>Link to the appropriate links in the government</li>
              <br/>
              <li>Talk about the different choices they’ve made on the reference levels.</li>
            </ul>
          </ul>
        </ul>
      </NADFDContent>
    </NADFDGrid>
  );
};

export default NationalApproachesToDeforestationAndForestDegradation;
