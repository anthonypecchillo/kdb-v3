/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';

import styled, { css } from 'styled-components';

const TabStyled = styled.div`
  color: #a0a0a0;
  font-size: 14px;
  font-weight: 700;
  ${({ isActive }) =>
    isActive &&
    css`
      color: #4a4a4a;
      border-bottom: solid 3px #3e522d;
    `};
  ${'' /* text-transform: uppercase; */}
  transition: color 0.4s ease 0.05s;
  white-space: nowrap;

  &:hover {
    color: #582399;
    cursor: pointer;
  }
`;

const Tab = ({ isActive, label, handleTabClick }) => (
  <TabStyled isActive={isActive} onClick={() => handleTabClick(label)}>
    {label}
  </TabStyled>
);

export default Tab;
