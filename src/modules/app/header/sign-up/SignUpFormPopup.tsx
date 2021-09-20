import React, {FunctionComponent} from 'react';
import {Modal} from 'react-bootstrap';
import apple from 'src/assets/svg/apple.svg';
import facebook from 'src/assets/svg/facebook.svg';
import google from 'src/assets/svg/google.svg';
import {SignUpFormButton} from 'src/modules/app/header/sign-up/SignUpFormButton';
import {SignUpFormCredentialArea} from 'src/modules/app/header/sign-up/SignUpFormCredentialArea';
import 'src/modules/app/header/sign-up/SignUpFormPopup.scss';

type SingUpFormPopupProps = {
  showState: [boolean, Function];
}

type NamedSvg = {
  name: string,
  svg: string
}

const continueWithButtonNames: NamedSvg[] = [
  {name: 'facebook', svg: facebook},
  {name: 'google', svg: google},
  {name: 'apple', svg: apple},
];

const createContinueWithButtons = () => {
  return (
    <>
      {
        continueWithButtonNames.map((namedSvg) => {
          const buttonClass = 'sign-up-button--' + namedSvg.name;
          return (
            <SignUpFormButton key={namedSvg.name} prefix='Continue with' name={namedSvg.name}
              className={buttonClass} svg={namedSvg.svg}/>
          );
        })
      }
    </>
  );
};

export const SignUpFormPopup: FunctionComponent<SingUpFormPopupProps> =
  ({showState}) => {
    const show = showState[0];
    const setShow = showState[1];
    const handleClose = () => setShow(false);
    return (
      <>
        <Modal contentClassName='sign-up-modal--content' backdropClassName='shadow' show={show}
          onHide={handleClose} centered>
          <Modal.Header className='sign-up-modal--header'>
            <Modal.Title className='sign-up-modal--title'>Join us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {createContinueWithButtons()}
            <div className='sign-up-separator--row'>
              <span className='sign-up-separator'>OR</span>
            </div>
            <SignUpFormCredentialArea/>
          </Modal.Body>
          <Modal.Footer className='justify-content-center'>
            <div className='row'>
              <div className='col-sm-auto sign-up-modal--footer--text'>
                Not a member yet?
              </div>
              <div className='col-sm-auto sign-up-modal--footer--link'>
                Join now
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

