import React, {FunctionComponent} from 'react';
import 'src/modules/app/content/features/Checklist.scss';
import check from 'src/assets/svg/check.svg';

export const Checklist = () => {
  return (
    <div className='checklist-container-parent'>
      <div className='checklist-container' style={{backgroundColor: 'red'}}>
        <div className='checklist-row g-3'>
          <div className='col-sm-6'>
            <h2 className='business-heading'>
              <span>
                A business solution designed for <i>teams</i>
              </span>
            </h2>
            <p className='business-common'>
              Upgrade to a curated experience packed with tools and benefits, dedicated to
              businesses
            </p>
            <ul className='list-unstyled business-checklist'>
              <CheckElement text='Connect to freelancers with proven business experience'/>
              <CheckElement text='Get matched with the perfect talent by a customer success manager'/>
              <CheckElement text='Manage teamwork and boost productivity with one powerful workspace'/>
            </ul>
          </div>
          <div className='col-sm-6' style={{backgroundColor: 'green', height: '400px'}}/>
        </div>
      </div>
    </div>
  );
};

type CheckElementProps = {
  text: string,
}

const CheckElement: FunctionComponent<CheckElementProps> = ({text}) => {
  return (
    <li className='business-checklist--li'>
      <img src={check} alt='' className='business-checklist--li--img'/>
      {/* <span className='business-checklist--li--span'>*/}
      {/* </span>*/}
      {text}
    </li>
  );
};
