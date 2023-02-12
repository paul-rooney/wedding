import { useCountdown } from '../../../hooks/useCountdown';

const Countdown = ({ targetDate }) => {
    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    return (
        <section className="clock" style={{ marginBlockStart: '0' }}>
            <div className="center switcher justify-content:center" style={{ '--threshold': '18.75rem' }}>
                <div className="stack text-align:center">
                    {String(days).padStart(2, '0')}
                    <span className="text-transform:uppercase">Days</span>
                </div>
                <div className="stack text-align:center">
                    {String(hours).padStart(2, '0')}
                    <span className="text-transform:uppercase">Hours</span>
                </div>
                <div className="stack text-align:center">
                    {String(minutes).padStart(2, '0')}
                    <span className="text-transform:uppercase">Minutes</span>
                </div>
                <div className="stack text-align:center">
                    {String(seconds).padStart(2, '0')}
                    <span className="text-transform:uppercase">Seconds</span>
                </div>
            </div>
        </section>
    );
};

export default Countdown;
