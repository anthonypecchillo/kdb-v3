/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import styled from 'styled-components';

const Tile = styled.div`
  grid-area: ${({ gridArea }) => gridArea || null };
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};

  background-color: white;
  box-shadow: ${({ boxShadow }) => boxShadow || '6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08)'};
  height: ${({ height }) => height || '100%'};
  margin: ${({ margin }) => margin || '0'};
  max-width: ${({ maxWidth }) => maxWidth || null};
  padding: 20px 2.5%;
  width: ${({ width }) => width || '100%'};
`;

export default Tile;
