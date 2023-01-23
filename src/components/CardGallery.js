import { useEffect, useRef, useState } from 'react';
import Card from './Card';

const CardGallery = () => {
    const gallery = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragX, setDragX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        handleDrag();
    }, [gallery]);

    const handleDrag = () => {
        const handleMouseDown = (e) => {
            setIsDragging(true);
            setDragX(e.pageX - gallery.current.offsetLeft);
            setScrollLeft(gallery.current.scrollLeft);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;

            e.preventDefault();
            const x = e.pageX - gallery.current.offsetLeft;
            const walk = x - dragX;
            gallery.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseLeave = () => {
            setIsDragging(false);
        };

        gallery.current.addEventListener('mousedown', handleMouseDown);
        gallery.current.addEventListener('mouseup', handleMouseUp);
        gallery.current.addEventListener('mousemove', handleMouseMove);
        gallery.current.addEventListener('mouseleave', handleMouseLeave);
    };

    return (
        <section className="overflow-x">
            <div className={isDragging ? "active gallery" : "gallery"} ref={gallery}>
                <Card address='18&ndash;20 Station Road' distance='3 minute walk' name='Malmaison' price='£125 per room per night' rating={4} src='malmaison.jpeg' url='https://www.malmaison.com/locations/reading/' />

                <Card address='26 The Forbury' distance='3 minute walk' name='The Roseate' price='£240 per room per night' rating={5} src='roseate.jpeg' url='https://www.roseatehotels.com/reading/theroseate/' />

                <Card address='25a Friar Street' distance='2 minute walk' name='Ibis' price='£100 per room per night' rating={3} src='ibis.jpeg' url='https://all.accor.com/hotel/5431/index.en.shtml' />

                <Card address='25b Friar Street' distance='3 minute walk' name='Novotel' price='£120 per room per night' rating={4} src='novotel.jpeg' url='https://all.accor.com/hotel/5432/index.en.shtml' />

                <Card address='1&ndash;2 Market Place' distance='2 minute walk' name='The Market House' price='£80 per room per night' rating={3} src='markethouse.jpeg' url='https://www.markethousereading.com/' />

                <Card address='Letcombe Street' distance='10 minute walk' name='Premier Inn' price='£110 per room per night' rating={3} src='premierinn.jpeg' url='https://www.premierinn.com/gb/en/hotels/england/berkshire/reading/reading-central.html' />

                <Card address='60 Oxford Road' distance='9 minute walk' name='Travelodge' price='£85 per room per night' rating={2} src='travelodge.jpeg' url='https://www.travelodge.co.uk/hotels/64/Reading-Central-hotel' />
            </div>
        </section>
    );
};

export default CardGallery;
