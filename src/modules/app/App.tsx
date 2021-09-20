import React from 'react';
import {Container} from 'react-bootstrap';
import 'src/modules/app/App.scss';
import {HeadingCarousel} from 'src/modules/app/content/carousel/HeadingCarousel';
import {Header} from 'src/modules/app/header/Header';
import 'src/modules/app/header/Header.scss';
import {FeaturesContainerParent} from './content/features/FeaturesContainerParent';
import {Divider} from './content/divider/Divider';
import {DividerImage} from './content/divider/DividerImage';
import {Opportunities} from './content/opportunities/Opportunities';
import {Pricing} from './content/pricing/Pricing';

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
      <FeaturesContainerParent/>
      <DividerImage/>
      <Opportunities/>
      <Divider/>
      <Pricing/>
    </Container>
  );
}

export default App;
