/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PartnershipBody from './PartnershipBody';

const PartnershipListItemGrid = styled.div`
  display: grid;
  grid-template-rows: 45px auto 45px;

  border-radius: 5px;
  ${'' /* box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08); */}
  box-shadow: 4px 8px 6px rgba(0, 0, 0, 0.08), -4px 8px 6px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: ${({ index, isOpen, lastIndex }) =>
    isOpen && index !== lastIndex ? '45px' : '30px'};
  margin-top: ${({ index, isOpen }) => (isOpen && index !== 0 ? '45px' : '30px')};
  width: 95%;

  @media (max-width: 765px) {
    font-size: 14px;
  }

  @media (max-width: 460px) {
    font-size: 12px;
  }
`;

const PartnershipHeader = styled.div`
  display: grid;
  grid-template-columns: 11fr minmax(40px, 1fr);
  justify-items: center;

  background-color: #3e522d;
  border-radius: 5px 5px 0 0;
  color: #ffffff;
  width: 100%;

  @media (max-width: 460px) {
    grid-template-columns: 11fr minmax(36px, 1fr);
  }
`;

const PartnershipTitle = styled.span`
  align-self: center;
  justify-self: start;

  margin-left: 2.5%;

  @media (max-width: 460px) {
    margin-left: 5%;
    ${'' /* text-align: center; */}
  }
`;

const Icon = styled.i`
  place-self: center;
`;

const PartnershipTagList = styled.div`
  display: flex;
  align-items: center;

  background-color: white;
  border-radius: 0 0 5px 5px;
  direction: rtl;
  height: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-right: 2.5%;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 460px) {
    margin-right: 4.45%;
    margin-left: 4.45%;
    padding-right: 0;
  }
`;

const PartnershipTag = styled.div`
  flex: 0 0 auto;
  /* border: 1px solid black; */
  /* border-radius: 10px; */
  height: 70%;
  line-height: 31px;
  padding-left: 10px;
  padding-right: ${({ isFirstItem }) => !isFirstItem && '10px'};
  text-align: center;

  @media (max-width: 460px) {
    padding-left: 5px;
    padding-right: ${({ isFirstItem }) => !isFirstItem && '5px'};
  }
`;

class PartnershipListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleChevronClick = this.handleChevronClick.bind(this);
  }

  handleChevronClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { index, partnership, partnershipListLength } = this.props;
    const { isOpen } = this.state;
    const chevronClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';

    // TODO: Chevron Icon stopped flipping after FA Pro was added to project...fix this.
    return (
      <PartnershipListItemGrid index={index} isOpen={isOpen} lastIndex={partnershipListLength - 1}>
        <PartnershipHeader onClick={this.handleChevronClick}>
          <PartnershipTitle>{partnership.partnershipTranslate.name}</PartnershipTitle>
          <Icon className={chevronClass} />
        </PartnershipHeader>

        <PartnershipBody
          description={partnership.partnershipTranslate.description}
          fundingAmount={partnership.fundingAmount}
          fundingCurrency={partnership.fundingCurrency}
          initiativeStatus={partnership.initiativeStatus}
          initiativeTypes={partnership.initiativeTypes}
          isOpen={isOpen}
          partnerOrganizations={partnership.organizations}
          title={partnership.partnershipTranslate.name}
        />

        {/* <PartnershipTagList isOpen={isOpen}>
          {partnership.partnershipTags.map((partnershipTag, index) => (
            <PartnershipTag
              isFirstItem={!index}
              key={index}>{partnershipTag.partnershipTagTranslate.tagName}
            </PartnershipTag>
          ))}
        </PartnershipTagList> */}
        <PartnershipTagList isOpen={isOpen}>
          {partnership.partnershipJurisdictions.map((partnershipJurisdiction, index) => (
            <PartnershipTag isFirstItem={!index} key={index}>
              {partnershipJurisdiction.name}
            </PartnershipTag>
          ))}
        </PartnershipTagList>
      </PartnershipListItemGrid>
    );
  }
}

export default PartnershipListItem;
