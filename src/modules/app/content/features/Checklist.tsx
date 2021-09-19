import React, {FunctionComponent, useEffect} from 'react';
import 'src/modules/app/content/features/Checklist.scss';
import check from 'src/assets/svg/check.svg';
import orange from 'src/assets/jpeg/orange.jpeg';
import Aos from 'aos';
// import 'aos/dist/aos.css';

export const Checklist = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='checklist-container-parent'>
      <div className='checklist-container' id='checklist-container'>
        <div className='checklist-row gx-3'>
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
              <CheckElement item={1} text='Connect to freelancers with proven business experience'/>
              <CheckElement item={2} text='Get matched with the perfect talent by a customer success manager'/>
              <CheckElement item={3} text='Manage teamwork and boost productivity with one powerful workspace'/>
              <CheckElement item={4} text='A team of Fiverr Business Success Managers is here to help you'/>
            </ul>
          </div>
          <div className='col-lg-6 image-col' id='image-column'>
            <img className='image-col--img' src={orange} alt='team'/>
          </div>
        </div>
      </div>
    </div>
  );
};

type CheckElementProps = {
  text: string,
  item: number,
}

const CheckElement: FunctionComponent<CheckElementProps> = ({text, item}) => {
  return (
    <li className='business-checklist--li'>
      <img src={check} alt='' className='business-checklist--li--img'
        data-aos='list'
        data-aos-delay={item * 250}
        data-aos-duration='1000'
        data-aos-anchor='#image-column'
        data-aos-anchor-placement="top-center"
        data-aos-once='true'
      />
      <span data-aos='fade-up'
        data-aos-delay={item * 250}
        data-aos-duration='1000'
        data-aos-anchor='#image-column'
        data-aos-anchor-placement="top-center"
        data-aos-once='true'
      >
        {text}
      </span>
    </li>
  );
};
