import React, { useState, useEffect, useCallback } from 'react';

export const Timer = () => {

    const initialTime = 10;
    const initialRunning = false;

    const [seconds, setSeconds] = useState(initialTime);
    const [running, setRunning] = useState(initialRunning);

    // usecallback hook to save current state
    // since timer will be re-rendring, useCallback will help on saving our current state
    const eachTick = useCallback(
        () => {
            return running ? setSeconds(seconds => seconds - 1) : undefined;
        },
        [running],
    );

    const start = () => setRunning(true);
    const pause = () => setRunning(false);
    const reset = () => setSeconds(initialTime);
    const stop = () => {
        pause();
        reset();
    };



    // use callback goes here
    useEffect(() => {
        const _count = setInterval(eachTick, 1000);

        return () => {
            clearInterval(_count);
        }
    }, [eachTick]);



    const timer = {
        seconds,
        start,
        stop,
        pause,
        reset,
        running
    };

    return timer;
};