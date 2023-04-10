import React from 'react';

function DigitalClock(props: {hh: number, mm: number, ss: number}) {

    const {hh, mm, ss} = props
    return (
        <div className="bookacket">
            <div className="uncomenkad">
                <div id="vemekunys">
                    {`${Math.trunc(hh / 30)} : ${mm / 6} : ${ss / 6}`}
                </div>
            </div>
            <span></span>
            <span></span>
        </div>
    );
}

export default DigitalClock;