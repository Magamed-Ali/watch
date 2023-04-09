import React, { memo } from 'react';

const Seconds = (props: {ss: number}) =>  {

    console.log(props.ss)
    return (
        <div className="seconds" style={{transform: `rotateZ(${props.ss}deg)`}}>
        </div>
    );
}

export default Seconds;