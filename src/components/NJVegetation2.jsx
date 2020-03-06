/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import DoughnutChart from './DoughnutChart';
import Loading from './Loading';
import PieChart from './PieChart';

const GET_JURISDICTION_LAND = gql`
  query getJurisdictionLand($nationName: String!, $jurisdictionName: String!, $languageCode: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
      id
      name
      landArea {
        amount
        year
        citation_id
      }
      forestArea {
        amount
        units
        year
        citation_id
      }
      forestManagement {
        protected
        unprotected
      }
      vegetationComponents {
        amount
        percent
        vegetationCategory {
          vegetationCategoryTranslate(code: $languageCode) {
            name
          }
        }
      }
    }
  }
`;

const VegetationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr 1fr 1fr;
  ${'' /* justify-items: center; */}

  width: 100%;

`;

const VegetationTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

class NJVegetation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: 0,
        // height: 0,
      },
    };
  }

  componentDidMount() {
    const width = this.container.offsetWidth;
    // const height = this.container.offsetHeight;

    this.setState({
      dimensions: {
        width: width,
        // height: height,
      },
    });
  }

  render() {
    const { jurisdictionName, language, nationName } = this.props;
    const { width } = this.state.dimensions;

    return (
      <VegetationGrid ref={el => (this.container = el)}>
        <Query query={GET_JURISDICTION_LAND} variables={{ nationName: nationName, jurisdictionName: jurisdictionName, languageCode: language }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading/>;
            if (error) return <p>ERROR</p>;

            const { forestArea, forestManagement, landArea, vegetationComponents } = data.jurisdictionByName;

            const landDistributionData = [
              {
                label: 'Forest',
                value: Math.round(forestArea.amount),
                // color: '#ff69b4',
              },
              {
                label: 'Non-Forest',
                value: Math.round(landArea.amount - forestArea.amount),
              },
            ];
            const landDistributionDataSourceConfig = {
              caption: 'Land Distribution',
              centerLabel: '$label:<br/><br/>$value',
              defaultCenterLabel: `Total:<br/><br/>${Math.round(landArea.amount).toLocaleString()} km²`,
              numberSuffix: ' km²',
            };

            let forestManagementData;
            let forestManagementTotal;
            if (forestManagement) {
              forestManagementData = [
                {
                  label: 'Protected',
                  value: Math.round(forestManagement.protected),
                },
                {
                  label: 'Unprotected',
                  value: Math.round(forestManagement.unprotected),
                },
              ];
              forestManagementTotal = forestManagementData.reduce((acc, { value }) => acc + value, 0);
            } else {
              forestManagementData = [
                { label: 'Protected', value: null },
                { label: 'Unprotected', value: null },
              ];
              forestManagementTotal = '';
            }

            const forestManagementDataSourceConfig = {
              caption: 'Forest Management',
              centerLabel: '$label:<br/><br/>$value',
              numberSuffix: ' km²',
              defaultCenterLabel: `Total:<br/><br/>${Math.round(forestManagementTotal).toLocaleString()} km²`,
            };

            const vegetationData = vegetationComponents.map(component => {
              return { label: component.vegetationCategory.vegetationCategoryTranslate.name, value: component.amount };
            });

            const vegetationDataSourceConfig = {
              caption: 'Major Vegetation Types',
              numberSuffix: ' km²',
              xAxisName: 'Vegetation Type',
              yAxisName: 'Land Area (km²)',
              showLabels: '0',
              showLegend: '0'
            };

            return (
              <>
                <VegetationTitle>Land (Alternate/Mobile)</VegetationTitle>
                <DoughnutChart data={landDistributionData} dataSourceConfig={landDistributionDataSourceConfig} justify="center" percentOfTotalColumns={1} maxWidth={350} />
                <PieChart data={vegetationData} dataSourceConfig={vegetationDataSourceConfig} justify="center" percentOfTotalColumns={1} maxWidth={370} />
                <DoughnutChart data={forestManagementData} dataSourceConfig={forestManagementDataSourceConfig} justify="center" percentOfTotalColumns={1} maxWidth={350} />
              </>
            );
          }}
        </Query>
      </VegetationGrid>
    );
  }
};

export default NJVegetation;
