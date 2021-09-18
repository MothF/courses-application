import React from 'react';
import 'src/modules/app/content/carousel/HeadingCarousel.scss';
import {Carousel, Row} from 'react-bootstrap';
import orangePic from 'src/assets/jpeg/orange.jpeg';
import greenPic from 'src/assets/jpeg/green.jpeg';
import grayPic from 'src/assets/jpeg/gray.jpeg';
import {HeadingItemize} from './HeadingItemize';

const intervalValue = 7500;

export const HeadingCarousel = () => {
  return (
    <Row className='carousel-row'>
      <Carousel pause={false}>
        <Carousel.Item interval={intervalValue}>
          <img src={grayPic}
            className='carousel-slide' alt='First slide'/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={intervalValue}>
          <img src={orangePic}
            className='carousel-slide' alt='Second slide'/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={intervalValue}>
          <img src={greenPic}
            className='carousel-slide' alt='Third slide'/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <HeadingItemize containerHeight='40vh'/>
    </Row>
  );
};
