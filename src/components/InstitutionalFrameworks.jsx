/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import InstitutionalFrameworkList from './InstitutionalFrameworkList';
import Loading from './Loading';
import Tabs from './Tabs';

const INSTITUTIONAL_FRAMEWORKS_TAB_LABELS = ['All', 'National', 'State'];

const GET_JURISDICTION_INSTITUTIONAL_FRAMEWORKS = gql`
  query getJurisdictionLaws($jurisdictionName: String!, $languageCode: String!, $nationName: String!) {
    jurisdictionByName(jurisdictionName: $jurisdictionName, nationName: $nationName) {
      id
      institutionalFrameworks {
        id
        nameShort
        politicalScope
        url
        institutionalFrameworkTranslate(code: $languageCode) {
          languageCode
          nameLong
          description
        }
      }
    }
  }
`;

const InstitutionalFrameworksGrid = styled.div`
  display: grid;
  grid-template-rows: 29px calc(100% - 5% - 15px);

  border-top: 3px solid #3e522d;
  margin: 10px 0 15px 0;
  ${'' /* padding-top: 8px; */}
  overflow-y: scroll;
  width: 100%;
`;

class InstitutionalFrameworks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'All',
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

    return (
      <InstitutionalFrameworksGrid>
        <Query
          query={GET_JURISDICTION_INSTITUTIONAL_FRAMEWORKS}
          variables={{ jurisdictionName: jurisdictionName, languageCode: language, nationName: nationName }}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>ERROR</p>;

            const { institutionalFrameworks } = data.jurisdictionByName;

            const groupedInstitutionalFrameworks = { national: [], state: [] };
            institutionalFrameworks.forEach(framework => {
              groupedInstitutionalFrameworks[framework.politicalScope.toLowerCase()].push(framework);
            });

            return (
              <>
                <Tabs
                  activeTab={activeTab}
                  handleTabClick={this.handleTabClick}
                  tabLabels={INSTITUTIONAL_FRAMEWORKS_TAB_LABELS}
                />
                <InstitutionalFrameworkList
                  activeList={activeTab}
                  frameworks={groupedInstitutionalFrameworks}
                />
              </>
            );
          }}
        </Query>
      </InstitutionalFrameworksGrid>
    );
  }
}


export default InstitutionalFrameworks;
