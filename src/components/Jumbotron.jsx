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

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 460px) {
    ${'' /* height: 640.8px; */}
  }
`;

const JumbotronMiniGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(480px, 11fr) 9fr;
  ${'' /* grid-template-rows: 1fr 2.5fr 2.5fr 1fr; */}
  grid-template-rows: 75.83px 189.56px 189.56px 75.83px;

  ${'' /* background-color: rgba(255, 255, 255, 0.6); */}
  ${'' /* background: linear-gradient(90deg, rgba(128,118,123,0) 0%, rgba(255,255,255,0.6) 100%); */}
  background: linear-gradient(90deg, rgba(128,118,123,0) 15%, rgba(255,255,255,0.45) 100%);
  ${'' /* background: linear-gradient(90deg, rgba(128,118,123,0) 20%, rgba(255,255,255,0.6) 100%); */}
  ${'' /* background: linear-gradient(90deg, rgba(128,118,123,0) 50%, rgba(255,255,255,0.6) 100%); */}
  color: white;
  padding: 85px 0 85px 0;

  @media (max-width: 1025px) {
    grid-template-columns: 480px 0px;

    padding-right: 30px;
  }

  @media (max-width: 960px) {
    grid-template-columns: minmax(480px, 11fr) 9fr;

    background: rgba(255, 255, 255, 0);
    background: linear-gradient(90deg, rgba(128,118,123,0) 0%, rgba(255,255,255,0.2) 100%);
    ${'' /* padding-top: 120px; */}
    padding-left: 60px;
  }

  @media (max-width: 765px) {
    grid-template-columns: 100% 0px;

    padding-left: 0;
    padding-right: 0;
    ${'' /* padding-top: 121px; */}
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

  @media (max-width: 765px) {
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

  @media (max-width: 765px) {
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

  @media (max-width: 765px) {
    place-self: center;

    padding-left: 0;
    text-align: center;
    width: 90%;
  }
`;

const JumbotronButtonGrid = styled.div`
  display: grid;
  grid-template-columns: 30px 5fr 1fr 5fr;
  place-items: center;
  place-self: center;

  height: 100%;
  width: 100%;

  @media (max-width: 765px) {
    grid-template-columns: 5px 5fr 1fr 5fr;

    padding-left: 0;
    text-align: center;
    width: 90%;
  }
`;

const JumbotronButton = styled.div`
  align-items: center;
  justify-content: center;

  background-color: white;
  border-radius: 0;
  ${'' /* border: solid black 2px; */}
  color: black;
  cursor: pointer !important;
  display: flex;
  font-family: 'Avenir Next';
  height: 60%;
  transition: background 0.6s ease 0s,color 0.4s ease 0s;
  width: 100%;

  &:hover {
    ${'' /* background-color: #582399;
    border: solid #582399 2px;
    color: white; */}
    ${'' /* background-color: transparent; */}
    /* background: rgb(229,229,229); */
    /* background: linear-gradient(90deg, rgba(128,118,123,0.2) 0%, rgba(255,255,255,1) 100%); */
    ${'' /* background: radial-gradient(circle, rgba(79,77,93,1) 20%, rgba(128,118,123,1) 100%); */}
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(79,77,93,.5) 140%);
    /* transition: background 0.6s ease-out 0s, color 0.4s ease-out 0s; */
    ${'' /* border: solid transparent 0px; */}
    ${'' /* color: white; */}
    color: black;
    background-position: 0;
  }
`;

const JumbotronButtonText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

const Blur = styled.div`
  backdrop-filter: Blur(1px);
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
        <JumbotronDescription>
          <Blur>{DESCRIPTION}</Blur>
        </JumbotronDescription>
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
