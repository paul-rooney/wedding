import { useRef } from 'react';
import Card from './Card';

const CardGallery = () => {
    const reel = useRef(null);
    const dotNavigation = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        dotNavigation.current.childNodes.forEach(child => child.classList.remove('dot-navigation__item--active'));

        e.target.classList.add('dot-navigation__item--active');

        let card = e.target.dataset.card;
        let scrollDistance = 300;

        switch (card) {
            case '1':
                reel.current.scrollLeft = 0;
                break;
            case '2':
                reel.current.scrollLeft = scrollDistance * 1;
                break;
            case '3':
                reel.current.scrollLeft = scrollDistance * 2;
                break;
            case '4':
                reel.current.scrollLeft = scrollDistance * 3;
                break;
            case '5':
                reel.current.scrollLeft = scrollDistance * 4;
                break;
            case '6':
                reel.current.scrollLeft = scrollDistance * 5;
                break;
            case '7':
                reel.current.scrollLeft = scrollDistance * 6;
                break;
            default:
                return;
        }
    };

    return (
        <div className="">
            <section className="reel overflowing" ref={reel}>
                <Card address='18&ndash;20 Station Road' distance='3 minute walk' name='Malmaison' price='£125 per room per night' rating={4} src='malmaison.jpeg' url='https://www.malmaison.com/locations/reading/' />

                <Card address='26 The Forbury' distance='3 minute walk' name='The Roseate' price='£240 per room per night' rating={5} src='roseate.jpeg' url='https://www.roseatehotels.com/reading/theroseate/' />

                <Card address='25a Friar Street' distance='2 minute walk' name='Ibis' price='£100 per room per night' rating={3} src='ibis.jpeg' url='https://all.accor.com/hotel/5431/index.en.shtml' />

                <Card address='25b Friar Street' distance='3 minute walk' name='Novotel' price='£120 per room per night' rating={4} src='novotel.jpeg' url='https://all.accor.com/hotel/5432/index.en.shtml' />

                <Card address='1&ndash;2 Market Place' distance='2 minute walk' name='The Market House' price='£80 per room per night' rating={3} src='markethouse.jpeg' url='https://www.markethousereading.com/' />

                <Card address='Letcombe Street' distance='10 minute walk' name='Premier Inn' price='£110 per room per night' rating={3} src='premierinn.jpeg' url='https://www.premierinn.com/gb/en/hotels/england/berkshire/reading/reading-central.html' />

                <Card address='60 Oxford Road' distance='9 minute walk' name='Travelodge' price='£85 per room per night' rating={2} src='travelodge.jpeg' url='https://www.travelodge.co.uk/hotels/64/Reading-Central-hotel' />
            </section>
            <div className="center justify-content:center dot-navigation" ref={dotNavigation}>
                <button className="dot-navigation__item dot-navigation__item--active" data-card={1} onClick={handleClick}></button>
                <button className="dot-navigation__item" data-card={2} onClick={handleClick}></button>
                <button className="dot-navigation__item" data-card={3} onClick={handleClick}></button>
                <button className="dot-navigation__item" data-card={4} onClick={handleClick}></button>
                <button className="dot-navigation__item" data-card={5} onClick={handleClick}></button>
                <button className="dot-navigation__item" data-card={6} onClick={handleClick}></button>
                <button className="dot-navigation__item" data-card={7} onClick={handleClick}></button>
            </div>
        </div>
    );
};

export default CardGallery;
