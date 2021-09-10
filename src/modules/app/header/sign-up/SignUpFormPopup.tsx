import React, {CSSProperties, FunctionComponent} from 'react';
import {Button, Modal, Row} from 'react-bootstrap';
import apple from 'src/assets/svg/apple.svg';
import facebook from 'src/assets/svg/facebook.svg';
import google from 'src/assets/svg/google.svg';
import {MenuDefinition} from 'src/modules/app/header/languagesUtils';
// import 'src/modules/app/header/sign-up/SignupFormPopup.scss'

type SingUpFormPopupProps = {
  buttonMargin: CSSProperties,
  menuDefinition: MenuDefinition,
  state: [boolean, Function];
}

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

        <Modal backdropClassName='shadow' show={show} onHide={handleClose} centered>
          <Modal.Header style={{borderBottom: 'none'}}>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className='justify-content-center' style={{margin: '12px 0'}}>
              <div className='col-sm-9'>
                <button type="button" className="btn w-100 justify-content-center"
                  style={{
                    backgroundColor: '#415fb9',
                    borderRadius: '4px',
                    padding: '12px 30px 12px 16px',
                    fontWeight: 600,
                    fontFamily: 'macan,helvetica neue,Helvetica,Arial,sans-serif',
                    color: 'white',
                  }}>
                  <div className='row'>
                    <div className='col-sm-1'>
                      <img src={facebook} style={{width: '18px', height: '18px', marginRight: '5px'}} alt=''/>
                    </div>
                    <div className='col-sm-11'>
                      Continue with Facebook
                    </div>
                  </div>
                </button>
              </div>
            </Row>
            <button type="button" className="btn btn-success">
              <img src={google} style={{width: '18px', height: '18px'}} alt=''/>
              <p>Continue with Google</p>
            </button>
            <button type="button" className="btn btn-danger">
              <img src={apple} style={{width: '18px', height: '18px'}} alt=''/>
              <p>Continue with Apple</p>
            </button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

