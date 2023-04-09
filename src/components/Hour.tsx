import React, {memo} from 'react';

const Hour = (props: {hh: number, mm: number}) =>  {
    console.log(props.hh)
    return (
        <div className="hour" style={{transform: `rotateZ(${props.hh}deg)`}}>
        </div>
    );
}

export default Hour;