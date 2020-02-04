/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import InstitutionalFrameworksList from './InstitutionalFrameworksList';
import LawList from './LawList';
import ProgramsOverview from './ProgramsOverview';
import Tabs from './Tabs';

const PROGRAMS_TAB_LABELS = ['Overview', 'Laws & Regulations', 'Institutional Frameworks'];

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 37px calc(100% - 5% - 15px);

  height: 100%;
  width: 100%;
`;

const ProgramsTitle = styled.h2`
  margin: 0;
  margin-top: 10px;
  text-align: center;
`;

class Programs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Overview',
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    const { activeTab } = this.state;
    const { jurisdiction, language, nation } = this.props;
    let view;

    switch (activeTab) {
      case 'Overview':
        view = <ProgramsOverview />;
        break;
      case 'Laws & Regulations':
        view = <LawList jurisdiction={jurisdiction} language={language} nation={nation} />;
        break;
      case 'Institutional Frameworks':
        view = <InstitutionalFrameworksList />;
        break;
      default:
        view = null;
    }

    return (
      <ProgramsGrid>
        <ProgramsTitle>Programs</ProgramsTitle>
        <Tabs
          activeTab={activeTab}
          handleTabClick={this.handleTabClick}
          tabLabels={PROGRAMS_TAB_LABELS}
        />
        {view}
      </ProgramsGrid>
    );
  }
}

export default Programs;
