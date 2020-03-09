/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import NJLand from './NJLand';
import NJVegetation2 from './NJVegetation2';
import NJCO2Emissions from './NJCO2Emissions';
import NJDeforestation from './NJDeforestation';
import Tile from './Tile';

const ForestAndLandUseGrid = styled.div`
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 25px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px auto 800px 800px;
  grid-template-areas:
    'land land land .'
    'deforestation deforestation deforestation deforestation'
    'CO2 CO2 CO2 .'
    'vegetation vegetation . .';

  height: 100%;

  @media (max-width: 765px) {
    grid-template-areas:
      'land land land land'
      'deforestation deforestation deforestation deforestation'
      'CO2 CO2 CO2 CO2'
      'vegetation vegetation vegetation vegetation';
  }

  @media (max-width: 460px) {
    grid-template-columns: 1fr;
    grid-template-rows: 800px auto 800px;
    grid-template-areas:
      'vegetation'
      'deforestation'
      'CO2';
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

const NJForestAndLandUsePage = ({ nationName, jurisdictionName, language }) => {
  const windowSize = useWindowSize();

  const NJLandView = windowSize.width > 460 ? (
    <Tile gridArea="land">
      <NJLand jurisdictionName={jurisdictionName} language={language} nationName={nationName}/>
    </Tile>
  ) : null;

  return (
    <ForestAndLandUseGrid>
      {NJLandView}
      <Tile gridArea="deforestation">
        <NJDeforestation jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
      <Tile gridArea="CO2">
        <NJCO2Emissions jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
      <Tile gridArea="vegetation">
        <NJVegetation2 jurisdictionName={jurisdictionName} language={language} nationName={nationName} />
      </Tile>
    </ForestAndLandUseGrid>
  );
};

export default NJForestAndLandUsePage;
