/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LanguageSelect from './LanguageSelect';

import GCFTFLogo from '../assets/logos/GCFTF.png';

const NavBarGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-areas: 'logo navtitle navlink1 navlink2 navlink3 languageselect searchbar';
  grid-template-columns: 1fr minmax(210px, 4.5fr) minmax(75px, 1.5fr) minmax(auto, auto) auto 100px minmax(280px, 3fr);
  align-items: center;

  background-color: white;
  border-bottom: 3px solid #3e522d;
  height: 75px;
  min-width: 320px;
  overflow: hidden;
  position: fixed;
  width: 100%;
  z-index: 999;

  @media (max-width: 990px) {
    grid-template-columns: 1fr 10fr 1fr;
    grid-template-areas: 'logo navtitle hamburger';
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  grid-area: logo;
  place-self: center;

  background: no-repeat center/100% url(${GCFTFLogo});
  height: 75px;
  margin-left: 10px;
  width: 75px;

  @media (max-width: 990px) {
    margin-left: 38.25px;
  }

  @media (max-width: 765px) {
    margin-left: 5vw;
  }
`;

const NavTitle = styled.div`
  grid-area: navtitle;

  font-size: 20px;
  font-weight: 700;
  height: 100%
  line-height: 75px;
  text-align: left;
  transition: color 0.4s ease 0.05s;
  width: 100%;

  &:hover {
    color: #582399;
    cursor: pointer;
  }

  @media (max-width: 990px) {
    text-align: center;
  }
  
  @media (max-width: 391px) {
    line-height: 20px;
    padding-top: 20px;
  }
`;

const NavLink = styled.div`
  grid-area: ${({ gridArea }) => gridArea};

  font-weight: 600;
  height: 100%
  line-height: 75px;
  padding: 0 5px;
  text-align: right;
  transition: color 0.4s ease 0.05s;
  width: 100%;

  &:hover {
    color: #582399;
    cursor: pointer;
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  grid-area: searchbar;
  place-self: center;

  height: 50%;
  min-width: 252px;
  width: 90%;

  @media (max-width: 990px) {
    display: none;
  }
`;

const SearchBarInput = styled.input`
  border: 3px solid #3e522d;
  border-radius: 5px 0 0 5px;
  border-right: none;
  color: #9dbfaf;
  height: 100%;
  min-width: 208px;
  padding: 5px;
  outline: none;
  width: 84%;

  &:focus {
    color: #3e522d;
  }
`;

const SearchBarButton = styled.button`
  background: #3e522d;
  border: 1px solid #3e522d;
  border-radius: 0 5px 5px 0;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  height: 37.775px;
  text-align: center;
  width: 40px;
`;

const HamburgerIcon = styled.i`
  grid-area: hamburger
  place-self: center;

  font-size: 36px;
  margin-right: 5vw;
  text-align: left;
  transition: color 0.4s ease 0.05s;
  width: auto;

  &:hover {
    color: #582399;
    cursor: pointer;
  }

  @media (min-width: 991px) {
    display: none;
  }

  @media (max-width: 990px) {
    margin-right: 38.25px;
  }

  @media (max-width: 765px) {
    margin-right: 5vw
  }
`;

const NavBar = ({ content, toggleHamburgerMenu, toggleLanguage, toggleModal }) => {
  const { NAVIGATE, ABOUT, CONTACT, SEARCH_PLACEHOLDER } = content;
  return (
    <NavBarGrid>
      <Link to="/">
        <Logo />
      </Link>
      <NavTitle onClick={toggleModal}>Knowledge Database</NavTitle>
      <NavLink gridArea="navlink1">{ABOUT}</NavLink>
      <NavLink gridArea="navlink2">{NAVIGATE}</NavLink>
      <NavLink gridArea="navlink3">{CONTACT}</NavLink>
      <LanguageSelect toggleLanguage={toggleLanguage} />
      <SearchBar>
        <SearchBarInput placeholder={SEARCH_PLACEHOLDER} type="text" />
        <SearchBarButton>
          <i className="fa fa-search" />
        </SearchBarButton>
      </SearchBar>
      <HamburgerIcon className="fas fa-bars" onClick={toggleHamburgerMenu} />
    </NavBarGrid>
  );
};

export default NavBar;
