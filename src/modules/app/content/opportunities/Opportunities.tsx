import React, {FunctionComponent, useEffect} from 'react';
import 'src/modules/app/content/opportunities/Opportunities.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import gray from 'src/assets/jpeg/gray.jpeg';

export const Opportunities = () => {
  useEffect(() => {
    Aos.init({easing: 'ease-in-out'});
  }, []);
  return (
    <>
      <OppoContainer>
        <div className="col-md-7 oppo-text" >
          <h2 className='oppo-text--header'>First featurette heading.
            <span className="text-muted"> It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here. Imagine some exciting prose here.
          </p>
        </div>
        <div className="col-md-5 oppo-image">
          <img src={gray} alt='' className='img-fluid mx-auto' id='first-image' width='500px' height='500px'
            data-aos='fade-left'
            data-aos-delay={250}
            data-aos-duration='1000'
          />
        </div>
      </OppoContainer>
      <OppoContainer>
        <div className="col-md-5 oppo-image">
          <img src={gray} alt='' className='img-fluid mx-auto' id='second-image' width='500px' height='500px'
            data-aos='fade-right'
            data-aos-anchor-placement='top-top'
            data-aos-anchor='#first-image'
            data-aos-duration='1000'
          />
        </div>
        <div className="col-md-7 oppo-text">
          <h2 className='oppo-text--header'>First featurette heading.
            <span className="text-muted"> It’ll blow your mind.</span>
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here. Imagine some exciting prose here.
          </p>
        </div>
      </OppoContainer>
    </>
  );
};


const OppoContainer: FunctionComponent = ({children}) => {
  return (
    <div className='container px-4 py-5 my-5'>
      <div className="row" >
        {children}
      </div>
    </div>
  );
};
