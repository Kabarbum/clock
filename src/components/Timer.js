import React, {useCallback, useEffect, useRef, useState} from 'react';

const Timer = (callback, deps) => {
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [hours, setHours] = useState(new Date().getHours())

    const timerRef = useRef()
    const secondsRef = useRef()
    const minutesRef = useRef()
    const hoursRef = useRef()

    const incHours = useCallback(() => {
        if (hoursRef.current === 23)
            setHours(0)
        else
            setHours(hoursRef.current + 1)
    }, [])
    const incMinutes = useCallback(() => {

        if (minutesRef.current === 59) {
            setMinutes(0)
            incHours()
        } else
            setMinutes(minutesRef.current + 1)
    }, [])
    const incSeconds = useCallback(() => {
        if (secondsRef.current === 59) {
            setSeconds(0)
            incMinutes()
        } else
            setSeconds(secondsRef.current + 1)
    }, [])

    const startClock = () => {
        incSeconds()
    }

    secondsRef.current = seconds
    minutesRef.current = minutes
    hoursRef.current = hours

    useEffect(() => {
        clearInterval(timerRef.current)
        start()
    }, [])

    const start = async () => {
        console.log('start')
        timerRef.current = setInterval(startClock, 1000)
    }

    const stop = () => {
        console.log('stop')
        clearInterval(timerRef.current)
    }

    const arr = useCallback(() => {
        let a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
        a.forEach((el, idx) => {
            a[idx]=<div style={{transform: `rotate(${el * 6}deg)`}} key={idx} className="clock-line"/>
        })
        return a
    }, [])

    return (
        <div className='container'>
            <div className="timer">
                <div className="clock-wrapper">
                    <div className="clock">
                        <span style={{transform: `rotate(${hours % 24 * 15 - 90}deg)`}}
                              className="hours-arrow clock-arrow"/>
                        <span style={{transform: `rotate(${minutes % 60 * 6 - 90}deg)`}}
                              className="min-arrow clock-arrow"/>
                        <span style={{transform: `rotate(${seconds % 60 * 6 - 90}deg)`}}
                              className="sec-arrow clock-arrow"/>
                        <div className="t15 t-word">15</div>
                        <div className="t30 t-word">30</div>
                        <div className="t45 t-word">45</div>
                        <div className="t60 t-word">60</div>

                    </div>
                </div>
                <button onClick={start}>START</button>
                <button onClick={stop}>STOP</button>
                <div className="time h">{hours >= 10 ? hours : '0' + hours}</div>
                <div className="time m">{minutes >= 10 ? minutes : '0' + minutes}</div>
                <div className="time s">{seconds >= 10 ? seconds : '0' + seconds}</div>
                {arr()}
            </div>
        </div>
    );
};

export default Timer;