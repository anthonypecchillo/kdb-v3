/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import jurisdictions from '../const/jurisdictions';

const ModalBox = styled.div`
  background-color: white;
  display: block;
  height: 400px;
  margin-top: 75px;
  position: fixed;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  width: 100%;
  max-width: 1680px;
  z-index: 999;
`;

const MemberStatesGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr repeat(8, 1fr) 0.5fr;
  grid-template-rows: 2fr repeat(10, 1fr);
  /* grid-template-areas:
    ". x x x x x x x x ."
    ". x x x x x x x x ."
    ". x x x x x . . . ."
    ". x x x x . . . . ."
    ". x x x x . . . . ."
    ". x x x x . . . . ."
    ". x x x x . . . . ."
    ". x x x x . . . . ."
    ". x . . . . . . . ."
    ". x . . . . . . . ." */
  place-items: center;

  height: 100%;
  width: 100%;
  max-width: 1680px;
`;

const ModalFade = styled.div`
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  height: 3950px;
  left: 0;
  position: absolute;
  right: 0;
  ${'' /* top: 475px; */}
  top: 0px;
  z-index: 998;
`;

const ModalNationLink = styled(Link)`
  justify-self: left;

  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-left: 30%;
  text-decoration: none;
  transition: color 0.1s ease 0, font-size 0.1s ease 0, text-shadow 0.1s ease 0;

  &:hover {
    color: #3e522d;
    cursor: pointer;
    font-size: 19px;

    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
  }
`;

const ModalStateLink = styled(Link)`
  justify-self: left;

  color: black;
  font-size: 13px;
  margin-left: 30%;
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
const Modal = ({ toggleModal }) => (
  <>
    <ModalBox>
      <MemberStatesGrid>
        {jurisdictions.map((jurisdiction, index) => {
          if (!jurisdiction) {
            return <div key={index} />;
          }

          if (index < 11) {
            return (
              <ModalNationLink key={index} to={jurisdiction.URL} onClick={toggleModal}>
                {jurisdiction.NATION_NAME}
              </ModalNationLink>
            );
          }
          return (
            <ModalStateLink key={index} to={jurisdiction.URL} onClick={toggleModal}>
              {jurisdiction.JURISDICTION_NAME}
            </ModalStateLink>
          );
        })}
      </MemberStatesGrid>
    </ModalBox>
    <ModalFade onClick={toggleModal} />
  </>
);

export default Modal;
