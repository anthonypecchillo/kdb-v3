/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PartnershipStatusStepper from './PartnershipStatusStepper';

const PartnershipBodyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 10px;

  background-color: #e5e5e5;
  min-height: ${({ isOpen }) => isOpen && '250px'};
  padding: ${({ isOpen }) => isOpen && '2.73% 3.63% 2.72% 2.18%'};
  width: 100%;
`;

const PartnershipBodyMiniGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(122px, 1fr) 3fr;
  grid-template-rows: repeat(3, 1fr) 2fr;
  grid-row-gap: 10px;
  align-items: center;

  border-right: 1px solid black;
  height: 100%;
  padding-right: 7.26%;
  width: 100%;
`;

const PartnershipLabel = styled.span`
  font-size: 16px;
`;

const PartnershipText = styled.span`
  justify-self: center;

  font-size: 16px;
`;

const PartnershipDescription = styled.div`
  align-self: center;

  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-left: 7.26%;
`;

const PartnershipTagList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;

  border-radius: 0 0 5px 5px;
  height: 100%;
  padding-right: 2.5%;
  width: 100%;
`;

const PartnershipTag = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 34px;
  line-height: 34.5px;
  margin: 10px 5px;
  padding: 0 10px;
  text-align: center;
`;

const PartnershipBody = ({ isOpen }) => {
  // TODO: Conditional Here!
  // If summary is an array, dynamically render list.
  // Else, render as paragraph tag.

  if (!isOpen) {
    return <PartnershipBodyGrid isOpen={isOpen} />;
  }
  return (
    <PartnershipBodyGrid isOpen={isOpen}>
      <PartnershipBodyMiniGrid>
        <PartnershipLabel>Initiative Type:</PartnershipLabel>
        <PartnershipTag>Protected Areas</PartnershipTag>
        <PartnershipLabel>Funding Raised:</PartnershipLabel>
        <PartnershipText>$34,456,732</PartnershipText>
        <PartnershipLabel>Funding Source:</PartnershipLabel>
        <PartnershipText>European Union</PartnershipText>
        <PartnershipLabel>Partners:</PartnershipLabel>
        <PartnershipTagList>
          <PartnershipTag>IBAM</PartnershipTag>
          <PartnershipTag>SEMA</PartnershipTag>
          <PartnershipTag>INPE</PartnershipTag>
          <PartnershipTag>ABCD</PartnershipTag>
          <PartnershipTag>EFGHIJK</PartnershipTag>
        </PartnershipTagList>
      </PartnershipBodyMiniGrid>
      <PartnershipDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mauris quam. In
        semper dolor vel nunc porttitor ornare. Maecenas hendrerit urna euismod, sodales orci eget,
        pulvinar risus. Proin lacinia tincidunt ante, quis feugiat ipsum accumsan id. Sed facilisis
        urna nisl, in ultricies turpis fermentum eget. Nullam turpis libero, venenatis eu urna eget,
        dapibus varius mauris. Integer vehicula porttitor vestibulum. Nunc bibendum tortor id
        egestas commodo.
        <br />
        <br />
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aliquam pharetra eleifend felis. Praesent commodo risus nec aliquet maximus. Mauris bibendum
        volutpat dui. Pellentesque at cursus arcu. Pellentesque consequat aliquet faucibus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </PartnershipDescription>
      <PartnershipStatusStepper activeStep={2} />
    </PartnershipBodyGrid>
  );
};

export default PartnershipBody;
