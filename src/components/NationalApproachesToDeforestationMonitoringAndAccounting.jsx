/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

// import { useQuery } from '@apollo/react-hooks';
// import gql from 'graphql-tag';
import React from 'react';
// import ReactHtmlParser from 'react-html-parser';
import styled from 'styled-components';

// import Loading from './Loading';

// const GET_NATIONAL_ADMA = gql`
//   query getNationADMA($nationName: String!, $languageCode: String!) {
//     nationByName(nationName: $nationName) {
//       id
//       name
//       contentNational {
//         id
//         contentNationalTranslate(code: $languageCode) {
//           id
//           languageCode
//           approachesToDeforestationoMonitoringAndAccounting
//         }
//       }
//     }
//   }
// `;


const NADMAGrid = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-rows: auto 1fr;

  height: 100%;
  width: 100%;
`;

const NADMATitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

// const NADMAPhoto = styled.div`
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

const NADMAContent = styled.div`
  height: 100%;
  width: 100%;
`;

const NationalApproachesToDeforestationMonitoringAndAccounting = ({ language, nationName }) => {
  // const { data, loading, error } = useQuery(GET_NATIONAL_ADMA, {
  //   variables: { nationName: nationName, languageCode: language },
  // });
  // if (loading) return <Loading />;
  // if (error) return <p>ERROR</p>;

  // const nadmaHTML = ReactHtmlParser(nadma);

  return (
    <NADMAGrid>
      <NADMATitle>National Approaches to Deforestation Monitoring and Accounting</NADMATitle>
      <NADMAContent>
        {/* {nadmaHTML} */}
        <ul style={{padding: '0 25px 0 40px'}}>
          <li>Describe the nations approach to Deforestation Monitoring and Accounting. (This is how all of the states/jurisdictions will be monitored and accounted for.)</li>
          <br/>
          <li>What is the methodology behind how this nation comes up with the numbers we’re showing?</li>
          <br/>
          <li>What are the pros and cons of this approach?</li>
      </ul>
      </NADMAContent>
    </NADMAGrid>
  );
};

export default NationalApproachesToDeforestationMonitoringAndAccounting;
