import React, {FunctionComponent} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import 'src/modules/app/content/carousel/HeadingItemize.scss';
import orangePic from 'src/assets/jpeg/orange.jpeg';
import greenPic from 'src/assets/jpeg/green.jpeg';
import grayPic from 'src/assets/jpeg/gray.jpeg';

type HeadingItemizeProps = {
  containerHeight: string
}

export const HeadingItemize: FunctionComponent<HeadingItemizeProps> = ({containerHeight}) => {
  return (
    <Container className='itemize-container'>
      <Row className='itemize-row' style={{minHeight: containerHeight, maxHeight: 'max-content'}}>
        <HeadingItem picture={imageSrc(orangePic)}/>
        <HeadingItem picture={imageSrc(greenPic)}/>
        <HeadingItem picture={imageSrc(grayPic)}/>
        <HeadingItem picture={imageSrc(greenPic)}/>
      </Row>
    </Container>
  );
};

type HeadingItemProps = {
  picture: object;
}

const HeadingItem : FunctionComponent<HeadingItemProps> = ({picture}) => {
  return (
    <Col lg={4} className='itemize-col my-3'>
      {picture}
    </Col>
  );
};

const imageSrc = (source: string) => (
  <img alt="Gray" className='itemize-image--self' src={source}/>
);

