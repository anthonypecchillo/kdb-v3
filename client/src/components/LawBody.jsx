/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import GCFTFLogo from '../../dist/assets/logos/GCFTF.png';

const LawBodyGrid = styled.div`
  display: grid;
  grid-template-columns: .788fr .212fr;
  grid-template-rows: .265fr .265fr minmax(.469fr, auto);
  grid-row-gap: 10px;

  background-color: #e5e5e5;
  min-height: ${({ isOpen }) => isOpen && '250px'};
  padding: ${({ isOpen }) => isOpen && '2.73% 3.63% 2.72% 2.18%'};
  width: 100%;
`;

const LawBodyTitle = styled.div`
  align-self: center;

  font-size: 20px;
`;

const LawBodyLogo = styled.div`
  grid-column: 2/3;
  grid-row: 1/4;
  justify-self: right;

  background: ${({ logo }) => `no-repeat center/100% url(${logo})`};
  height: 112.5px;
  width: 112.5px;
`;

const LawBodySummary = styled.div`
  grid-column: 1/2;
  grid-row: 2/5;
`;

const LawBodySummaryTitle = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const LawBodySummaryText = styled.div`
  font-size: 14px;
`;

const Icon2 = styled.i`
  align-self: end;
  justify-self: right;
`;

const LawBody = ({ isOpen }) => {
  // TODO: Conditional Here! If summary is an array, dynamically render list.
  //                         Else, render as paragraph tag.
  if (!isOpen) {
    return (
      <LawBodyGrid isOpen={isOpen} />
    );
  }
  return (
    <LawBodyGrid isOpen={isOpen}>
      <LawBodyTitle>General Environmental Law of Brazil</LawBodyTitle>
      <LawBodyLogo logo={GCFTFLogo} />
      <LawBodySummary>
        <LawBodySummaryTitle>Summary:</LawBodySummaryTitle>
        <LawBodySummaryText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in mauris quam. In semper dolor vel nunc porttitor ornare. Maecenas hendrerit urna euismod, sodales orci eget, pulvinar risus. Proin lacinia tincidunt ante, quis feugiat ipsum accumsan id. Sed facilisis urna nisl, in ultricies turpis fermentum eget. Nullam turpis libero, venenatis eu urna eget, dapibus varius mauris. Integer vehicula porttitor vestibulum. Nunc bibendum tortor id egestas commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam pharetra eleifend felis. Praesent commodo risus nec aliquet maximus. Mauris bibendum volutpat dui. Pellentesque at cursus arcu. Pellentesque consequat aliquet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</LawBodySummaryText>
      </LawBodySummary>
      <Icon2 className="far fa-file-pdf fa-4x" />
    </LawBodyGrid>
  );
};

export default LawBody;