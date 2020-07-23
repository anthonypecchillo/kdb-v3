/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';
import PartnershipListItem from './PartnershipListItem';

const GET_NATION_PARTNERSHIPS = gql`
  query getNationPartnerships($name: String!, $languageCode: String!) {
    nationByName(name: $name) {
      id
      partnerships {
        id
        nation {
          id
          name
        }
        fundingAmount
        fundingCurrency
        partnershipJurisdictions {
          id
          name
        }
        initiativeStatus {
          id
          initiativeStatusTranslate(code: $languageCode) {
            id
            name
          }
        }
        organizations {
          id
          nameShort
          url
          organizationTranslate(code: $languageCode) {
            id
            nameLong
          }
        }
        initiativeTypes {
          id
          initiativeTypeTranslate(code: $languageCode) {
            id
            name
          }
        }
        partnershipTranslate(code: $languageCode) {
          id
          name
          description
          initiativeStatusDetails
        }
        url
      }
    }
  }
`;


const PartnershipListStyled = styled.div`
  justify-self: center;

  background-color: white;
  border-top: 3px solid #3e522d;
  ${'' /* height: auto; */}
  margin-top: 10px;
  ${'' /* overflow-y: scroll; */}
  width: 100%;
`;

const PartnershipList = ({ jurisdictionName, jurisdictionType, language, nationName }) => {
  const { data, loading, error } = useQuery(GET_NATION_PARTNERSHIPS, {
    variables: { name: nationName, languageCode: language },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  let { partnerships } = data.nationByName;
  console.log(jurisdictionType);
  if (jurisdictionType === 'state') {
    partnerships = partnerships.filter(partnership => {
      const jurisdictions = partnership.partnershipJurisdictions.map(partnershipJurisdiction => partnershipJurisdiction.name);
      return jurisdictions.includes(jurisdictionName);
    });
  }

  console.log(partnerships);

  return (
    <PartnershipListStyled>
      {partnerships.map((partnership, index) => (
        // <div>{JSON.stringify(partnership)}</div>
        <PartnershipListItem
          index={index}
          key={partnership.id}
          partnership={partnership}
          partnershipListLength={partnerships.length}
        />
      ))}
    </PartnershipListStyled>
  );
};

export default PartnershipList;
