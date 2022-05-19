import React, {useCallback, useEffect, useRef, useState} from 'react';

const Timer = () => {
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
        console.log('hours: ' + hoursRef.current)
    },[])
    const incMinutes = useCallback(() => {

        if (minutesRef.current === 59) {
            setMinutes(0)
            incHours()
        }
        else
            setMinutes(minutesRef.current + 1)
        console.log('minutes:' + minutesRef.current)
    },[])
    const incSeconds = useCallback(() => {
        if (secondsRef.current === 59) {
            setSeconds(0)
            incMinutes()
        }
        else
            setSeconds(secondsRef.current + 1)
        console.log('seconds:' + secondsRef.current)
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

    return (
        <div className='container' >
            <div className="timer">
                <button onClick={start}>START</button>
                <button onClick={stop}>STOP</button>
                <div className="time h">{hours >= 10 ? hours : '0' + hours}</div>
                <div className="time m">{minutes >= 10 ? minutes : '0' + minutes}</div>
                <div className="time s">{seconds >= 10 ? seconds : '0' + seconds}</div>
            </div>
        </div>
    );
};

export default Timer;