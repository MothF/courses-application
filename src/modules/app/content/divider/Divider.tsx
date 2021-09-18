import React, {FunctionComponent} from 'react';
import 'src/modules/app/content/divider/Divider.scss';

type DividerProps = {
  height?: string;
}

export const Divider: FunctionComponent<DividerProps> = ({height = '3rem'}) => {
  return (
    <div className='content-divider' style={{height: height}}/>
  );
};
