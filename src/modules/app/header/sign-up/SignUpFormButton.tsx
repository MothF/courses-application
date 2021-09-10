import React, {FunctionComponent} from 'react';
import {Row} from 'react-bootstrap';

type SignUpFormButtonProps = {
  name: string,
  svg?: string,
  className: string,
  prefix?: string,
  type?: 'button' | 'submit'
}

export const SignUpFormButton: FunctionComponent<SignUpFormButtonProps> = ({name, svg,
  className, prefix, type= 'button'}) => {
  const buildLabel = (str: string) => {
    return (prefix ? `${prefix} ` : '') + str.charAt(0).toUpperCase() + str.slice(1);
  };
  const image = () => {
    if (svg) {
      return (
        <img src={svg} alt='' className='sign-up-button--logo'/>
      );
    }
  };
  return (
    <Row className='sign-up-row'>
      <div className='col-sm-9'>
        <button type={type} className={className}>
          {image()}
          <p className='sign-up-button--alt'>{buildLabel(name)}</p>
        </button>
      </div>
    </Row>
  );
};
