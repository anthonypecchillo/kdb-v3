/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import WorldMap from './WorldMap';

const MapGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 100px;
  align-items: center;
  justify-items: center;

  background-color: white;
`;

const MapTitle = styled.h1`
  margin-bottom: 0;
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

  @media (max-width: 1090px) {
    font-size: 16px;
  }
`;

const MapContainer = styled.div`
  justify-self: left;

  height: auto;
  max-height: 80vh;
  width: 100vw;
  max-width: 1680px;
`;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { content, toggleModal } = this.props;
    const { TITLE, SUB_TITLE, NAVIGATE_FULL_DATABASE } = content;

    return (
      <MapGrid>
        <MapTitle>{TITLE}</MapTitle>
        <MapSubTitle>{SUB_TITLE}</MapSubTitle>
        <MapContainer>
          <WorldMap />
        </MapContainer>
        <MapButton onClick={toggleModal}>
          <MapButtonText>{NAVIGATE_FULL_DATABASE}</MapButtonText>
        </MapButton>
      </MapGrid>
    );
  }
};

export default Map;
