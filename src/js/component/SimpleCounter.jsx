import React, { useEffect, useState } from "react";

const SimpleCounter = () => {

    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [clockStatus, setClockStatus] = useState({
        title: 'Clock',
        icon: <i className="far fa-clock"></i>,
        titleStyles: 'text-primary'
    });
    
    const handleStart = () => {
        setIsRunning(!isRunning)
        setClockStatus({
            title: 'Chrono',
            icon: <i class="fas fa-stopwatch"></i>,
            titleStyles: 'text-success'
        })
    }

    const handleReset = () => {
        setIsRunning(false);
        setCounter(0);
        setClockStatus({
            title: 'Clock',
            icon: <i className="far fa-clock"></i>,
            titleStyles: 'text-primary'
        })
    }

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 10)
            return () => clearInterval(interval)
        }
    }, [isRunning])


    return (
        <div className="container text-center">
            <h1>Simple Counter</h1>
            <h2 className={clockStatus.titleStyles}>{clockStatus.title}</h2>
            <div className="big-counter">
                <div>{clockStatus.icon}</div>
                <div>{Math.floor(counter / 100000000 % 10)}</div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>{','}</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter / 1 % 10)}</div>
                <div>
                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button type="button" className="btn btn-outline-success" onClick={handleStart}>
                            {isRunning ? 'Pause' : (counter === 0 ? 'Start' : 'Continue')}
                        </button>
                        <button type="button" className="btn btn-outline-danger" onClick={handleReset}>
                            {'Reset'}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default SimpleCounter