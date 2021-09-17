import React, {FunctionComponent} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import 'src/modules/app/content/carousel/HeadingItemize.scss';

type HeadingItemizeProps = {
  containerHeight: string
}

export const HeadingItemize: FunctionComponent<HeadingItemizeProps> = ({containerHeight}) => {
  return (
    <Container className='itemize-container'>
      <Row className='itemize-row' style={{minHeight: containerHeight, maxHeight: 'max-content'}}>
        {firstItem()}
        {secondItem()}
        {thirdItem()}
      </Row>
    </Container>
  );
};

const firstItem = () => {
  return (
    <Col lg={4} className='itemize-col'>
      {svgPlaceholder}
      <h2>Heading</h2>
      <p>Some representative placeholder content for the three columns</p>
      <p className='align-bottom'>
        <a className="btn btn-secondary" href="#">View details »</a>
      </p>
    </Col>
  );
};

const secondItem = () => {
  return (
    <Col lg={4} className='itemize-col'>
      {svgPlaceholder}
      <h2>Heading</h2>
      <p>Another exciting bit of representative placeholder content. </p>
      <p className='align-bottom'>
        <a className="btn btn-secondary" href="#">View details »</a>
      </p>
    </Col>
  );
};

const thirdItem = () => {
  return (
    <Col lg={4} className='itemize-col'>
      {svgPlaceholder}
      <h2>Heading</h2>
      <p>And lastly this, the third column of representative placeholder.
      </p>
      {/* style={{position: 'absolute', bottom: '0', transform: 'translate(-50%, -50%)'}}*/}
      <p className='position-sticky align-bottom'>
        <a className="btn btn-secondary" href="#">View details »</a>
      </p>
    </Col>
  );
};

const svgPlaceholder = (
  <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
    xmlns="http://www.w3.org/2000/svg"
    role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false">
    <title>Placeholder</title>
    <rect width="100%" height="100%" fill="#777"/>
    <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
  </svg>
);

