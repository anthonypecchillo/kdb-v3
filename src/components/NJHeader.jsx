/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJMap from './NJMap';
import NJNav from './NJNav';

const navLinkList = [
  {
    linkText: 'Overview',
    urlText: 'overview',
  },
  {
    linkText: 'Forests & Land Use',
    urlText: 'forests-and-land-use',
  },
  {
    linkText: 'Governance',
    urlText: 'governance',
  },
  {
    linkText: 'Partnerships',
    urlText: 'partnerships',
  },
  {
    linkText: 'Report Cards',
    urlText: 'report-cards',
  },
];

const NJHeaderGrid = styled.div`
  display: grid;
  ${'' /* grid-template-columns: 50px 3fr minmax(330px, 1fr) 50px; */}
  grid-template-columns: 50px 3fr 330px 50px;
  grid-template-rows: 1fr 3fr 30px 30px;

  background-image: ${({ bannerURL }) => `url(${bannerURL})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top left;
  background-attachment: fixed;

  height: 460px;
  position: sticky;
  overflow: hidden;
  top: -326px;
  width: 100%;
  z-index: 997;
`;

const NJHeaderTitle = styled.h1`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: center;
  justify-self: start;

  color: white;
  margin: 0;
`;

const NJHeaderFlags = styled.div`
  grid-column: 3/4;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  align-self: center;
  justify-self: end;

  color: white;
`;

const NJFlag = styled.div`
  place-self: center;

  background: ${({ flagURL }) => `no-repeat center/100% url(${flagURL})`};
  height: 50px;
  width: 72px;
`;

const NJMapContainer = styled.div`
  grid-column: 3/4;
  grid-row: 2/4;

  background-color: ${({ opacity }) => `rgba(255, 255, 255, ${opacity})`};
  border: ${({ opacity }) => `3px solid rgba(62, 82, 45, ${opacity})`};
  box-shadow: ${({ shadowOpacity }) => `6px 18px 18px rgba(0, 0, 0, ${shadowOpacity}), -6px 18px 18px rgba(0, 0, 0, ${shadowOpacity})`};
  height: 100%;
  opacity: ${({ opacity }) => opacity};
  overflow: hidden;
  width: 100%;

  @media (max-width: 990px) {
    display: none;
  }
`;

class NJHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageYOffset: null,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset <= 340) {
      this.setState({
        pageYOffset: window.pageYOffset,
      });
    }
  }

  render() {
    const { flags, fullName, headerImageURL, jurisdictionType, nationName, stateName } = this.props;
    const { pageYOffset } = this.state;

    // Linear Fade Formula: MaxOpacity + startYPositionForFade - window.pageYOffset / endYPositionForFade
    // const mapContainerOpacity = 1 + 0.29 - Math.pow(pageYOffset / 340, 2);

    // Cubic Fade Formula: MaxOpacity + startYPositionForFade - (window.pageYOffset / endYPositionForFade)^3
    // const mapContainerOpacity = 1 + 0.02 - Math.pow(pageYOffset / 340, 3);
    const mapContainerOpacity = 1 - Math.pow(pageYOffset / 340, 3);

    // Multiply this one by 3 so that container shadow fades at 3x rate as container itself
    const mapContainerShadowOpacity = 0.08 - Math.pow(pageYOffset / 340, 3) * 0.08 * 3;

    return(
      <NJHeaderGrid bannerURL={headerImageURL}>
        <NJHeaderTitle>{fullName}</NJHeaderTitle>
        <NJHeaderFlags>
          <NJFlag flagURL={flags[0]} />
          <NJFlag flagURL={flags[1]} />
        </NJHeaderFlags>
        <NJNav navLinkList={navLinkList} />
        <NJMapContainer opacity={mapContainerOpacity} shadowOpacity={mapContainerShadowOpacity}>
          <NJMap jurisdictionType={jurisdictionType} nationName={nationName} stateName={stateName} />
        </NJMapContainer>
      </NJHeaderGrid>
    );
  }
};

export default NJHeader;
