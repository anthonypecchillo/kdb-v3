/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './Footer';
import HamburgerMenu from './HamburgerMenu';
import Landing from './Landing';
import NJPage from './NJPage';
import Modal from './Modal';
import NavBar from './NavBar';

import content from '../const/multi-lingual';
import jurisdictions from '../const/jurisdictions';

const ROUTES = jurisdictions.filter(jurisdiction => jurisdiction);

const AppContainer = styled.div`
  height: 100%;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      language: 'en',
      showModal: false,
      showHamburgerMenu: false,
    };

    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
    this.toggleLanguage = this.toggleLanguage.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    const { showHamburgerMenu, showModal } = this.state;

    // history.goBack();
    if (!showHamburgerMenu) {
      document.body.style.overflow = showModal ? 'unset' : 'hidden';

      this.setState({
        showModal: !showModal,
      });
    }
  }

  toggleHamburgerMenu() {
    const { showHamburgerMenu, showModal } = this.state;

    // history.goBack();
    if (!showModal) {
      document.body.style.overflow = showHamburgerMenu ? 'unset' : 'hidden';

      this.setState({
        showHamburgerMenu: !showHamburgerMenu,
      });
    }
  }

  toggleLanguage(event) {
    this.setState({
      language: event.target.value,
    });
  }

  render() {
    const { language, showHamburgerMenu, showModal } = this.state;
    const { footer, navBar, landingPage } = content[language];

    const modalBox = showModal ? <Modal toggleModal={this.toggleModal} /> : null;
    const hamburgerMenu = showHamburgerMenu ? (
      <HamburgerMenu
        content={navBar}
        toggleHamburgerMenu={this.toggleHamburgerMenu}
        toggleLanguage={this.toggleLanguage}
      />
    ) : null;

    const stateRoutes = ROUTES.filter(({ JURISDICTION_TYPE }) => JURISDICTION_TYPE === 'state');
    const nationRoutes = ROUTES.filter(({ JURISDICTION_TYPE }) => JURISDICTION_TYPE === 'nation');

    return (
      <AppContainer>
        <NavBar
          content={navBar}
          toggleHamburgerMenu={this.toggleHamburgerMenu}
          toggleLanguage={this.toggleLanguage}
          toggleModal={this.toggleModal}
        />
        {modalBox}
        {hamburgerMenu}
        <Switch>
          <Route exact path="/">
            <Landing content={landingPage} toggleModal={this.toggleModal} />
          </Route>
          {stateRoutes.map(
            ({
              FLAGS,
              FULL_NAME,
              HEADER_IMAGE_URL,
              JURISDICTION_TYPE,
              NATION_NAME,
              JURISDICTION_NAME,
              URL,
            }) => (
              <Route path={URL} key={FULL_NAME}>
                <NJPage
                  flags={FLAGS}
                  fullName={FULL_NAME}
                  headerImageURL={HEADER_IMAGE_URL}
                  jurisdictionType={JURISDICTION_TYPE}
                  nationName={NATION_NAME}
                  jurisdictionName={JURISDICTION_NAME}
                />
              </Route>
            )
          )}
          {nationRoutes.map(
            ({
              FLAGS,
              FULL_NAME,
              HEADER_IMAGE_URL,
              JURISDICTION_TYPE,
              NATION_NAME,
              JURISDICTION_NAME,
              URL,
            }) => (
              <Route path={URL} key={FULL_NAME}>
                <NJPage
                  flags={FLAGS}
                  fullName={FULL_NAME}
                  headerImageURL={HEADER_IMAGE_URL}
                  jurisdictionType={JURISDICTION_TYPE}
                  nationName={NATION_NAME}
                  jurisdictionName={JURISDICTION_NAME}
                />
              </Route>
            )
          )}
        </Switch>
        <Footer content={footer} />
      </AppContainer>
    );
  }
}

export default App;
