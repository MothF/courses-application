import React from 'react';
import {Popover} from 'react-bootstrap';
import 'src/modules/app/header/explorer/ExplorePopover.scss';

const content = (
  <div className='row row-cols-md-2'>
    <div className='col'>
      <div className='text-wrapper'>
        <div className='expl-head'>Discover</div>
        <p className='expl-text'>Inspiring projects made by our users</p>
      </div>
    </div>
    <div className='col'>
      <div className='text-wrapper'>
        <div className='expl-head'>Community</div>
        <p className='expl-text'>Connect with our team and community</p>
      </div>
    </div>
    <div className='col'>
      <div className='text-wrapper'>
        <div className='expl-head'>Guides</div>
        <p className='expl-text'>In-depth guides covering business topics</p>
      </div>
    </div>
    <div className='col'>
      <div className='text-wrapper'>
        <div className='expl-head'>Podcast</div>
        <p className='expl-text'>Inside tips from top business minds</p>
      </div>
    </div>
    <div className='col'>
      <div className='text-wrapper'>
        <div className='expl-head'>Learn</div>
        <p className='expl-text'>Professional online courses, led by experts</p>
      </div>
    </div>
    <div className='col'>
      <div className='text-wrapper'>
        <div className='expl-head'>Blog</div>
        <p className='expl-text'>News, information and community stories</p>
      </div>
    </div>
  </div>
);

export const ExplorePopover = (
  <Popover id='popover-basic' style={{maxWidth: '450px', padding: '1rem 0.5rem'}}>
    <Popover.Body>
      {content}
    </Popover.Body>
  </Popover>
);
