import React, {useEffect, useState} from 'react';
import Hour from "./Hour";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

function Clock() {

    const deg = 6;
    const [day, setDay] = useState(new Date());

    /** угол поврота часавой стрелки*/
    const [hh, setHh] = useState(day.getHours() * 30)

    /** угол поврота минутной стрелки*/
    const [mm, setMm] = useState(day.getMinutes() * deg)

    /** угол поврота секундной стрелки стрелки*/
    const [ss, setSs] = useState(day.getSeconds() * deg)

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
        <div className="clock">
            <img src={process.env.PUBLIC_URL + "/images/kisspng-alarm-clocks.png"} alt="clock"/>
            <Hour hh={hh} mm={mm}/>
            <Minutes mm={mm}/>
            <Seconds ss={ss}/>
        </div>
    );
}

export default Clock;