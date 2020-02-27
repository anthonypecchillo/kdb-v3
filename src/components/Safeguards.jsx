/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import OldGovernanceSafeguards from './OldGovernanceSafeguards';
import OldGovernanceZoningSpatialPlanning from './OldGovernanceZoningSpatialPlanning';
import Tabs from './Tabs';

const SAFEGUARDS_TAB_LABELS = ['Overview', 'Spatial Planning'];

const SafeguardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 37px calc(100% - 5% - 15px);

  height: 100%;
  width: 100%;
`;

const SafeguardsTitle = styled.h2`
  margin: 0;
  margin-top: 10px;
  text-align: center;
`;

class Safeguards extends React.Component {
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
    const { jurisdictionName, language, nationName } = this.props;
    const { activeTab } = this.state;
    let view;

    switch (activeTab) {
      case 'Overview':
        view = <OldGovernanceSafeguards jurisdictionName={jurisdictionName} language={language} nationName={nationName} />;
        break;
      case 'Spatial Planning':
        view = <OldGovernanceZoningSpatialPlanning jurisdictionName={jurisdictionName} language={language} nationName={nationName} />;
        break;
      default:
        view = null;
    }

    return (
      <SafeguardsGrid>
        <SafeguardsTitle>Safeguards</SafeguardsTitle>
        <Tabs
          activeTab={activeTab}
          handleTabClick={this.handleTabClick}
          tabLabels={SAFEGUARDS_TAB_LABELS}
        />
        {view}
      </SafeguardsGrid>
    );
  }
}

export default Safeguards;
