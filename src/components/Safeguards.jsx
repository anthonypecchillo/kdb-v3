/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import BenefitsSharing from './BenefitsSharing';
import RightsAndTenure from './RightsAndTenure';
import Tabs from './Tabs';
import TransparencyAndParticipation from './TransparencyAndParticipation';

const SAFEGUARDS_TAB_LABELS = ['Rights & Tenure', 'Transparency & Partic.', 'Benefits Sharing'];

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
      activeTab: 'Rights & Tenure',
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
    let view;

    switch (activeTab) {
      case 'Rights & Tenure':
        view = <RightsAndTenure />;
        break;
      case 'Transparency & Partic.':
        view = <TransparencyAndParticipation />;
        break;
      case 'Benefits Sharing':
        view = <BenefitsSharing />;
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
