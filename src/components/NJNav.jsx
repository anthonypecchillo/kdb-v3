/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React, { useEffect, useState } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const NJNavGrid = styled.div`
  grid-area: header-nav;

  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, auto) minmax(10px, 5fr)`};
  grid-column-gap: 10px;
  place-items: center;
  justify-content: space-evenly;

  background-color: white;
  border-bottom: 3px solid #3e522d;
  height: 100%;
  padding: 0 25px;
  width: 100%;

  @media (max-width: 1025px) {
    grid-template-columns: ${({ length }) => `repeat(${length}, auto)`};
    justify-content: space-evenly;
    padding: 0;
  }
`;

const NJNavLink = styled(NavLink)`
  font-weight: 600;
  height: 57px;
  line-height: 60px;
  padding: 0 5px;
  text-align: center;
  text-decoration: none;
  transition: color 0.4s ease 0.05s;
  width: 100%;

  &:active {
    text-decoration: ${({ underline }) => underline && 'underline solid black'};
  }

  &:hover {
    color: #582399;
    cursor: pointer;
  }

  &:link {
    color: black;
  }

  &:visited {
    color: black;
  }

  @media (max-width: 765px) {
    line-height: 70px;
  }
`;

const NavIconContainer = styled.div`
  height: 100%;
`;

const NavIcon = styled.i`

`;

// Hook for keeping track of window size
// Source: https://usehooks.com/useWindowSize/
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

// TODO: Give NJNavLinks a uniqueID for key prop
const NJNav = ({ navLinkList }) => {
  const { path } = useRouteMatch();
  const windowSize = useWindowSize();

  const linkActiveStyle = { textDecoration: 'underline solid black' };
  if (windowSize.width <= 765) {
    linkActiveStyle.color= '#582399';
  }

  return (
    <NJNavGrid length={navLinkList.length}>
      {navLinkList.map((navLink, index) => {
        const navLinkView = windowSize.width > 765 ? navLink.linkText : <NavIconContainer><NavIcon className={`fal fa-${navLink.faIconClass} fa-2x`} /></NavIconContainer>;
        return (
          <NJNavLink activeStyle={linkActiveStyle} key={index} to={`${path}/${navLink.urlText}`}>
            <>
              {navLinkView}
            </>
          </NJNavLink>
        );
      })}
      <div />
    </NJNavGrid>
  );
};

export default NJNav;
