/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import OldGovernanceLawPolicyStrategy from './OldGovernanceLawPolicyStrategy';
import OldGovernanceSafeguards from './OldGovernanceSafeguards';
import OldGovernanceZoningSpatialPlanning from './OldGovernanceZoningSpatialPlanning';
import Tabs from './Tabs';

const OLD_GOVERNANCE_DATA_TAB_LABELS = ['Safeguards', 'Zoning & Spatial Planning', 'Laws, Policy, Strategy'];

const OldGovernanceDataGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 37px calc(100% - 5% - 15px);

  height: 100%;
  width: 100%;
`;

const OldGovernanceDataTitle = styled.h2`
  margin: 0;
  margin-top: 10px;
  text-align: center;
`;

class OldGovernanceData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Safeguards',
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
      case 'Safeguards':
        view = <OldGovernanceSafeguards jurisdiction={jurisdiction} language={language} nation={nation} />;
        break;
      case 'Zoning & Spatial Planning':
        view = <OldGovernanceZoningSpatialPlanning jurisdiction={jurisdiction} language={language} nation={nation} />;
        break;
      case 'Laws, Policy, Strategy':
        view = <OldGovernanceLawPolicyStrategy jurisdiction={jurisdiction} language={language} nation={nation} />;
        break;
      default:
        view = null;
    }

    return (
      <OldGovernanceDataGrid>
        <OldGovernanceDataTitle>Old Governance Data</OldGovernanceDataTitle>
        <Tabs
          activeTab={activeTab}
          handleTabClick={this.handleTabClick}
          tabLabels={OLD_GOVERNANCE_DATA_TAB_LABELS}
        />
        {view}
      </OldGovernanceDataGrid>
    );
  }
}

export default OldGovernanceData;
