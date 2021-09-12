import React, {useState} from 'react';
import {Button, Collapse, Container, Dropdown, Nav, Navbar, NavLink, OverlayTrigger, Row} from 'react-bootstrap';
import logo from 'src/assets/svg/logo.svg';
import {ExplorePopover} from 'src/modules/app/header/explorer/ExplorePopover';
import 'src/modules/app/header/Header.scss';
import {languageOptions} from 'src/modules/app/header/languageDefinitions';
import {getLanguage, getMenuDefinition, MenuDefinition} from 'src/modules/app/header/languagesUtils';
import {SignUpFormPopup} from 'src/modules/app/header/sign-up/SignUpFormPopup';

export const Header = () => {
  return (
    <Row className='bg-dark'>
      <Navbar expand='sm'>
        <Container fluid className='header-container'>
          {navbarBrandLogo}
          <div className='col-md-lg-7'/>
          {navbarCollapse()}
        </Container>
      </Navbar>
    </Row>
  );
};

const navbarBrandLogo = (
  <Navbar.Brand className='d-flex' href='./'>
    <img src={logo} className='App-logo' alt='' style={{height: '60px', width: '60px'}}/>
  </Navbar.Brand>
);

const navbarCollapse = () => {
  const [languageLabel, setLanguageLabel] = useState( 'eng');
  const menuDefinition: MenuDefinition = getMenuDefinition(languageLabel);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Button className='navbar-toggler' type='button' onClick={() => setCollapsed(!collapsed)}
        aria-controls='example-collapse-text' aria-expanded={collapsed}>
        <span className='navbar-toggler-icon'/>
      </Button>
      <Collapse className='navbar-collapse' in={collapsed}>
        <ul className='navbar-nav' id='example-collapse-text'>
          <Nav.Item>
            {languageDropdown(languageLabel, setLanguageLabel)}
          </Nav.Item>
          <Nav.Item>
            <OverlayTrigger trigger='hover' placement='bottom' overlay={ExplorePopover}>
              <span className='nav-link-span'>{menuDefinition.explore}</span>
            </OverlayTrigger>
          </Nav.Item>
          <Nav.Item>
            <a className='nav-link' href='#'>{menuDefinition.becomeSeller}</a>
          </Nav.Item>
          <Nav.Item>
            <a className='nav-link' href='#'>{menuDefinition.signIn}</a>
          </Nav.Item>
          <Nav.Item>
            <SignUpFormPopup buttonMargin={collapsed ? {marginTop: '10px'} : {marginLeft: '10px'}}
              menuDefinition={menuDefinition}
              state={useState(false)} />
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
      <Dropdown.Menu variant='dark'>
        {
          languageOptions.map((lang) =>
            <Dropdown.Item key={lang.label} eventKey={lang.label}>
              {lang.value}
            </Dropdown.Item>,
          )
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};
