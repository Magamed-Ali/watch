import React, {useEffect, useState} from 'react';
import Hour from "./Hour";
import Minutes from "./Minutes";
import Seconds from "./Seconds";
import DigitalClock from "./DigitalClock";

function Clock() {

    const deg = 6;

    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    const [ss, setSs] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            setHh(date.getHours() * 30 + date.getMinutes() * 0.5);
            setMm(date.getMinutes() * deg);
            setSs(date.getSeconds() * deg);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="watch">
            <DigitalClock hh={hh} mm={mm} ss={ss} />
            <div className="clock">
                <img src={process.env.PUBLIC_URL + "/images/kisspng-alarm-clocks.png"} alt="clock"/>
                <Hour hh={hh}/>
                <Minutes mm={mm}/>
                <Seconds ss={ss}/>
            </div>
        </div>

    );
}

export default Clock;