import React from 'react';
import {Features} from './Features';
import {Checklist} from './Checklist';
import 'src/modules/app/content/features/FeaturesContainerParent.scss';

export const FeaturesContainerParent = () => {
  return (
    <div className='features-container-parent'>
      <Features/>
      <Checklist/>
    </div>
  );
};
