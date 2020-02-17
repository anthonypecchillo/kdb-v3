/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import overviewDiagramURL from '../assets/images/Acre-Programs-Overview.png';

const content = (
  <div>
    <h1 style={{ color: 'red', textAlign: 'center' }}>Stubbed From Mod Site</h1>
    <h3 style={{ color: 'red', textAlign: 'center' }}>We don't actually have any content for this section in our current database!</h3>
    <p>
      <img alt="overview-diagram" src={overviewDiagramURL} width="100%" />
    </p>
    <p>&nbsp;</p>
    <p>
      <strong>
        REDD strategies to reverse deforestation and degradation developed or planned:
      </strong>
    </p>
    <p>
      <strong>
        <br />
      </strong>
    </p>
    <p>
      As part of its State System of Incentives for Environmental Services (SISA), Acre is
      developing a Program of Incentives for Environmental Services-Carbon (IES-Carbon Program). The
      program is designed to include the entire state territory, incorporating regional and thematic
      sub-programs as well as special REDD+ projects based on a nested approach. The subprograms are
      intended to define the specific guidelines for REDD+ activities in a given region, while the
      purpose of the thematic subprograms is to provide REDD+ actions for certain groups of
      environmental service providers, e.g. indigenous territories and protected areas, according to
      the priorities identified by the government. Special REDD+ projects are associated to private
      REDD+ activities.
    </p>
    <p>&nbsp;</p>
    <p>
      The IES-Carbon Program is comprised of 2 main sets of interventions: (1) direct assistance and
      regulatory actions such as technical extension, community organization, fire control, and
      improvement of monitoring and control mechanisms, and (2) incentives for environmental
      services directed to improving the productivity of deforested areas as well as to promote
      sustainable use of forests and protection of forests for stakeholders such as indigenous
      peoples, extractivist families, and small, medium and large rural producers. The program is
      managed by the organizations that comprise the SISA: (1) the state commission for validation
      and monitoring (CEVA), comprised of civil society and government members in equal numbers; (2)
      Climate Change and Environmental Service Regulation Institute (IMC), a government agency for
      the regulation, monitoring, control and registry of environmental assets such as carbon; (3)
      the Environmental Services Development Company, a semi public corporation in charge of raising
      funds and implementing actions under the SISA and the IES Carbon Program; 4) the Scientific
      Committee &ndash; comprised of nationally and internationally renowned figures in several
      fields of science, reports into the IMC and provides opinions on technical, scientific, legal
      and methodological issues related to the SISA; and 5) Ombudsman, under the Environment
      Secretariat, as a mechanism for conflict resolution and ongoing improvement of the system.
      &nbsp;
    </p>
  </div>
);

const ProgramsOverviewStyled = styled.div`
  border-top: 3px solid #3e522d;
  height: calc(100% - 2.5% - 40px);
  margin-top: 15px;
  overflow-y: scroll;
  padding: 15px;
  width: 100%;
`;

const ProgramsOverview = () => <ProgramsOverviewStyled>{content}</ProgramsOverviewStyled>;

export default ProgramsOverview;
