/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LanguageSelect from './LanguageSelect';
import MemberStates from './MemberStates';

const HamburgerMenuBox = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  margin-top: 75px;
  background-color: white;
  z-index: 999;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
`;

const HamburgerMenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 75px 25px repeat(3, 60px) 75px 300px;
  place-items: center;

  height: 100%;
  padding: 25px 5.5% 0 5.5%;
  width: 100%;
`;

const SearchBar = styled.div`
  place-self: center;

  height: 50%;
  min-width: 252px;
  text-align: center;
  width: 100%;

  @media (min-width: 1026px) {
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
  outline: none;
  padding: 5px;
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

const NavLink = styled.div`
  border-bottom: 1px solid #3e522d;
  border-top: ${({ isFirstNavLink }) => isFirstNavLink && '1px solid #3e522d'} ;
  font-weight: 600;
  height: 100%
  line-height: 75px;
  padding: 0 5px;
  text-align: left;
  transition: color 0.4s ease 0.05s;
  width: 100%;

  &:hover {
    color: #582399;
    cursor: pointer;
  }

  @media (min-width: 1026px) {
    display: none;
  }
`;

const HamburgerMenuFade = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 475px;
  background: rgba(0, 0, 0, 0.6);
  height: 2153px;
  position: absolute;
  z-index: 998;
`;

const HamburgerMenu = ({ content, toggleHamburgerMenu, toggleLanguage }) => {
  const { NAVIGATE, ABOUT, CONTACT, SEARCH_PLACEHOLDER } = content;
  return (
    <div>
      <HamburgerMenuBox>
        <HamburgerMenuGrid>
          <SearchBar>
            <SearchBarInput placeholder={SEARCH_PLACEHOLDER} type="text" />
            <SearchBarButton>
              <i className="fa fa-search" />
            </SearchBarButton>
          </SearchBar>

          <div />
          <NavLink isFirstNavLink>{NAVIGATE}</NavLink>
          <NavLink>{ABOUT}</NavLink>
          <NavLink>{CONTACT}</NavLink>

          <LanguageSelect toggleLanguage={toggleLanguage} />

          <MemberStates toggleHamburgerMenu={toggleHamburgerMenu} />

        </HamburgerMenuGrid>
      </HamburgerMenuBox>
      <HamburgerMenuFade onClick={toggleHamburgerMenu} />
    </div>
  );
};

export default HamburgerMenu;
