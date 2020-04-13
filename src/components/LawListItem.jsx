/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import LawBody from './LawBody';

const LawListItemGrid = styled.div`
  display: grid;
  grid-template-rows: 45px auto 45px;

  border-radius: 5px;
  ${'' /* box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08); */}
  box-shadow: 4px 8px 6px rgba(0, 0, 0, 0.08), -4px 8px 6px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  margin-bottom: ${({ index, isOpen, lastIndex }) =>
    isOpen && index !== lastIndex ? '45px' : '30px'};
  margin-top: ${({ index, isOpen }) => (isOpen && index !== 0 ? '45px' : '30px')};
  width: 95%;

  @media (max-width: 765px) {
    font-size: 14px;
  }

  @media (max-width: 460px) {
    font-size: 12px;
  }
`;

const LawHeader = styled.div`
  display: grid;
  grid-template-columns: 8fr minmax(200px, 3fr) minmax(40px, 1fr);
  justify-items: center;

  background-color: #3e522d;
  border-radius: 5px 5px 0 0;
  color: #ffffff;
  width: 100%;

  @media (max-width: 460px) {
    grid-template-columns: 8fr minmax(140px, 3fr) minmax(36px, 1fr);
  }
`;

const LawTitle = styled.span`
  align-self: center;
  justify-self: start;

  margin-left: 2.5%;

  @media (max-width: 460px) {
    margin-left: 11.85%;
  }
`;

const LawDate = styled.span`
  align-self: center;
  justify-self: end;
`;

const Icon = styled.i`
  place-self: center;
`;

const LawTagList = styled.div`
  display: flex;
  align-items: center;

  background-color: white;
  border-radius: 0 0 5px 5px;
  direction: rtl;
  height: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;  /* For Momentum Scroll on Mobile */
  padding-right: 2.5%;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 460px) {
    margin-right: 4.45%;
    margin-left: 4.45%;
    padding-right: 0;
  }
`;

const LawTag = styled.div`
  flex: 0 0 auto;
  /* border: 1px solid black;
  border-radius: 10px; */
  direction: ltr;
  height: 70%;
  line-height: 31px;
  padding-left: 10px;
  padding-right: ${({ isFirstItem }) => !isFirstItem && '10px'};
  text-align: center;

  @media (max-width: 460px) {
    padding-left: 5px;
    padding-right: ${({ isFirstItem }) => !isFirstItem && '5px'};
  }
`;

class LawListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.handleChevronClick = this.handleChevronClick.bind(this);
  }

  handleChevronClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { index, law, lawListLength } = this.props;
    const { isOpen } = this.state;
    const chevronClass = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
    const lawNumber = law.lawNumber || '';
    // Source for date formatting regex (need this for Safari smh)
    // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
    const pubDate = law.pubDate ? format(new Date(law.pubDate.replace(/-/g, "/")), 'MMMM do, yyyy') : 'Date unavailable';
    const { coatOfArmsUrl } = law.region;

    const citations = law.citations.length ? law.citations : [];

    // TODO: Chevron Icon stopped flipping after FA Pro was added to project...fix this.
    return (
      <LawListItemGrid index={index} isOpen={isOpen} lastIndex={lawListLength - 1}>
        <LawHeader onClick={this.handleChevronClick}>
          <LawTitle>{`${law.lawTranslate.lawType} ${lawNumber}`}</LawTitle>
          <LawDate>{pubDate}</LawDate>
          <Icon className={chevronClass} />
        </LawHeader>
        <LawBody
          coatOfArmsUrl={coatOfArmsUrl}
          isOpen={isOpen}
          summary={law.lawTranslate.summary}
          title={law.lawTranslate.name}
          citations={citations}
        />
        <LawTagList isOpen={isOpen}>
          {law.lawTags.map((lawTag, index) => (
            <LawTag isFirstItem={!index} key={index}>{lawTag.lawTagTranslate.tagName}</LawTag>
          ))}
        </LawTagList>
      </LawListItemGrid>
    );
  }
}

export default LawListItem;
