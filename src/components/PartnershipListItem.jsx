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
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: ${({ index, isOpen, lastIndex }) =>
    isOpen && index !== lastIndex ? '45px' : '30px'};
  margin-top: ${({ index, isOpen }) => (isOpen && index !== 0 ? '45px' : '30px')};
  width: 95%;
`;

const PartnershipHeader = styled.div`
  display: grid;
  grid-template-columns: 11fr minmax(40px, 1fr);
  justify-items: center;

  background-color: #3e522d;
  border-radius: 5px 5px 0 0;
  color: #ffffff;
  width: 100%;
`;

const PartnershipTitle = styled.span`
  align-self: center;
  justify-self: start;

  margin-left: 2.5%;
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
  /* -webkit-overflow-scrolling: touch;   For Momentum Scroll on Mobile */
  padding-right: 2.5%;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PartnershipTag = styled.div`
  flex: 0 0 auto;
  /* border: 1px solid black; */
  /* border-radius: 10px; */
  height: 70%;
  line-height: 31px; /* 0.70 (height) times grid row height (48px)...plus a little? */
  margin: 0 10px;
  padding: 0 10px;
  text-align: center;
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
    const { index, partnershipListLength } = this.props;
    const { isOpen } = this.state;
    const chevronClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    return (
      <PartnershipListItemGrid index={index} isOpen={isOpen} lastIndex={partnershipListLength - 1}>
        <PartnershipHeader onClick={this.handleChevronClick}>
          <PartnershipTitle>
            Acre State Sustainable Development Program - PDSA Phase II
          </PartnershipTitle>
          <Icon className={chevronClass} />
        </PartnershipHeader>

        <PartnershipBody isOpen={isOpen} />

        <PartnershipTagList isOpen={isOpen}>
          <PartnershipTag>Mato Grasso</PartnershipTag>
          <PartnershipTag>Amazonas</PartnershipTag>
          <PartnershipTag>Acre</PartnershipTag>
        </PartnershipTagList>
      </PartnershipListItemGrid>
    );
  }
}

export default PartnershipListItem;
