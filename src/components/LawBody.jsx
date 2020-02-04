/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const LawBodyGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-columns: 0.788fr 0.212fr;
  grid-template-rows: 0.265fr 0.265fr minmax(0.469fr, auto);

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

  background: ${({ coatOfArmsUrl }) => `no-repeat center/100% url(${coatOfArmsUrl})`};
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

const Icon2 = styled.a`
  align-self: end;
  justify-self: right;
`;

const LawBody = ({ coatOfArmsUrl, isOpen, summary, title, url }) => {
  // TODO: Conditional Here! If summary is an array, dynamically render list.
  //                         Else, render as paragraph tag.
  if (!isOpen) {
    return <LawBodyGrid isOpen={isOpen} />;
  }

  summary = summary || 'Summary Unavailable';

  return (
    <LawBodyGrid isOpen={isOpen}>
      <LawBodyTitle>{title}</LawBodyTitle>
      <LawBodyLogo coatOfArmsUrl={coatOfArmsUrl} />
      <LawBodySummary>
        <LawBodySummaryTitle>Summary:</LawBodySummaryTitle>
        <LawBodySummaryText>{summary}</LawBodySummaryText>
      </LawBodySummary>
      <Icon2
        className="far fa-file-pdf fa-4x"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      />
    </LawBodyGrid>
  );
};

export default LawBody;
