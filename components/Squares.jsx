import React from 'react';

const Squares = () => {
  const style = {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFF',
    backgroundImage: `
      /* Radial blur/gradient layer (painted first = on top) */
      radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0) 40%,
        #FFF 90%
      ),

      /* Upper layer: 2px lines repeating every 100px */
      linear-gradient(0deg, #E1E1E1 2px, transparent 2px),
      linear-gradient(90deg, #E1E1E1 2px, transparent 2px),

      /* Lower layer: 1px lines repeating every 25px */
      linear-gradient(0deg, #E1E1E1 1px, transparent 1px),
      linear-gradient(90deg, #E1E1E1 1px, transparent 1px)
    `,
    backgroundSize: `
      /* Radial gradient size */
      100% 100%,

      /* 2px lines grid size */
      120px 120px,
      120px 120px,

      /* 1px lines grid size */
      40px 40px,
      40px 40px
    `,
    /*
      - The first layer (radial) doesn’t repeat (no-repeat).
      - The line grids all repeat to fill the container.
    */
    backgroundRepeat: 'no-repeat, repeat, repeat, repeat, repeat',
  };

  return <div style={style} />;
};

export default Squares;
