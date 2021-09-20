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
      {firstOppo()}
      <span className='oppo-separator'/>
      {secondOppo()}
      <span className='oppo-separator'/>
      {thirdOppo()}
    </>
  );
};


const firstOppo = () => {
  return (
    <OppoContainer>
      <div className='col-md-7 oppo-text--left'>
        <h2 className='oppo-text--header'>First featurette heading.
          <span className='text-muted'> It’ll blow your mind.</span>
        </h2>
        <p className='lead'>
          Some great placeholder content for the first featurette here. Imagine some exciting prose here.
        </p>
      </div>
      <div className='col-md-5 oppo-image'>
        <img src={gray} alt='' className='img-fluid mx-auto' id='first-image' width='500px' height='500px'
          data-aos='fade-left'
          data-aos-offset={300}
          data-aos-duration={1000}
          data-aos-once={true}
        />
      </div>
    </OppoContainer>
  );
};

const secondOppo = () => {
  return (
    <OppoContainer>
      <div className='col-md-5 oppo-image'>
        <img src={gray} alt='' className='img-fluid mx-auto' id='second-image' width='500px' height='500px'
          data-aos='fade-right'
          data-aos-anchor-placement='top-top'
          data-aos-anchor='#first-image'
          data-aos-duration={1000}
          data-aos-once={true}
        />
      </div>
      <div className='col-md-7 oppo-text--right'>
        <h2 className='oppo-text--header'>Oh yeah, it’s that good.
          <span className='text-muted'> See for yourself.</span>
        </h2>
        <p className='lead'>
          Another featurette? Of course. More placeholder content here to give you an idea of
          how this layout would work with some actual real-world content in place.
        </p>
      </div>
    </OppoContainer>
  );
};


const thirdOppo = () => {
  return (
    <OppoContainer>
      <div className='col-md-7 oppo-text--left'>
        <h2 className='oppo-text--header'>And lastly, this one.
          <span className='text-muted'>Checkmate.</span>
        </h2>
        <p className='lead'>
          And yes, this is the last block of representative placeholder content. Again, not really intended to
          be actually read, simply here to give you a better view of what this
          would look like with some actual content. Your content.
        </p>
      </div>
      <div className='col-md-5 oppo-image'>
        <img src={gray} alt='' className='img-fluid mx-auto' id='third-image' width='500px' height='500px'
          data-aos='fade-left'
          data-aos-anchor-placement='top-top'
          data-aos-anchor='#second-image'
          data-aos-duration={1000}
          data-aos-once={true}
        />
      </div>
    </OppoContainer>
  );
};

const OppoContainer: FunctionComponent = ({children}) => {
  return (
    <div className='oppo-container'>
      <div className='row'>
        {children}
      </div>
    </div>
  );
};
