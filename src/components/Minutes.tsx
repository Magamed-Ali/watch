import React, {memo} from 'react';

const Minutes = (props: {mm: number}) => {
    return (
        <div className="minutes" style={{transform: `rotateZ(${props.mm}deg)`}}>
        </div>
    );
}

export default Minutes;