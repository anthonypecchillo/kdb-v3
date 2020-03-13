/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import styled, { css } from 'styled-components';

const LawBodyGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: auto auto;
  ${({ isOpen }) => isOpen && css`
    grid-template-rows: auto auto auto 64px;
    grid-template-areas:
      'law-body-title law-body-logo'
      'law-body-summary law-body-logo'
      'law-body-summary law-body-logo'
      'law-body-summary law-body-citations';

    min-height: 250px;
    padding: 25px 3.63% 15px 2.18%;
  `};

  background-color: #e5e5e5;
  width: 100%;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    ${({ isOpen }) => isOpen && css`
      grid-template-rows: repeat(3, auto);
      grid-template-areas:
        'law-body-title'
        'law-body-summary'
        'law-body-citations';
        ${'' /* 'law-body-tag-list'; */}
    `};
  }

  @media (max-width: 460px) {
    ${({ isOpen }) => isOpen && css`
      padding: 15px 4.68%;
    `};
  }
`;

const LawBodyTitle = styled.div`
  grid-area: law-body-title;
  align-self: center;

  font-size: 20px;

  @media (max-width: 765px) {
    text-align: center;
  }

  @media (max-width: 460px) {
    font-size: 16px;
  }
`;

const LawBodyLogo = styled.div`
  grid-area: law-body-logo;
  justify-self: right;

  background: ${({ coatOfArmsUrl }) => `no-repeat center/100% url(${coatOfArmsUrl})`};
  height: 112.5px;
  width: 112.5px;

  @media (max-width: 765px) {
    display: none;
  }
`;

const LawBodySummary = styled.div`
  grid-area: law-body-summary;

  height: 100%;
`;

const LawBodySummaryTitle = styled.div`
  margin-bottom: 10px;

  @media (max-width: 765px) {
    font-size: 16px;
  }

  @media (max-width: 460px) {
    font-size: 14px;
  }
`;

const LawBodySummaryText = styled.div`
  font-size: 14px;

  @media (max-width: 460px) {
    font-size: 12px;
  }
`;

const LawCitationList = styled.div`
  grid-area: law-body-citations;

  align: bottom;
  direction: rtl;
  width: 100%;
`;

const Icon2 = styled.i`
  align-self: end;
  justify-self: right;
  margin-right: 5px;
`;

const LawBody = ({ citations, coatOfArmsUrl, isOpen, summary, title }) => {
  if (!isOpen) {
    return <LawBodyGrid isOpen={isOpen} />;
  }

  summary = ReactHtmlParser(summary) || 'Summary Unavailable';

  return (
    <LawBodyGrid isOpen={isOpen}>
      <LawBodyTitle>{title}</LawBodyTitle>
      <LawBodyLogo coatOfArmsUrl={coatOfArmsUrl} />
      <LawBodySummary>
        <LawBodySummaryTitle>Summary:</LawBodySummaryTitle>
        <LawBodySummaryText>{summary}</LawBodySummaryText>
      </LawBodySummary>
      <LawCitationList>
        {citations.map(citation => {
          const iconSize = citations.length < 3 ? '4x' : '1x';
          return (
            <a key={citation.id} href={citation.url} rel="noopener noreferrer" target="_blank">
              <Icon2
                className={`far fa-file-pdf fa-${iconSize}`}
                key={citation.id}
              />
            </a>
          )
        })}
      </LawCitationList>
    </LawBodyGrid>
  );
};

export default LawBody;
