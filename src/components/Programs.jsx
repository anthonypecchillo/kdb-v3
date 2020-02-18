/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import InstitutionalFrameworks from './InstitutionalFrameworks';
import LawList from './LawList';
import NationalInstitutions from './NationalInstitutions';
import NationalPoliciesAndPlans from './NationalPoliciesAndPlans';
import ProgramsOverview from './ProgramsOverview';
import Tabs from './Tabs';

const JURISDICTION_PROGRAMS_TAB_LABELS = ['Overview', 'Laws & Regulations', 'Institutional Frameworks'];
const NATION_PROGRAMS_TAB_LABELS = ['Laws & Regulations', 'Policies & Plans', 'Institutions'];

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
      activeTab: this.props.jurisdictionType === 'state' ? 'Overview' : 'Laws & Regulations',
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
    const { jurisdiction, jurisdictionType, language, nation } = this.props;
    let view;
    let tabLabels;

    if (jurisdictionType === 'nation') {
      tabLabels = NATION_PROGRAMS_TAB_LABELS;
      switch (activeTab) {
        case 'Laws & Regulations':
          view = <LawList jurisdiction={jurisdiction} language={language} nation={nation} />;
          break;
        case 'Policies & Plans':
          view = <NationalPoliciesAndPlans jurisdiction={jurisdiction} language={language} nation={nation} />;
          break;
        case 'Institutions':
          view = <NationalInstitutions jurisdiction={jurisdiction} language={language} nation={nation} />;
          break;
        default:
          view = null;
      }
    }
    if (jurisdictionType === 'state') {
      tabLabels = JURISDICTION_PROGRAMS_TAB_LABELS;
      switch (activeTab) {
        case 'Overview':
          view = <ProgramsOverview />;
          break;
        case 'Laws & Regulations':
          view = <LawList jurisdiction={jurisdiction} language={language} nation={nation} />;
          break;
        case 'Institutional Frameworks':
          view = <InstitutionalFrameworks jurisdiction={jurisdiction} language={language} nation={nation} />;
          break;
        default:
          view = null;
      }
    }

    return (
      <ProgramsGrid>
        <ProgramsTitle>Programs</ProgramsTitle>
        <Tabs
          activeTab={activeTab}
          handleTabClick={this.handleTabClick}
          tabLabels={tabLabels}
        />
        {view}
      </ProgramsGrid>
    );
  }
}

export default Programs;
