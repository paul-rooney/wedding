import { useCountdown } from '../../../hooks/useCountdown';

const Countdown = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    return (
        <section id="countdown" className="clock" style={{ marginBlockStart: '0' }}>
            <div className="center cluster justify-content:center">
                <div className="stack:small">
                    {String(days).padStart(2, '0')}
                    <span className="text-transform:uppercase">Days</span>
                </div>
                <div className="stack:small">
                    {String(hours).padStart(2, '0')}
                    <span className="text-transform:uppercase">Hours</span>
                </div>
                <div className="stack:small">
                    {String(minutes).padStart(2, '0')}
                    <span className="text-transform:uppercase">Minutes</span>
                </div>
                <div className="stack:small">
                    {String(seconds).padStart(2, '0')}
                    <span className="text-transform:uppercase">Seconds</span>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
