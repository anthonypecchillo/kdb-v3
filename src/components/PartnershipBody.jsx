/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
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
  ${'' /* overflow-y: scroll; */}

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

  @media (max-width: 765px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
  }
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
    margin: 5px 5px;
  }
`;

const truncateString = function(str, maxLength = 17, ending = ' ...') {
  if (str.length > maxLength) {
    let result = '';
    const words = str.split(' ');

    let index = 0;
    while (
      words[index] &&
      // result.length + ending < maxLength &&
      (result + words[index]).length < maxLength - ending.length
    ) {
      result += ` ${words[index]}`;
      index += 1;
    }

    return result + ending;
    // return str.substring(0, maxLength - ending.length) + ending;
  }

  return str;
};

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

const PartnershipBody = ({
  description,
  initiativeStatus,
  initiativeTypes,
  fundingAmount,
  fundingCurrency,
  isOpen,
  partnerOrganizations,
  title,
}) => {

  const windowSize = useWindowSize();
  let partnersListLabelMarginTop = '10px';
  let statusView;

  if (!isOpen) {
    return <PartnershipBodyGrid isOpen={isOpen} />;
  }

  const initiativeTypeText =
    initiativeTypes && initiativeTypes.length > 0
      ? initiativeTypes[0].initiativeTypeTranslate.name
      : 'No data to display.';

  let fundingAmountText;
  if (!fundingAmount || !fundingCurrency) {
    fundingAmountText = 'No data to display.';
  } else {
    fundingAmountText = `${fundingAmount.toLocaleString()} ${fundingCurrency}`;
  }

  let initiativeStatusText;
  let initiativeStatusStep;
  if (!initiativeStatus) {
    initiativeStatusText = 'No data to display.';
    initiativeStatusStep = -1;
  } else {
    initiativeStatusText = initiativeStatus.initiativeStatusTranslate.name;
    initiativeStatusStep = initiativeStatus.id - 1;
  }

  const partnerOrganizationsText = partnerOrganizations.map(organization => {
    if (organization.nameShort) {
      return organization.nameShort;
    }
    return organization.organizationTranslate.nameLong;
  });

  if (windowSize.width <= 460) {
    partnersListLabelMarginTop = 0;
    statusView = (
      <>
        <PartnershipLabel gridArea="status-label">Initiative Status:</PartnershipLabel>
        <PartnershipText gridArea="status">{initiativeStatusText}</PartnershipText>
      </>
    );
  } else {
    statusView = <PartnershipStatusStepper activeStep={initiativeStatusStep} />;
  }

  const descriptionHTML = ReactHtmlParser(description);

  return (
    <PartnershipBodyGrid isOpen={isOpen}>
      <PartnershipTitle gridarea="partnership-title">{title}</PartnershipTitle>
      <PartnershipLabel gridArea="initiative-type-label">Initiative Type:</PartnershipLabel>
      <PartnershipTag gridArea="initiative-type">
        {initiativeTypeText}
      </PartnershipTag>
      <PartnershipLabel gridArea="funding-amount-label">Funding Raised:</PartnershipLabel>
      <PartnershipText gridArea="funding-amount">{fundingAmountText}</PartnershipText>
      <PartnershipLabel gridArea="funding-source-label">Funding Source:</PartnershipLabel>
      <PartnershipText gridArea="funding-source">[Work In Progress]</PartnershipText>
      <PartnershipLabel
        align="start"
        gridArea="partners-list-label"
        marginTop={partnersListLabelMarginTop}
      >
        Partners:
      </PartnershipLabel>
      <PartnershipTagList>
        {partnerOrganizationsText.map(partnerOrganizationText => (
          <PartnershipTag>{truncateString(partnerOrganizationText)}</PartnershipTag>
        ))}
      </PartnershipTagList>
      <PartnershipDescription>{descriptionHTML}</PartnershipDescription>
      {statusView}
    </PartnershipBodyGrid>
  );
};

export default PartnershipBody;
