/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const InstitutionalFrameworkListItemGrid = styled.div`
  ${'' /* display: grid;
  grid-template-rows: 45px auto 45px;

  border-radius: 5px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: ${({ index, isOpen, lastIndex }) =>
    isOpen && index !== lastIndex ? '45px' : '30px'};
  margin-top: ${({ index, isOpen }) => (isOpen && index !== 0 ? '45px' : '30px')};
  width: 95%; */}
  margin-top: 35px;
  padding: 0 15px;
`;

const FrameworkLink = styled.a`
  ${'' /* align-self: ${({ row }) => (row ? 'start' : 'end')};

  height: 115px;
  width: 115px;

  @media (max-width: 1025px) {
    height: 115px;
    width: 115px;
  }

  @media (max-width: 765px) {
    height: 50px;
    margin-bottom: 0;
    width: 50px;
  } */}
`;

const FrameworkTitle = styled.div`
  font-weight: 600;
`;

// const FrameworkPoliticalScope = styled.div`
//
// `;

const FrameworkDescription = styled.p`
  font-size: 14px;
`;

const InstitutionalFrameworkListItem = ({ description, nameLong, nameShort, politicalScope, url }) => {
  const name = nameShort ? `${nameLong} (${nameShort})` : nameLong;
  return (
    <InstitutionalFrameworkListItemGrid>
      <FrameworkLink href={url} rel="noopener noreferrer" target="_blank">
        <FrameworkTitle>{name}</FrameworkTitle>
      </FrameworkLink>

      {/* <FrameworkPoliticalScope>{politicalScope}</FrameworkPoliticalScope> */}

      <FrameworkDescription>{description}</FrameworkDescription>
    </InstitutionalFrameworkListItemGrid>
  );
}


export default InstitutionalFrameworkListItem;
