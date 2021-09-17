import React from 'react';
import 'src/modules/app/content/carousel/HeadingCarousel.scss';
import {Carousel, Row} from 'react-bootstrap';
import orangePic from 'src/assets/jpeg/orange.jpeg';
import greenPic from 'src/assets/jpeg/green.jpeg';
import grayPic from 'src/assets/jpeg/gray.jpeg';
import {HeadingItemize} from './HeadingItemize';

const deviceHeight = '100vh';
const intervalValue = 7500;

export const HeadingCarousel = () => {
  return (
    <Row style={{minHeight: deviceHeight, maxHeight: 'max-content'}}>
      <Carousel pause={false}>
        <Carousel.Item interval={intervalValue}>
          <img src={grayPic}
            className="d-block w-100" alt="First slide" style={{width: 'auto', height: '60vh'}}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={intervalValue}>
          <img src={orangePic}
            className="d-block w-100" alt="Second slide" style={{width: 'auto', height: '60vh'}}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={intervalValue}>
          <img src={greenPic}
            className="d-block w-100" alt="Third slide" style={{width: 'auto', height: '60vh'}}/>
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
