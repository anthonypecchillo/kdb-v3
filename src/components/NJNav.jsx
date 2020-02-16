/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const NJNavGrid = styled.div`
  grid-column: 1/5;
  grid-row: 3/5;

  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, auto) minmax(10px, 5fr)`};
  grid-column-gap: 10px;
  place-items: center;

  background-color: white;
  border-bottom: 3px solid #3e522d;
  height: 100%;
  padding: 0 25px;
  width: 100%;
`;

const NJNavLink = styled(NavLink)`
  font-weight: 600;
  height: 100%
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

  /* @media (max-width: 1025px) {
    display: none;
  } */
`;

// TODO: Give NJNavLinks a uniqueID for key prop
const NJNav = ({ navLinkList }) => {
  const { path } = useRouteMatch();
  const linkActiveStyle = { textDecoration: 'underline solid black' };

  return (
    <NJNavGrid length={navLinkList.length}>
      {navLinkList.map((navLink, index) => (
        <NJNavLink activeStyle={linkActiveStyle} key={index} to={`${path}/${navLink.urlText}`}>
          {navLink.linkText}
        </NJNavLink>
      ))}
      <div />
    </NJNavGrid>
  );
};

export default NJNav;
