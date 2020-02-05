/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Jumbotron from './Jumbotron';
import Map from './Map';
import ScrollToTopOnMount from './ScrollToTopOnMount';
import SellingPoints from './SellingPoints';

// One fragment is (was?) 90.6px!
const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: 8fr 8fr 9fr;

  height: 2367.5px;
  padding-top: 75px;
`;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.mapRef = React.createRef();
  }

  scrollToMap = () => {
    const landingTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;
    const mapTop = ReactDOM.findDOMNode(this.mapRef.current).getBoundingClientRect().top;
    const navBarHeight = 85;

    window.scrollTo({
      top: mapTop - landingTop - navBarHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { content, toggleModal } = this.props
    const { jumbotron, map, sellingPoints } = content;

    return (
      <>
        <ScrollToTopOnMount />
        <LandingGrid>
          <Jumbotron
            content={jumbotron}
            scrollToMap={this.scrollToMap}
            toggleModal={toggleModal}
          />
          <Map ref={this.mapRef} content={map} toggleModal={toggleModal} />
          <SellingPoints content={sellingPoints} />
        </LandingGrid>
      </>
    );
  }
};

export default Landing;
