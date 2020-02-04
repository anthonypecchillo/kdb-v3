/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import DoughnutChart from './DoughnutChart';
import PieChart from './PieChart';

const GET_JURISDICTION_DEMOGRAPHICS = gql`
  query getJurisdictionDemographics($name: String!) {
    jurisdictionByName(name: $name) {
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
      }
    }
  }
`;

const data3 = [
  {
    label: 'Multi-ethnic',
    value: 550037,
    // color: '#ff69b4',
  },
  {
    label: 'White',
    value: 198279,
  },
  {
    label: 'Black',
    value: 48118,
  },
  {
    label: 'Indigenous',
    value: 18252,
  },
  {
    label: 'Indigenous',
    value: 18252,
  },
  {
    label: 'Other',
    value: 15762,
  },
];

const dataSourceConfig3 = {
  caption: 'Ethnic Distribution',
  // xAxisName: 'Vegetation Type',
  // yAxisName: 'Land Area (km²)',
  numberSuffix: ' people',
  showLabels: '0',
  showLegend: '1',
};

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
    const { jurisdiction, language } = this.props;
    const { width } = this.state.dimensions;

    return (
      <DemographicsGrid ref={el => (this.container = el)}>
        <Query query={GET_JURISDICTION_DEMOGRAPHICS} variables={{ name: jurisdiction }}>
          {({ loading, error, data }) => {
            if (loading) return <p>LOADING</p>;
            if (error) return <p>ERROR</p>;

            const { nation, population, region } = data.jurisdictionByName;
            const { urbanPopulation, ruralPopulation } = region.urbanVsRural;

            const percentageOfNationalPopulation = (population.amount / nation.population.amount) * 100;

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

            return (
              <>
                <DemographicsTitle>Demographics</DemographicsTitle>
                <DemographicsTotalTitle>Total Population:</DemographicsTotalTitle>
                <DemographicsTotalValue>{population.amount.toLocaleString()}</DemographicsTotalValue>
                <DemographicsTotalNationalPercent>{`${percentageOfNationalPopulation.toLocaleString()}% of National Population`}</DemographicsTotalNationalPercent>
                <DoughnutChart data={urbanVsRuralData} dataSourceConfig={urbanVsRuralDataSourceConfig} justify="center" percentOfTotalColumns={1} />
                <PieChart data={data3} dataSourceConfig={dataSourceConfig3} justify="center" height={'310'} percentOfTotalColumns={0.9} width={width * 0.9} />
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
