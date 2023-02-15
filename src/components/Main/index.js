import { useEffect, useRef, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';
import Home from './Home'
import Countdown from './Countdown';
import Stay from './Stay';
import Itinerary from './Itinerary';
import RSVP from './RSVP';

const Main = () => {
    const [containerRef, isVisible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    });

    return (
        <main>
            <Home />
            <Countdown targetDate='2023-07-15T12:45:00Z' />
            <Stay />
            <Itinerary innerRef={containerRef} animate={isVisible} />
            <RSVP />
        </main>
    );
};

export default Main;
