import React, {useCallback, useEffect, useRef, useState} from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const timerRef = useRef()
    const secondsRef = useRef()
    const minutesRef = useRef()
    const hoursRef = useRef()

    const incHours = useCallback(() => {
        if (hoursRef.current === 0) {
            setSeconds(0)
            setMinutes(0)
            stop()
        }
        else
            setHours(hoursRef.current - 1)
    }, [])
    const incMinutes = useCallback(() => {

        if (minutesRef.current === 0) {
            setMinutes(59)
            incHours()
        } else
            setMinutes(minutesRef.current - 1)
    }, [])
    const incSeconds = useCallback(() => {
        if (secondsRef.current === 0) {
            setSeconds(59)
            incMinutes()
        } else
            setSeconds(secondsRef.current - 1)
    }, [])

    const startClock = () => {
        incSeconds()
    }

    secondsRef.current = seconds
    minutesRef.current = minutes
    hoursRef.current = hours

    const start = async () => {
        clearInterval(timerRef.current)
        timerRef.current = setInterval(startClock, 1000)
    }

    const stop = () => {
        clearInterval(timerRef.current)
    }

    const arr = useCallback(() => {
        let a = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]
        a.forEach((el, idx) => {
            a[idx] = <div style={{transform: `rotate(${el * 6}deg)`}} key={idx} className="clock-line"/>
        })
        return a
    }, [])

    const hoursHandler = (e, arrow = "") => {
        if(e.type === "click")
            if(arrow === "top")
                if(hours > 22)
                    setHours(0)
                else
                    setHours(p=>p+1)
            else
                if(hours < 1)
                    setHours(23)
                else
                    setHours(p=>p-1)
        else if (e.deltaY > 0)
            if(hours < 1)
                setHours(23)
            else
                setHours(p=>p-1)
        else
            if(hours > 22)
                setHours(0)
            else
                setHours(p=>p+1)
    }
    const minutesHandler = (e, arrow="") => {
        if(e.type === "click")
            if(arrow === "top")
                if(minutes > 58)
                    setMinutes(0)
                else
                    setMinutes(p=>p+1)
            else
                if(minutes < 1)
                    setMinutes(59)
                else
                    setMinutes(p=>p-1)
        else if (e.deltaY > 0)
            if(minutes < 1)
                setMinutes(59)
            else
                setMinutes(p=>p-1)
        else
            if(minutes > 58)
                setMinutes(0)
            else
                setMinutes(p=>p+1)
    }
    const secondsHandler = (e, arrow="") => {
        if(e.type === "click")
            if(arrow === "top")
                if(seconds > 58)
                    setSeconds(0)
                else
                    setSeconds(p=>p+1)
            else
                if(seconds < 1)
                    setSeconds(59)
                else
                    setSeconds(p=>p-1)
        else if (e.deltaY > 0)
            if(seconds < 1)
                setSeconds(59)
            else
                setSeconds(p=>p-1)
        else
            if(seconds > 58)
                setSeconds(0)
            else
                setSeconds(p=>p+1)
    }

    return (
      <>
        <div className="container">

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
                    {arr()}
                </div>
            </div>
            <section>
                <div className="numbers">
                    <div
                        className="number-hours number"
                        onWheel={e=>hoursHandler(e)}
                    >
                        {hours > 9 ? hours : `0${hours}`}
                        <span onClick={e=>hoursHandler(e, "top")}>▲</span>
                        <span onClick={e=>hoursHandler(e, "down")}>▼</span>
                    </div>
                    <div
                        className="number-minutes number"
                        onWheel={e=>minutesHandler(e)}
                    >
                        {minutes > 9 ? minutes : `0${minutes}`}
                        <span onClick={e=>minutesHandler(e, "top")}>▲</span>
                        <span onClick={e=>minutesHandler(e, "down")}>▼</span>
                    </div>
                    <div
                        className="number-seconds number"
                        onWheel={e=>secondsHandler(e)}
                    >
                        {seconds > 9 ? seconds : `0${seconds}`}
                        <span onClick={e=>secondsHandler(e, "top")}>▲</span>
                        <span onClick={e=>secondsHandler(e, "down")}>▼</span>
                    </div>
                </div>
                <div className="btns">
                    <button onClick={start}>start</button>
                    <button onClick={stop}>stop</button>
                </div>
            </section>

        </div>
          <div>
              <input type="text"/>text
              <input type="search"/>search
              
              <input type="search" inputMode='search'/>inputModesearch1
          </div>
          </>
    );
};

export default Timer;