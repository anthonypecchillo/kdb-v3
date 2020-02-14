/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import DoughnutChart from './DoughnutChart';
import Loading from './Loading';
import PieChart from './PieChart';

const GET_JURISDICTION_DEMOGRAPHICS = gql`
  query getJurisdictionDemographics($nationName: String!, $jurisdictionName: String!, $languageCode: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
      id
      name
      population {
        amount
        year
        citation_id
      }
      nation {
        population {
          amount
          year
          citation_id
        }
      }
      region {
        urbanVsRural {
          urbanPopulation
          ruralPopulation
          citation_id
        }
        socialGroupComponents {
          amount
          percent
          socialGroupCategory {
            socialGroupCategoryTranslate(code: $languageCode) {
              name
            }
          }
        }
      }
    }
  }
`;

const DemographicsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 1fr 0.6fr 5fr 6.25fr 0.75fr;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

const DemographicsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const DemographicsTotalTitle = styled.div`
  align-self: end;

  font-weight: 600;
  text-align: center;
`;

const DemographicsTotalValue = styled.h1`
  align-self: end;
  margin: 0;
`;

const DemographicsTotalNationalPercent = styled.div`
  align-self: start;
  font-size: 12px;
`;

const DemographicsCitation = styled.div`
  align-self: center;
  justify-self: end;

  font-size: 14px;
  padding: 0 1.25%;
`;

class NJDemographics extends React.Component {
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
    const { jurisdiction, language, nation } = this.props;
    const { width } = this.state.dimensions;

    return (
      <DemographicsGrid ref={el => (this.container = el)}>
        <Query query={GET_JURISDICTION_DEMOGRAPHICS} variables={{ nationName: nation, jurisdictionName: jurisdiction, languageCode: language }}>
          {({ loading, error, data }) => {
            if (loading) return <Loading/>;
            if (error) return <p>ERROR</p>;

            const { nation, population, region } = data.jurisdictionByName;
            const { urbanVsRural, socialGroupComponents } = region;
            const { urbanPopulation, ruralPopulation } = urbanVsRural;

            let percentageOfNationalPopulation;
            let PERCENTAGE_OF_NATIONAL_POPULATION;
            if (population && population.amount && nation.population && nation.population.amount) {
              percentageOfNationalPopulation = (population.amount / nation.population.amount) * 100
              PERCENTAGE_OF_NATIONAL_POPULATION = `${percentageOfNationalPopulation.toLocaleString()}% of National Population`;
            } else {
              PERCENTAGE_OF_NATIONAL_POPULATION = 'Data Unavailable';
            }

            const urbanVsRuralData = [
              { label: 'Urban', value: Math.round((urbanPopulation * 0.01) * population.amount) },
              { label: 'Rural', value: Math.round((ruralPopulation * 0.01) * population.amount) },
            ];
            const urbanVsRuralDataTotal = urbanVsRuralData.reduce((acc, { value }) => acc + value, 0).toLocaleString();
            const urbanVsRuralDataSourceConfig = {
              caption: 'Population Distribution',
              centerLabel: '$label:<br/><br/>$value',
              defaultCenterLabel: `Total:<br/><br/>${urbanVsRuralDataTotal}`,
              numberSuffix: ' people',
            };

            const socialGroupsData = socialGroupComponents.map(component => {
              return { label: component.socialGroupCategory.socialGroupCategoryTranslate.name, value: component.percent };
            });
            const socialGroupsDataSourceConfig = {
              caption: 'Ethnic Distribution',
              // numberSuffix: ' people',
              numberSuffix: '%',
              showLabels: '0',
              showLegend: '1',
            };

            return (
              <>
                <DemographicsTitle>Demographics</DemographicsTitle>
                <DemographicsTotalTitle>Total Population:</DemographicsTotalTitle>
                <DemographicsTotalValue>{population.amount.toLocaleString()}</DemographicsTotalValue>
                <DemographicsTotalNationalPercent>{PERCENTAGE_OF_NATIONAL_POPULATION}</DemographicsTotalNationalPercent>
                <DoughnutChart data={urbanVsRuralData} dataSourceConfig={urbanVsRuralDataSourceConfig} justify="center" percentOfTotalColumns={1} />
                <PieChart data={socialGroupsData} dataSourceConfig={socialGroupsDataSourceConfig} justify="center" height={'310'} percentOfTotalColumns={0.9} width={width * 0.9} />
                <DemographicsCitation>IBGE. 2012. Censo Demográfico 2010</DemographicsCitation>
              </>
            );
          }}
        </Query>
      </DemographicsGrid>
    );
  }
};

export default NJDemographics;
