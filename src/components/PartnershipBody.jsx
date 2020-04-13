/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import PartnershipStatusStepper from './PartnershipStatusStepper';

const PartnershipBodyGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(135px, 1fr) 3fr 4fr;
  grid-row-gap: 10px;
  ${({ isOpen }) => isOpen && css`
    grid-template-rows: auto repeat(3, 50px) repeat(2, auto);
    grid-template-areas:
      'partnership-title partnership-title partnership-title'
      'initiative-type-label initiative-type partnership-description'
      'funding-amount-label  funding-amount  partnership-description'
      'funding-source-label  funding-source  partnership-description'
      'partners-list-label   partners-list   partnership-description'
      'status-stepper        status-stepper  status-stepper';

    min-height: 250px;
    padding: 25px 3.63% 25px 2.18%;
  `};

  background-color: #e5e5e5;
  width: 100%;

  @media (max-width: 1025px) {
    grid-template-columns: minmax(135px, 1fr) 3fr;
    ${({ isOpen }) => isOpen && css`
      grid-template-rows: auto auto repeat(3, 50px) repeat(3, auto);
      grid-row-gap: 15px;
      grid-template-areas:
      'partnership-title partnership-title'
      'partnership-description partnership-description'
      'initiative-type-label initiative-type'
      'funding-amount-label funding-amount'
      'funding-source-label funding-source'
      'partners-list-label partners-list'
      'status-stepper status-stepper';

      padding: 20px 3% 20px 3%;
    `};
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    ${({ isOpen }) => isOpen && css`
      grid-template-rows: auto auto repeat(10, auto);
      grid-row-gap: 15px;
      grid-template-areas:
        'partnership-title'
        'partnership-description'
        'status-label'
        'status'
        'initiative-type-label'
        'initiative-type'
        'funding-amount-label'
        'funding-amount'
        'funding-source-label'
        'funding-source'
        'partners-list-label'
        'partners-list';

      padding: 20px 3% 20px 3%;
    `};

  }
`;

const PartnershipTitle = styled.h3`
  grid-area: partnership-title;

  margin-top: 0;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 22px;
    margin: 0;
  }
`;

const PartnershipLabel = styled.span`
  grid-area: ${({gridArea}) => gridArea};
  align-self: ${({ align }) => align || 'center'};

  font-size: 16px;
  font-weight: 600;
  margin-top: ${({marginTop}) => marginTop};

  @media (max-width: 460px) {
    justify-self: center;

    font-size: 20px;
    font-weight: 600;
    padding-top: 10px;
  }
`;

const PartnershipText = styled.span`
  grid-area: ${({gridArea}) => gridArea};
  place-self: center;

  font-size: 16px;
`;

const PartnershipDescription = styled.div`
  grid-area: partnership-description;
  align-self: center;

  border-left: 1px solid black;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 7.26%;

  @media (max-width: 1025px) {
    border-left: 0;
    padding: 0;
  }

  @media (max-width: 460px) {
    border-left: 0;
    font-size: 12px;
    padding: 0;
  }
`;

const PartnershipTagList = styled.div`
  grid-area: partners-list;
  display: grid;
  align-self: center;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fill, 50px);
  align-items: center;

  border-radius: 0 0 5px 5px;
  padding-right: 2.5%;
  width: 100%;
`;

const PartnershipTag = styled.div`
  grid-area: ${({gridArea}) => gridArea};
  place-self: center;

  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  height: 34px;
  line-height: 34.5px;
  margin: 10px 5px;
  padding: 0 10px;
  text-align: center;

  @media (max-width: 460px) {
    font-size: 14px;
    margin: 0 5px;
  }
`;

// Hook for keeping track of window size
// Source: https://usehooks.com/useWindowSize/
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const PartnershipBody = ({ isOpen }) => {
  const windowSize = useWindowSize();
  let partnersListLabelMarginTop = '10px';
  let statusView;

  if (!isOpen) {
    return <PartnershipBodyGrid isOpen={isOpen} />;
  }

  if (windowSize.width <= 460) {
    partnersListLabelMarginTop = 0;
    statusView =
      <>
        <PartnershipLabel gridArea="status-label">Initiative Status:</PartnershipLabel>
        <PartnershipText gridArea="status">In Progress</PartnershipText>
      </>
  } else {
    statusView = <PartnershipStatusStepper activeStep={2} />;
  }

  return (
    <PartnershipBodyGrid isOpen={isOpen}>
      <PartnershipTitle gridarea="partnership-title">Acre State Sustainable Development Program - PDSA Phase II</PartnershipTitle>
      <PartnershipLabel gridArea="initiative-type-label">Initiative Type:</PartnershipLabel>
      <PartnershipTag gridArea="initiative-type">Protected Areas</PartnershipTag>
      <PartnershipLabel gridArea="funding-amount-label">Funding Raised:</PartnershipLabel>
      <PartnershipText gridArea="funding-amount">$34,456,732</PartnershipText>
      <PartnershipLabel gridArea="funding-source-label">Funding Source:</PartnershipLabel>
      <PartnershipText gridArea="funding-source">European Union</PartnershipText>
      <PartnershipLabel align="start" gridArea="partners-list-label" marginTop={partnersListLabelMarginTop}>Partners:</PartnershipLabel>
      <PartnershipTagList>
        <PartnershipTag>IBAM</PartnershipTag>
        <PartnershipTag>SEMA</PartnershipTag>
        <PartnershipTag>INPE</PartnershipTag>
        <PartnershipTag>ABCD</PartnershipTag>
        <PartnershipTag>EFGHIJK</PartnershipTag>
      </PartnershipTagList>
      <PartnershipDescription>
        <p style={{'margin': 0}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mauris quam. In
          semper dolor vel nunc porttitor ornare. Maecenas hendrerit urna euismod, sodales orci eget,
          pulvinar risus. Proin lacinia tincidunt ante, quis feugiat ipsum accumsan id. Sed facilisis
          urna nisl, in ultricies turpis fermentum eget. Nullam turpis libero, venenatis eu urna eget,
          dapibus varius mauris. Integer vehicula porttitor vestibulum. Nunc bibendum tortor id
          egestas commodo.
        </p>
        <p style={{'margin-bottom': 0}}>
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam pharetra eleifend felis. Praesent commodo risus nec aliquet maximus. Mauris bibendum
          volutpat dui. Pellentesque at cursus arcu. Pellentesque consequat aliquet faucibus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </PartnershipDescription>
      {statusView}
    </PartnershipBodyGrid>
  );
};

export default PartnershipBody;
