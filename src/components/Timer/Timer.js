import React from 'react'
import useCountdown from '../../hook/useTimer';

export const Timer = () => {
    // const targetDate = (new Date()).add
    let targetDate = new Date();
    targetDate.setSeconds(targetDate.getSeconds() + 10);
    const [days, hours, minutes, seconds, timerRef] = useCountdown(targetDate);
    console.log([days, hours, minutes, seconds, timerRef])
    if (days + hours + minutes + seconds <= 0) {
        clearInterval(timerRef.current)
    }
    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
}


const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div
                className="countdown-link"
            >
                <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                <p>:</p>
                <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                <p>:</p>
                <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
            </div>
        </div>
    );
};
const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};