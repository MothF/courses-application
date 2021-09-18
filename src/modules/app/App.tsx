import React from 'react';
import {Container} from 'react-bootstrap';
import 'src/modules/app/App.scss';
import {HeadingCarousel} from 'src/modules/app/content/carousel/HeadingCarousel';
import {Header} from 'src/modules/app/header/Header';
import 'src/modules/app/header/Header.scss';
import {FeaturesContainer} from './content/features/FeaturesContainer';
import {Divider} from './content/divider/Divider';

/**
 *
 * @constructor
 */
function App() {
  return (
    <Container fluid className='p-0' style={{overflow: 'hidden'}}>
      <Header/>
      <HeadingCarousel/>
      <Divider/>
      <FeaturesContainer/>
      <Divider/>
    </Container>
  );
}

export default App;
