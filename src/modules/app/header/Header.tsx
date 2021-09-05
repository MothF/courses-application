import React, {useState} from 'react';
import {Collapse, Container, Dropdown, NavbarBrand, NavItem, NavLink, Row} from 'react-bootstrap';
import logo from 'src/assets/svg/logo.svg';
import 'src/modules/app/header/Header.scss';
import {languageOptions} from 'src/modules/app/header/languageDefinitions';
import {getLanguage, getMenuDefinition, MenuDefinition} from 'src/modules/app/header/languagesUtils';

const brandLogo = () => {
  return (
    <NavbarBrand className='d-flex' href='./'>
      <img src={logo} className='App-logo' alt='' style={{height: '60px', width: '60px'}}/>
    </NavbarBrand>
  );
};

const navbarCollapse = (languageLabel: string) => {
  const menuDefinition: MenuDefinition = getMenuDefinition(languageLabel);
  return (
    <>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"/>
      </button>
      <Collapse className="navbar-collapse">
        <ul className="navbar-nav">
          <NavItem className="nav-link">{menuDefinition.explore}</NavItem>
          <NavItem>
            <a className="nav-link" href="#">{menuDefinition.becomeSeller}</a>
          </NavItem>
          <NavItem>
            <a className="nav-link" href="#">{menuDefinition.signIn}</a>
          </NavItem>
          <NavItem>
            <button style={{marginLeft: '10px'}} className="btn btn-outline-success" type="submit">
              {menuDefinition.signUp}
            </button>
          </NavItem>
        </ul>
      </Collapse>
    </>
  );
};

const languageDropdown = (languageLabel: string, setLanguageLabel: Function) => {
  return (
    <Dropdown onSelect={(eventKey: any) => setLanguageLabel(eventKey)}>
      <Dropdown.Toggle style={{color: 'rgba(255, 255, 255, 0.55)'}} as={NavLink}>
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
  const [languageLabel, setLanguageLabel] = useState( () => 'eng');
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Container fluid>
        {brandLogo()}
        <div className='col-md-lg-7'/>
        {languageDropdown(languageLabel, setLanguageLabel)}
        {navbarCollapse(languageLabel)}
      </Container>
    </nav>
  );
};

export const Header = () => {
  return (
    <Row>
      {navbarContainerFluid()}
    </Row>
  );
};
