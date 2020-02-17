/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

// import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import BulletChart from './BulletChart';
import Loading from './Loading';
import PieChart from './PieChart';

const GET_JURISDICTION_ECONOMICS = gql`
  query getJurisdictionEconomics($nationName: String!, $jurisdictionName: String!, $languageCode: String!) {
    jurisdictionByName(nationName: $nationName, jurisdictionName: $jurisdictionName) {
      id
      name
      humanDevelopmentIndex {
        amount
        year
        citation_id
      }
      perCapitaIncome {
        amount
        units
        year
        citation_id
      }
      gdp {
        amount
        units
        year
        citation_id
      }
      nation {
        gdp {
          amount
          units
          year
          citation_id
        }
      }
      region {
        gdpComponents {
          amount
          percent
          gdpCategory {
            gdpCategoryTranslate(code: $languageCode) {
              languageCode
              name
            }
          }
          citation_id
        }
       	majorExports {
          id
          majorExportTranslate(code: $languageCode) {
            languageCode
            name
          }
        }
      }
    }
  }
`;

const EconomicsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 2fr 0.5fr 1fr 0.6fr 0.5fr 1fr 0.6fr 6.25fr 2fr 0.75fr;
  justify-items: center;

  height: 100%;
  width: 100%;
`;

const EconomicsTitle = styled.h3`
  height: 100%;
  margin: 0;
  text-align: center;
  width: 100%;
`;

const EconomicsTotalTitle = styled.div`
  align-self: end;

  font-weight: 600;
  text-align: center;
`;

const EconomicsTotalValue = styled.h1`
  align-self: end;
  margin: 0;
`;

const EconomicsTotalNationalPercent = styled.div`
  align-self: start;
  font-size: 12px;
`;

const EconomicsCitation = styled.div`
  align-self: center;
  justify-self: end;

  font-size: 14px;
  padding: 0 1.25%;
`;

const EconomicsTagListContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const DeforestationTagList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  overflow-y: scroll;
  height: 100px;
  width: 100%;
`;

const DeforestationTagListItem = styled.li`
  border: 1px solid black;
  background-color: tomato;
  height: 50px;
  margin: 15px 0;
  padding-top: 15px;
  text-align: center;
  width: 90%;
`;

class NJEconomics extends React.Component {
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
      <EconomicsGrid ref={el => (this.container = el)}>
        <Query
          query={GET_JURISDICTION_ECONOMICS}
          variables={{ nationName: nation, jurisdictionName: jurisdiction, languageCode: language }}
        >
          {({ loading, error, data }) => {
            if (loading) return <Loading />;
            if (error) return <p>ERROR</p>;

            const { gdp, humanDevelopmentIndex, nation, perCapitaIncome, region } = data.jurisdictionByName;

            let percentageOfNationalGDP;
            let PERCENTAGE_OF_NATIONAL_GDP;
            if (gdp && gdp.amount && nation.gdp && nation.gdp.amount) {
              percentageOfNationalGDP = (gdp.amount / nation.gdp.amount) * 100;
              PERCENTAGE_OF_NATIONAL_GDP = `${percentageOfNationalGDP.toLocaleString()}% of National GDP`;
            } else {
              PERCENTAGE_OF_NATIONAL_GDP = 'Data unavailable';
            }

            const humnDevelopmentIndexData = humanDevelopmentIndex && humanDevelopmentIndex.amount ? { target: null, value: humanDevelopmentIndex.amount } : { target: null, value: null };
            const humanDevelopmentIndexDataSourceConfig = { caption: 'Human Development Index' };

            const { gdpComponents, majorExports } = region;
            const gdpBreakdownData = gdpComponents.map(gdpComponent => {
              return {
                label: gdpComponent.gdpCategory.gdpCategoryTranslate.name,
                value: gdpComponent.percent,
              };
            });

            const gdpBreakdownDataSourceConfig = {
              caption: 'GDP Breakdown',
              numberSuffix: '%',
              showLabels: '0',
              showLegend: '1',
            };

            return (
              <>
                <EconomicsTitle>Economics</EconomicsTitle>
                <EconomicsTotalTitle>Human Development Index</EconomicsTotalTitle>
                <BulletChart data={humnDevelopmentIndexData} dataSourceConfig={humanDevelopmentIndexDataSourceConfig} justify="center" percentOfTotalColumns={1} width={width} />
                <EconomicsTotalTitle>Per Capita Income</EconomicsTotalTitle>
                <EconomicsTotalValue>{`${Math.round(perCapitaIncome.amount).toLocaleString()} ${perCapitaIncome.units}`}</EconomicsTotalValue>
                <EconomicsTotalNationalPercent>Annual</EconomicsTotalNationalPercent>
                <EconomicsTotalTitle>State GDP</EconomicsTotalTitle>
                <EconomicsTotalValue>{`${gdp.amount.toLocaleString()} ${gdp.units}`}</EconomicsTotalValue>
                <EconomicsTotalNationalPercent>{PERCENTAGE_OF_NATIONAL_GDP}</EconomicsTotalNationalPercent>
                <PieChart data={gdpBreakdownData} dataSourceConfig={gdpBreakdownDataSourceConfig} justify="center" height={'310'} width={width * 1} percentOfTotalColumns={1} />
                <EconomicsTagListContainer>
                  <EconomicsTotalTitle>Major Exports</EconomicsTotalTitle>
                  <DeforestationTagList>
                    {majorExports.map((majorExport, index) => (
                      <DeforestationTagListItem key={index}>{majorExport.majorExportTranslate.name}</DeforestationTagListItem>
                    ))}
                  </DeforestationTagList>
                </EconomicsTagListContainer>
                <EconomicsCitation>IBGE. 2012. Censo Demográfico 2010</EconomicsCitation>
              </>
            );
          }}
        </Query>
      </EconomicsGrid>
    );
  }
};

export default NJEconomics;
