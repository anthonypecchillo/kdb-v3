/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';

import ForestCarbonURL from '../assets/images/Forest-Carbon.jpg';
import SquareKilometersForestURL from '../assets/images/Square-Kilometers-Forest.jpg';
import TropicalForestURL from '../assets/images/Tropical-Forest.jpg';

const carouselSlidesData = [
  {
    content: 'MILLION SQUARE KILOMETERS OF TROPICAL FOREST',
    imageURL: SquareKilometersForestURL,
    value: '4.9',
  },
  {
    content: 'BILLION TONNES OF FOREST CARBON',
    imageURL: ForestCarbonURL,
    value: '55',
  },
  {
    content: "WORLD's TROPICAL FORESTS",
    imageURL: TropicalForestURL,
    value: '1/3',
  },
];

const SellingPointsGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr;
  background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
`;

const SellingPointsMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-rows: 605px 1fr;
  }
`;

const SellingPointsTitle = styled.h1`
  align-self: end;
  justify-self: center;

  margin: 0;

  @media (max-width: 765px) {
    font-size: 24px;
  }
  
  @media (max-width: 600px) {
    font-size: 22px;
  }

  @media (max-width: 575px) {
    font-size: 20px;
  }
  
  @media (max-width: 420px) {
    text-align: center;
  }
`;

const CarouselSlide = styled.div`
  place-self: center;

  background-color: white;
  border-radius: 5px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
  height: 515px;
  list-style-type: none;
  text-align: center;
  width: 290px;

  @media (max-width: 1025px) {
    height: 50vw;
    width: 85%;
  }

  @media (max-width: 765px) {
    display: ${({ hideBelow765 }) => (hideBelow765 ? 'none' : 'initial')}
    height: 515px;
    width: 290px;
  }
`;

const Image = styled.div`
  align-self: start;
  justify-self: center;

  background: ${({ imageURL }) => `no-repeat center/100% url(${imageURL})`};
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const CarouselSlideContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  place-items: center;

  height: 100%;
  width: 100%;
`;

const CarouselSlideValue = styled.div`
  align-self: end;

  font-size: 60px;
`;

const CarouselSlideDescription = styled.div`
  font-size: 16px;
  padding: 30px;
`;

const SellingPoints = ({ content }) => {
  const { TITLE } = content;

  return (
    <SellingPointsGrid>
      <SellingPointsTitle>{TITLE}</SellingPointsTitle>
      <SellingPointsMiniGrid>
        {carouselSlidesData.map((slide, index) => (
          <CarouselSlide key={index} slide={slide} hideBelow765>
            <CarouselSlideContent>
              <Image imageURL={slide.imageURL} />
              <CarouselSlideValue>{slide.value}</CarouselSlideValue>
              <CarouselSlideDescription>{slide.content}</CarouselSlideDescription>
            </CarouselSlideContent>
          </CarouselSlide>
        ))}
        <Carousel slides={carouselSlidesData} />
      </SellingPointsMiniGrid>
    </SellingPointsGrid>
  );
};

export default SellingPoints;
