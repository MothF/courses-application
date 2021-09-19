import React, {CSSProperties} from 'react';
import mac from 'src/assets/jpeg/mac.jpg';

export const DividerImage = () => {
  const back: CSSProperties = {
    backgroundImage: `url(${mac})`,
    backgroundAttachment: 'fixed, fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '80vh',
    width: '100vw',
  };
  return (
    <div style={back}/>
  );
};
