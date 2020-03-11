/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import jurisdictions2 from '../const/jurisdictions2';

const MemberStatesGrid = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 2fr repeat(10, 1fr);
  grid-template-areas:
    "brazil indonesia mexico peru ivorycoast colombia ecuador nigeria"
    "brazil-acre indonesia-aceh mexico-campeche peru-amazonas ivorycoast-belier colombia-caqueta ecuador-pastaza nigeria-crossriver"
    "brazil-amapa indonesia-centralkalimantan mexico-chiapas peru-huanuco ivorycoast-cavally . . ."
    "brazil-amazonas indonesia-eastkalimantan mexico-jalisco peru-loreto . . . ."
    "brazil-maranhao indonesia-northkalimantan mexico-oaxaca peru-madrededios . . . ."
    "brazil-matogrosso indonesia-westkalimantan mexico-quintanaroo peru-piura . . . ."
    "brazil-para indonesia-papua mexico-tabasco peru-sanmartin . . . ."
    "brazil-rondonia indonesia-westpapua mexico-yucatan peru-ucayali . . . ."
    "brazil-roraima . . . . . . ."
    "brazil-tocantins . . . . . . .";

  align-items: center;
  justify-items: center;

  height: 100%;
  padding: 0 3%;
  width: 100%;

  @media (max-width: 765px) {
    padding: 0;
  }

  @media (max-width: 460px) {
    grid-column: 1/4;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "brazil indonesia mexico peru ivorycoast"
      "brazil-acre indonesia-aceh mexico-campeche peru-amazonas ivorycoast-belier"
      "brazil-amapa indonesia-centralkalimantan mexico-chiapas peru-huanuco ivorycoast-cavally"
      "brazil-amazonas indonesia-eastkalimantan mexico-jalisco peru-loreto colombia"
      "brazil-maranhao indonesia-northkalimantan mexico-oaxaca peru-madrededios colombia-caqueta"
      "brazil-matogrosso indonesia-westkalimantan mexico-quintanaroo peru-piura ecuador"
      "brazil-para indonesia-papua mexico-tabasco peru-sanmartin ecuador-pastaza"
      "brazil-rondonia indonesia-westpapua mexico-yucatan peru-ucayali nigeria"
      "brazil-roraima . . . nigeria-crossriver"
      "brazil-tocantins . . . .";

      padding: 0 5%;
  }
`;

const ModalNationLink = styled(Link)`
  grid-area: ${({ gridArea }) => gridArea};
  ${'' /* justify-self: left; */}

  color: black;
  font-size: 10px;
  font-weight: 600;
  ${'' /* margin-left: 30%; */}
  text-align: center;
  text-decoration: none;
  transition: color 0.1s ease 0, font-size 0.1s ease 0, text-shadow 0.1s ease 0;
  white-space: nowrap;

  &:hover {
    color: #3e522d;
    cursor: pointer;
    font-size: 19px;

    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
  }

  @media (max-width: 1025px) {
    ${'' /* font-size: */}
  }
`;

const ModalStateLink = styled(Link)`
  grid-area: ${({ gridArea }) => gridArea};
  ${'' /* justify-self: left; */}

  color: black;
  font-size: 8px;
  ${'' /* margin-left: 30%; */}
  text-align: center;
  text-decoration: none;
  transition: color 0.4s ease 0, font-size 0.8s ease 0.5s, font-weight ease 0.4s 0;

  &:hover {
    color: #3e522d;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
  }
`;

// TODO: Use primary key from DB as uniqueID for props
const MemberStates = ({ toggleModal }) => {
  let gridArea;

  return (
    <MemberStatesGrid>
      {jurisdictions2.map((jurisdiction, index) => {
        if (!jurisdiction) {
          return <div key={index} />;
        }

        if (jurisdiction.JURISDICTION_TYPE === 'nation') {
          gridArea = jurisdiction.URL.split('/').join('-').slice(1);
          return (
            <ModalNationLink
              gridArea={gridArea}
              key={index}
              to={jurisdiction.URL}
              onClick={toggleModal}
            >
              {jurisdiction.NATION_NAME}
            </ModalNationLink>
          );
        }

        gridArea = jurisdiction.URL.split('/').join('-').slice(1);
        return (
          <ModalStateLink
            gridArea={gridArea}
            key={index}
            to={jurisdiction.URL}
            onClick={toggleModal}
          >
            {jurisdiction.JURISDICTION_NAME}
          </ModalStateLink>
        );
      })}
    </MemberStatesGrid>
  );
};

export default MemberStates;
