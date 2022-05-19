import React, {useEffect, useRef, useState} from 'react';

const Timer = () => {
    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const timerRef = useRef()

    const incHours = ()=>{
        console.log('hours: '+hours)
        if(hours===24)
            setHours(0)
        else
            setHours(prev=>prev+1)
    }
    const incMinutes = ()=>{
        console.log('minutes:'+minutes)

        if(minutes===60)
            setMinutes(0)
        else
            setMinutes(prev=>prev+1)

        if(seconds === 60){
            incHours()
        }
    }
    const incSeconds = ()=>{
        console.log('seconds:'+seconds)
        if(seconds===60)
            setSeconds(0)
        else
            setSeconds(prev=>prev+1)
        if(seconds === 60){
            incMinutes()
        }
    }
    const incTime = () => {
        incSeconds(prev => prev + 1)
    }
    useEffect(()=>{
        clearInterval(timerRef.current)
        console.log(hours)
        start()
    },[])

    const start = async () => {
        console.log('start')
        timerRef.current = setInterval(incTime,1000)
    }

    const stop = () => {
        console.log('stop')
        clearInterval(timerRef.current)
    }

    return (
        <div className='container'>
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