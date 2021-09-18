import React, {FunctionComponent} from 'react';
import audio from 'src/assets/svg/audio.svg';
import brush from 'src/assets/svg/brush.svg';
import business from 'src/assets/svg/business.svg';
import code from 'src/assets/svg/code.svg';
import data from 'src/assets/svg/data.svg';
import film from 'src/assets/svg/film.svg';
import life from 'src/assets/svg/life.svg';
import news from 'src/assets/svg/news.svg';
import 'src/modules/app/content/features/Features.scss';

export const Features = () => {
  return (
    <div className='feature-container'>
      <h2 className='feature-heading'>We already know what you need</h2>
      <div className='features-row'>
        {
          elements.map((featureItem, index) =>
            <FeatureItem key={index} svg={featureItem.svg} caption={featureItem.caption}/>,
          )
        }
      </div>
    </div>
  );
};

const FeatureItem: FunctionComponent<FeatureItemProps> = ({svg, caption}) => {
  return (
    <div className='feature'>
      <div className='feature-img-container'>
        <img alt='' src={svg} className='feature-img'/>
        <div className='feature-line'/>
        <span className='feature-span'>{caption}</span>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  svg: string,
  caption: string,
}

const elements: FeatureItemProps[] = [
  {
    svg: audio,
    caption: 'Music & Audio',
  },
  {
    svg: brush,
    caption: 'Graphics & Design',
  },
  {
    svg: business,
    caption: 'Custom Solutions',
  },
  {
    svg: code,
    caption: 'Programming & Software',
  },
  {
    svg: data,
    caption: 'Data & Analysis',
  },
  {
    svg: film,
    caption: 'Video & Animation',
  },
  {
    svg: life,
    caption: 'Lifestyle',
  },
  {
    svg: news,
    caption: 'Copywriting & Translation',
  },
];
