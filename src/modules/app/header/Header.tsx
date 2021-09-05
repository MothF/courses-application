import React, {CSSProperties, useState} from 'react';
// eslint-disable-next-line no-unused-vars
import {Collapse, Container, Dropdown, Nav, Navbar, NavItem, NavLink, Row} from 'react-bootstrap';
import logo from 'src/assets/svg/logo.svg';
import 'src/modules/app/header/Header.scss';
import {languageOptions} from 'src/modules/app/header/languageDefinitions';
import {getLanguage, getMenuDefinition, MenuDefinition} from 'src/modules/app/header/languagesUtils';

const navbarBrandLogo = () => {
  return (
    <Navbar.Brand className='d-flex' href='./'>
      <img src={logo} className='App-logo' alt='' style={{height: '60px', width: '60px'}}/>
    </Navbar.Brand>
  );
};

const navbarCollapse = (languageLabel: string, navbarExpanded: boolean) => {
  const menuDefinition: MenuDefinition = getMenuDefinition(languageLabel);
  const buttonMargin:CSSProperties = navbarExpanded ? {marginTop: '10px'} : {marginLeft: '10px'};
  return (
    <>
      <Navbar.Toggle aria-controls="navbarScroll" >
        {/* className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"*/}
        {/* aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/* <span className="navbar-toggler-icon"/>*/}
      </Navbar.Toggle>
      <Collapse className='navbar-collapse'>
        <ul className="navbar-nav">
          <Nav.Item>
            <span className="nav-link-span">{menuDefinition.explore}</span>
          </Nav.Item>
          <Nav.Item>
            <a className="nav-link" href="#">{menuDefinition.becomeSeller}</a>
          </Nav.Item>
          <Nav.Item>
            <a className="nav-link" href="#">{menuDefinition.signIn}</a>
          </Nav.Item>
          <Nav.Item>
            <button style={buttonMargin} className="btn" type="submit">
              {menuDefinition.signUp}
            </button>
          </Nav.Item>
        </ul>
      </Collapse>
    </>
  );
};

const languageDropdown = (languageLabel: string, setLanguageLabel: Function) => {
  return (
    <Dropdown onSelect={(eventKey: any) => setLanguageLabel(eventKey)}>
      <Dropdown.Toggle as={NavLink}>
        {getLanguage(languageLabel).value}
      </Dropdown.Toggle>
      <Dropdown.Menu variant="dark">
        {
          languageOptions.map((lang) =>
            <Dropdown.Item key={lang.label} eventKey={lang.label}>{lang.value}</Dropdown.Item>,
          )
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

const navbarContainerFluid = () => {
  const [languageLabel, setLanguageLabel] = useState( 'eng');
  // eslint-disable-next-line no-unused-vars
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  return (
    <Navbar expand='sm' variant='dark'>
      <Container fluid className='header-container'>
        {navbarBrandLogo()}
        <div className='col-md-lg-7'/>
        {languageDropdown(languageLabel, setLanguageLabel)}
        {navbarCollapse(languageLabel, navbarExpanded)}
      </Container>
    </Navbar>
  );
};

export const Header = () => {
  return (
    <Row className='bg-dark'>
      {navbarContainerFluid()}
    </Row>
  );
};
