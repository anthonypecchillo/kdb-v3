/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LottieControl from './LottieControl';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import Tile from './Tile';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  background-color: #e5e5e5;
  height: 800px;
  padding: 50px 50px;
  padding-top: 125px;
`;

const Contact = ({ content }) => {
  // const { jumbotron, map, sellingPoints } = content;
  return (
    <>
      <ScrollToTopOnMount />
      <ContactGrid>
        <Tile height="600px" maxWidth="1000px">
          <LottieControl />
          <center>
            <h1>Under Construction!</h1>
          </center>
        </Tile>
      </ContactGrid>
    </>
  );
};

export default Contact;
