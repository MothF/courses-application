import React from 'react';
import {Container} from 'react-bootstrap';
import 'src/modules/app/App.scss';
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
    </Container>
  );
}

export default App;
