/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Jumbotron from './Jumbotron';
import Map from './Map';
import SellingPoints from './SellingPoints';

// One fragment is (was?) 90.6px!
const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: 8fr 8fr 9fr;

  height: 2367.5px;
  padding-top: 75px;
`;

const Landing = ({ content, toggleModal }) => {
  const { jumbotron, map, sellingPoints } = content;
  return (
    <LandingGrid>
      <Jumbotron content={jumbotron} />
      <Map content={map} toggleModal={toggleModal} />
      <SellingPoints content={sellingPoints} />
    </LandingGrid>
  );
};

export default Landing;
