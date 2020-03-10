/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const NJMapContainerStyled = styled.div`
  grid-area: header-map-container;
  grid-row: 2/4;

  background-color: ${({ opacity }) => `rgba(255, 255, 255, ${opacity})`};
  border: ${({ opacity }) => `3px solid rgba(62, 82, 45, ${opacity})`};
  box-shadow: ${({ shadowOpacity }) => `6px 18px 18px rgba(0, 0, 0, ${shadowOpacity}), -6px 18px 18px rgba(0, 0, 0, ${shadowOpacity})`};
  height: 100%;
  opacity: ${({ opacity }) => opacity};
  overflow: hidden;
  width: 100%;

  @media (max-width: 1025px) {
    display: none;
  }
`;

class NJMapContainer extends React.Component {
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
    // Commented this if out because, though it prevents unnecessary re-renders when NJHeader is
    // no longer visible, if the user scrolls down really fast/hard, the opacity of NJMapContainer
    // doesn't update properly. Probably because there was only one scroll event, though the page
    // continues to scroll downward after the intial "force" by the user's finger. /shrug

    // if (window.pageYOffset <= 340) {
      this.setState({
        pageYOffset: window.pageYOffset,
      });
    // }
  }

  render() {
    const { pageYOffset } = this.state;

    // Linear Fade Formula: MaxOpacity + startYPositionForFade - window.pageYOffset / endYPositionForFade
    // const mapContainerOpacity = 1 + 0.29 - Math.pow(pageYOffset / 340, 2);

    // Cubic Fade Formula: MaxOpacity + startYPositionForFade - (window.pageYOffset / endYPositionForFade)^3
    // const mapContainerOpacity = 1 + 0.02 - Math.pow(pageYOffset / 340, 3);
    const mapContainerOpacity = 1 - Math.pow(pageYOffset / 340, 3);

    // Multiply this one by 3 so that container shadow fades at 3x rate as container itself
    const mapContainerShadowOpacity = 0.08 - Math.pow(pageYOffset / 340, 3) * 0.08 * 3;

    return (
      <NJMapContainerStyled opacity={mapContainerOpacity} shadowOpacity={mapContainerShadowOpacity}>
        {this.props.children}
      </NJMapContainerStyled>
    );
  }
};

export default NJMapContainer;
