import React, {CSSProperties, FunctionComponent} from 'react';
import {Button, Modal, Row} from 'react-bootstrap';
import apple from 'src/assets/svg/apple.svg';
import facebook from 'src/assets/svg/facebook.svg';
import google from 'src/assets/svg/google.svg';
import {MenuDefinition} from 'src/modules/app/header/languagesUtils';
import 'src/modules/app/header/sign-up/SignUpFormPopup.scss';

type SingUpFormPopupProps = {
  buttonMargin: CSSProperties,
  menuDefinition: MenuDefinition,
  state: [boolean, Function];
}

type NamedSvg = {
  name: string,
  svg: string
}

const continueWithButtonNames: NamedSvg[] = [
  {
    name: 'facebook',
    svg: facebook,
  },
  {
    name: 'google',
    svg: google,
  },
  {
    name: 'apple',
    svg: apple,
  },
];

const createContinueWithButtons = () => {
  const capitalizedFirstChar = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const buttons = continueWithButtonNames.map((namedSvg) => {
    const buttonClass = 'sign-up-button--' + namedSvg.name;
    return (
      <Row key={namedSvg.name} className='sign-up-row'>
        <div className='col-sm-9'>
          <button type='button' className={buttonClass}>
            <img src={namedSvg.svg} alt='' className='sign-up-button--logo'/>
            <p className='sign-up-button--alt'>Continue with {capitalizedFirstChar(namedSvg.name)}</p>
          </button>
        </div>
      </Row>
    );
  });
  return (
    <>
      {buttons}
    </>
  );
};

export const SignUpFormPopup: FunctionComponent<SingUpFormPopupProps> =
  ({buttonMargin, menuDefinition, state}) => {
    const show = state[0];
    const setShow = state[1];

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
        <button onClick={handleShow} style={buttonMargin} className='btn' type='submit'>
          {menuDefinition.signUp}
        </button>
        <Modal contentClassName='sign-up-modal--content' backdropClassName='shadow' show={show}
          onHide={handleClose} centered>
          <Modal.Header className='sign-up-modal--header'>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {createContinueWithButtons()}
            <div className='row' style={{textAlign: 'center', margin: '20px 0 20px'}}>
              <span className='sign-up-separator'>OR</span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
            <Button variant='primary' onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

