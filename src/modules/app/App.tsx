import React from 'react';
import {Container} from 'react-bootstrap';
import 'src/modules/app/App.scss';
import {Header} from 'src/modules/header/Header';
import 'src/modules/header/Header.scss';


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
