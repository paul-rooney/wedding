import { useLayoutEffect } from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';
import CardGallery from './CardGallery';

const Stay = () => {
    const [containerRef, isVisible] = useOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    useLayoutEffect(() => {
        if (isVisible) {
            containerRef.current.classList.add('animate');
        } else {
            containerRef.current.classList.remove('animate');
        }
    }, [isVisible]);

    return (
        <section id="stay">
            <div className="stack fade-in" style={{ '--space': '3rem' }} ref={containerRef}>
                <div className="center">
                    <h2 className="section__heading">Stay</h2>

                    <p className="">
                        The wedding ceremony and reception are in two different venues, but both are in central Reading. There are a number of hotel options available within the town centre. The hotels best located to our wedding are:
                    </p>
                </div>
                <CardGallery />
            </div>
        </section>
    );
};

export default Stay;
