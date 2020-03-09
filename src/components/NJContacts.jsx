/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';

import Loading from './Loading';

const AVATAR_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/images/avatar.png';

const GET_JURISDICTION_CONTACTS = gql`
  query getJurisdictionByName($nationName: String!, $jurisdictionName: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
      id
      name
      contacts {
        id
        firstName
        lastName
        companyTitle
        email
        contactType
        nation {
          id
          name
        }
      }
    }
  }
`;

const ContactsGrid = styled.div`
  display: grid;
  grid-gap: 3%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 5fr;
  place-items: center;

  height: 100%;
  width: 100%;

  @media (max-width: 765px) {
    grid-gap: 1.5%;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr 1fr;
  }
`;

const ContactsTitle = styled.h3`
  grid-column: 1/4;

  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;

  @media (max-width: 765px) {
    grid-column: 1/2;
  }
`;

const ContactsCardGrid = styled.div`
  display: grid;
  grid-row-gap: 5%;
  grid-template-rows: 20px 150px auto;
  place-items: center;

  height: 100%;
  width: 100%;
  max-width: 330px;
`;

const ContactsRoleTitle = styled.h4`
  align-self: end;
  justify-self: center;

  margin: 0;
`;

const ContactsPhoto = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 150px;
  position: relative;
  width: 150px;
  z-index: 3;
  &:after {
    background: no-repeat center/110% url(${AVATAR_URL});
    background: ${({ photo }) => photo && `no-repeat center/110% url(${photo})`};
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    z-index: 12;
  }
`;

const ContactsDetails = styled.div`
  align-self: start;
  text-align: center;
  width: 100%;
`;

const ContactsDetailsText = styled.div`
  font-size: ${({ isName }) => (isName ? '14px' : '12px')};
  margin: ${({ isName }) => (isName ? '0' : '10px 0')};
`;

// const ContactsCardGrid = styled.div`
//   display: grid;
//   grid-template-columns: 45px 135px;
//   grid-template-rows: 4fr 3fr 3fr;
// `;

const NJContacts = ({ jurisdictionName, nationName }) => {
  const { data, loading, error } = useQuery(GET_JURISDICTION_CONTACTS, {
    variables: { nationName: nationName, jurisdictionName: jurisdictionName },
  });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;

  const { contacts } = data.jurisdictionByName;

  return (
    <ContactsGrid>
      <ContactsTitle>Contacts</ContactsTitle>
      {contacts.map(({ companyTitle, contactType, email, firstName, id, lastName }, index) => {
        const emailView = !email ? (
          <br />
        ) : (
          <a href={`mailto:${email}`}>
            <ContactsDetailsText>{email}</ContactsDetailsText>
          </a>
        );
        return (
          <ContactsCardGrid key={id}>
            <ContactsRoleTitle>{contactType}</ContactsRoleTitle>
            <ContactsPhoto />
            <ContactsDetails>
              <ContactsDetailsText isName>{`${firstName} ${lastName}`}</ContactsDetailsText>
              <ContactsDetailsText>{companyTitle}</ContactsDetailsText>
              {emailView}
            </ContactsDetails>
          </ContactsCardGrid>
        );
      })}
    </ContactsGrid>
  );
};

export default NJContacts;
