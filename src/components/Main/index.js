import Home from './Home'
import Countdown from './Countdown';
import Stay from './Stay';
import Itinerary from './Itinerary';
import RSVP from './RSVP';

const Main = () => (
    <main className="stack">
        <Home />
        <Countdown targetDate='2023-07-15T12:45:00Z' />
        <Stay />
        <Itinerary />
        <RSVP />
    </main>
);

export default Main;
