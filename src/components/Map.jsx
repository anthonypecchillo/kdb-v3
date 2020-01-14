/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import WorldMap from './WorldMap';

const MapGrid = styled.div`
  display: grid;
  grid-template-rows: 17fr 3fr;
  align-items: center;
  justify-items: center;

  background-color: white;
`;

const MapTitle = styled.h1`
  margin: 0;
  text-align: center;
`;

const MapSubTitle = styled.h3`
  margin: 0;
  text-align: center;
`;

const MapButton = styled.div`
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer !important;
  display: flex;
  height: 60%;
  min-width: 260px;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  width: 25%;

  &:hover {
    background-color: #3e522d;
    border: solid #3e522d 2px;
    color: white;
  }
`;

const MapButtonText = styled.span`
  font-size: 18px;
  font-weight: 700;
  padding: 0 25px;
`;

const MapContainer = styled.div`
  height: 662.5px;
  width: 100vw;
`;

const Map = ({ content, toggleModal }) => {
  const { TITLE, SUB_TITLE, NAVIGATE_FULL_DATABASE } = content;
  return (
    <MapGrid>
      <MapContainer>
        <MapTitle>{TITLE}</MapTitle>
        <MapSubTitle>{SUB_TITLE}</MapSubTitle>
        <WorldMap />
      </MapContainer>
      <MapButton onClick={toggleModal}>
        <MapButtonText>{NAVIGATE_FULL_DATABASE}</MapButtonText>
      </MapButton>
    </MapGrid>
  );
};

export default Map;
