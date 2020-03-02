/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const JUMBOTRON_IMAGE_URL = 'https://general-site-assets.s3-us-west-1.amazonaws.com/images/LandingBannerCropped.jpg';

const JumbotronGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  background-attachment: fixed;
  background-image: url(${JUMBOTRON_IMAGE_URL});
  background-position: top left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700.8px;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 460px) {
    height: 640.8px;
  }
`;

const JumbotronMiniGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(460px, 11fr) 9fr;
  grid-template-rows: 1fr 2.5fr 2.5fr 1fr;

  background-color: rgba(255, 255, 255, 0.6);
  padding: 85px 0 85px 0;

  @media (max-width: 1025px) {
    grid-template-columns: 1fr 1fr;

    padding-right: 30px;
  }

  @media (max-width: 765px) {
    grid-template-columns: 8fr 1fr;

    padding-top: 120px;
    padding-left: 60px;
  }

  @media (max-width: 460px) {
    grid-template-columns: 99% 1%;

    padding-left: 0;
    padding-right: 0;
    padding-top: 121px;
  }
`;

const JumbotronBrandText = styled.div`
  align-self: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  padding-left: 30px;
  padding-top: 10px;
  width: 100%;

  @media (max-width: 460px) {
    padding-left: 0;
    text-align: center;
  }
`;

const JumbotronTitle = styled.div`
  font-family: 'helvetica';
  font-size: 75px;
  font-weight: 900;
  height: 100%
  letter-spacing: 3px;
  padding-left: 30px;
  padding-top: 5px;
  transition: color 0.4s ease 0.05s;
  text-align: left;
  text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
  width: 100%;

  &:hover {
    color: #582399;
    cursor: default;
  }

  @media (max-width: 460px) {
    font-size: 60px;
    padding-left: 0;
    text-align: center;
  }
`;

const JumbotronDescription = styled.div`
  font-size: 16px;
  font-weight: normal;
  height: 100%
  letter-spacing: 1px;
  line-height: 1.8em;
  padding-left: 30px;
  padding-top: 15px;
  text-align: left;
  width: 100%;

  @media (max-width: 460px) {
    place-self: center;

    padding-left: 0;
    text-align: center;
  }
`;

const JumbotronButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 30px 5fr 1fr 5fr;
  place-items: center;
  place-self: center;

  height: 100%;
  width: 100%;

  @media (max-width: 460px) {
    grid-template-columns: 5px 5fr 1fr 5fr;

    padding-left: 0;
    text-align: center;
    width: 90%;
  }
`;

const JumbotronButton = styled.div`
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-radius: 0;
  border: solid black 2px;
  cursor: pointer !important;
  display: flex;
  font-family: 'Avenir Next';
  height: 60%;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  width: 100%;

  &:hover {
    background-color: #582399;
    border: solid #582399 2px;
    color: white;
  }
`;

const JumbotronButtonText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const Jumbotron = ({ content, scrollToMap, toggleModal }) => {
  const { DESCRIPTION, NAVIGATE_DB, GLOBAL_SUMMARY } = content;
  return (
    <JumbotronGrid>
      <div />
      <JumbotronMiniGrid>
        <JumbotronBrandText>
          GOVERNORS' CLIMATE &
          <br />
          FORESTS TASK FORCE
        </JumbotronBrandText>
        <div />
        <JumbotronTitle>
          Knowledge
          <br />
          Database
        </JumbotronTitle>
        <div />
        <JumbotronDescription>{DESCRIPTION}</JumbotronDescription>
        <div />
        <JumbotronButtonGrid>
          <div />
          <JumbotronButton onClick={toggleModal}>
            <JumbotronButtonText>{NAVIGATE_DB}</JumbotronButtonText>
          </JumbotronButton>
          <div />
          <JumbotronButton onClick={scrollToMap}>
            <JumbotronButtonText>{GLOBAL_SUMMARY}</JumbotronButtonText>
          </JumbotronButton>
        </JumbotronButtonGrid>
      </JumbotronMiniGrid>
    </JumbotronGrid>
  );
};

export default Jumbotron;
