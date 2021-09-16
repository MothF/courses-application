import React from 'react';
import {Container, Row} from 'react-bootstrap';
import 'src/modules/app/App.scss';
import {HeadingCarousel} from 'src/modules/app/content/carousel/HeadingCarousel';
import {Header} from 'src/modules/app/header/Header';
import 'src/modules/app/header/Header.scss';

/**
 *
 * @constructor
 */
function App() {
  return (
    <Container fluid>
      <Header/>
      <HeadingCarousel/>
      <Row style={{height: '900px', backgroundColor: 'red', marginTop: '0'}}/> {{/* todo remove*/}}
    </Container>
  );
}

export default App;
