import React, {useEffect} from 'react';
import 'src/modules/app/content/opportunities/Opportunities.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Opportunities = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className='container px-4 py-5 my-5'>
      <div className="row">
        <div className="col-md-7 oppo-text">
          <h2>First featurette heading. <span className="text-muted">
            It’ll blow your mind.</span>
          </h2>
          <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting
                prose here.</p>
        </div>
        <div data-aos='fade-up' className="col-md-5 oppo-image">
          <svg data-aos='fade-up'
            className="bd-placeholder-img bd-placeholder-img-lg img-fluid mx-auto" width="500"
            height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"/>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text>
          </svg>
        </div>
      </div>
    </div>
  );
};
