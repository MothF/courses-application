import React, {FunctionComponent, PropsWithChildren, ReactElement, useState} from 'react';
import 'src/modules/app/content/pricing/Pricing.scss';
import {SignUpFormPopup} from '../../header/sign-up/SignUpFormPopup';

export const Pricing = () => {
  const zeroPriceButton = () => {
    const [show, setShow] = useState(false);
    return (
      <>
        <button onClick={() => setShow(true)} type='button'
          className='pricing-btn-default'>Sign up for free</button>
        <SignUpFormPopup showState={[show, setShow]}/>
      </>
    );
  };

  return (
    <div className='pricing-container'>
      {heading}
      <div className='pricing-row'>
        <PricingItem price={0} subscrName={'Free'}
          button={zeroPriceButton()}
        >
          <li>10 users included</li>
          <li>2 GB of storage</li>
          <li>Email support</li>
          <li>Help center access</li>
        </PricingItem>
        <PricingItem price={15} subscrName={'Pro'}
          button={
            <button type='button' className='pricing-btn-default'>Get started</button>
          }
        >
          <li>20 users included</li>
          <li>10 GB of storage</li>
          <li>Priority email support</li>
          <li>Help center access</li>
        </PricingItem>
        <PricingItem price={29} subscrName={'Enterprise'} borderClass={'pricing-border-primary'}
          button={
            <button type='button' className='pricing-btn-primary'>Contact us</button>
          }
        >
          <li>30 users included</li>
          <li>15 GB of storage</li>
          <li>Phone and email support</li>
          <li>Help center access</li>

        </PricingItem>
      </div>
    </div>
  );
};

const heading = (
  <>
    <h2 className='pricing-heading'>Pricing</h2>
    <p className='pricing-description'>
      Quickly build an effective pricing table for your potential customers with this Bootstrap example.
      It’s built with default Bootstrap components and utilities with little customization.
    </p>
  </>
);

type PricingItemProps = PropsWithChildren<{
  borderClass? : string,
  price: number,
  subscrName: string,
  button: ReactElement
}>;

const PricingItem: FunctionComponent<PricingItemProps> = ({borderClass = '',
  price, subscrName, button, children}) => {
  const cardHeaderClass: string = borderClass ? `text-white pricing-bg-primary ${borderClass}` : '';
  return (
    <div className='col'>
      <div className={`card mb-4 rounded-3 shadow-sm ${borderClass}`}>
        <div className={`card-header py-3 ${cardHeaderClass}`}>
          <h4 className='my-0 fw-normal'>{subscrName}</h4>
        </div>
        <div className='card-body'>
          <h1 className='card-title pricing-card-title'>${price}<small className='text-muted fw-light'>/mo</small></h1>
          <ul className='list-unstyled mt-3 mb-4'>
            {children}
          </ul>
          {button}
        </div>
      </div>
    </div>
  );
};
