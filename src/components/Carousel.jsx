import React from 'react';
import styled, { css } from 'styled-components';

const CarouselArrow = styled.div`
  color: #111;
  cursor: pointer;
  display: block;
  left: ${({ left }) => left && '32px'};
  opacity: 0.75;
  position: absolute;
  right: ${({ right }) => right && '32px'};
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 410px) {
    left: ${({ left }) => left && '10px'};
    right: ${({ right }) => right && '10px'};
  }
`;

const CarouselStyled = styled.div`
  margin-top: 50px;
  position: relative;

  @media (min-width: 766px) {
    display: none;
  }
`;

const CarouselSlide = styled.li`
  display: none;
  height: 515px;
  list-style-type: none;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  width: 290px;

  @media (max-width: 1025px) {
    height: 50vw;
    width: 85%;
  }

  @media (max-width: 765px) {
    height: 515px;
    width: 290px;
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: white;
        border-radius: 5px;
        box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
        display: block;
      `}
  }
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

const Dots = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: center;

  list-style: none;
  margin: 0;
  margin-top: 20px;
  padding: 0;
  text-align: center;
  width: 100%;
`;

const Dot = styled.li`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  cursor: pointer;
  height: 18px;
  margin: 0 9px;
  opacity: ${({ isActive }) => (isActive && '1') || '0.5'}
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  width: 18px;

  &:hover {
    opacity: ${({ isActive }) => (isActive && '0.75') || '0.5'}
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

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let { activeIndex } = this.state;
    const { slides } = this.props;

    if (activeIndex < 1) {
      activeIndex = slides.length;
    }

    this.setState({
      activeIndex: activeIndex - 1,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let { activeIndex } = this.state;
    const { slides } = this.props;

    if (activeIndex === slides.length - 1) {
      activeIndex = -1;
    }

    this.setState({
      activeIndex: activeIndex + 1,
    });
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    return (
      <CarouselStyled className="carousel">
        <CarouselArrow onClick={e => this.goToPrevSlide(e)} left>
          <span className="fa fa-2x fa-angle-left" />
        </CarouselArrow>
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            index={index}
            activeIndex={activeIndex}
            slide={slide}
            isActive={index === activeIndex}
          >
            <CarouselSlideContent>
              <Image imageURL={slide.imageURL} />
              <CarouselSlideValue>{slide.value}</CarouselSlideValue>
              <CarouselSlideDescription>{slide.content}</CarouselSlideDescription>
            </CarouselSlideContent>
          </CarouselSlide>
        ))}
        <CarouselArrow onClick={e => this.goToNextSlide(e)} right>
          <span className="fa fa-2x fa-angle-right" />
        </CarouselArrow>

        <Dots className="carousel__indicators">
          {slides.map((slide, index) => (
            <Dot
              color="#3e522d"
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex === index}
              onClick={() => this.goToSlide(index)}
            />
          ))}
        </Dots>
      </CarouselStyled>
    );
  }
}

export default Carousel;
