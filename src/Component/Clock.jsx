import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>{time}</h1>
        </div>
    );
}

export default Clock;
