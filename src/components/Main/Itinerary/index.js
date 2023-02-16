import { useLayoutEffect } from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';

const Itinerary = () => {
    const [containerRef, isVisible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    });

    useLayoutEffect(() => {
        if (isVisible) {
            containerRef.current.classList.add('animate');
        } else {
            containerRef.current.classList.remove('animate');
        }
    }, [isVisible]);

    return (
        <section className="diagonal" id="itinerary">
            <div className="center stack fade-in" ref={containerRef}>
                <h2 className="section__heading" hidden>Itinerary</h2>

                <div className="switcher itinerary__day" style={{ '--threshold': '35rem' }}>
                    <div>
                        <h3>Friday</h3>
                        <time dateTime="">14 July</time>
                    </div>
                    <ol className="stack:small">
                        <li><time dateTime="">8:00<span>PM</span></time> Pre-wedding gathering; TBC</li>
                    </ol>
                </div>

                <div className="switcher itinerary__day" style={{ '--threshold': '35rem' }}>
                    <div>
                        <h3>Saturday</h3>
                        <time dateTime="">15 July</time>
                    </div>
                    <ol className="stack:small">
                        <li><time dateTime="">12:45<span>PM</span></time> Ceremony at Reading Town Hall</li>
                        <li><time dateTime="">2:00<span>PM</span></time> Welcome drinks at Thames Lido</li>
                        <li><time dateTime="">4:30<span>PM</span></time> Speeches</li>
                        <li><time dateTime="">5:00<span>PM</span></time> Dinner</li>
                        <li><time dateTime="">7:30<span>PM</span></time> First dance</li>
                        <li><time dateTime="">8:00<span>PM</span></time> Party</li>
                        <li><time dateTime="">10:00<span>PM</span></time> Evening snacks</li>
                        <li><time dateTime="">11:30<span>PM</span></time> Bar closes</li>
                        <li><time dateTime="">12:00<span>AM</span></time> Finish</li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Itinerary;
