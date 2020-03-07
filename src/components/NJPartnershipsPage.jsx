/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PartnershipList from './PartnershipList';
import Tile from './Tile';

const PartnershipsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 37px 1000px;

  height: 100%;
  width: 100%;

  @media (max-width: 1025px) {
    margin: 0;
    width: 100%;
  }
`;

const PartnershipsTitle = styled.h1`
  margin-top: 0px;
  text-align: center;
`;

const PartnershipsOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  justify-content: space-between;

  height: 100%;
  width: 100%;
`;

const Icon = styled.i`
  place-self: center;

  color: #3e522d;
  transition: color 0.6s ease 0s;

  &:hover {
    color: #582399;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  height: 100%;
  min-width: 280px;
  width: 100%;

  @media (max-width: 1025px) {
    display: none;
  }
`;


const SearchBarInput = styled.input`
  border: 3px solid #3e522d;
  border-radius: 5px 0 0 5px;
  border-right: none;
  color: #9dbfaf;
  height: 100%;
  min-width: 208px;
  padding: 5px;
  outline: none;
  width: 84%;

  &:focus {
    color: #3e522d;
  }
`;

const SearchBarButton = styled.button`
  background: #3e522d;
  border: 1px solid #3e522d;
  border-radius: 0 5px 5px 0;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 100%;
  text-align: center;
  width: 40px;
`;


const NJPartnershipsPage = () => (
  <Tile margin="0 auto" height="1097" maxWidth="1280px">
    <PartnershipsGrid>
      <PartnershipsTitle>Partnerships</PartnershipsTitle>
      <PartnershipsOptionsGrid>
        <span><Icon className="fa fa-filter fa-2x" />Filter</span>
        <SearchBar>
          <SearchBarInput placeholder="Search" type="text" />
          <SearchBarButton>
            <i className="fa fa-search" />
          </SearchBarButton>
        </SearchBar>
      </PartnershipsOptionsGrid>
      <PartnershipList />
    </PartnershipsGrid>
  </Tile>
);

export default NJPartnershipsPage;
