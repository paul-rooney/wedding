import sprite from '../../../assets/svg/feather-sprite.svg';

const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--yellow-500)" stroke="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

const Card = (props) => {
    const { address, distance, name, price, rating, src, url } = props;

    const renderStarRating = () => {
        let stars = [];

        for (let i = 0; i < rating; i++) {
            stars.push(<Star key={'rating-' + i} />);
        }

        return stars;
    };

    return (
        <figure>
            <a target="_blank" href={url}>
                <picture className="frame">
                    <img src={`./assets/img/${src}`} alt={`A bedroom in ${name}`} />
                </picture>
                <figcaption className="box" style={{ '--padding': '1.5rem' }}>
                    <p>
                        <span className="with-icon" dir="rtl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                <use href={`${sprite}#external-link`} />
                            </svg>
                            {name}
                        </span>
                    </p>
                    <div>{renderStarRating()}</div>
                    <div>
                        <address>
                            <span className="with-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <use href={`${sprite}#map-pin`} />
                                </svg>
                                {address}
                            </span>
                        </address>
                        <p>
                            <span className="with-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                    <use href={`${sprite}#credit-card`} />
                                </svg>
                                {price}
                            </span>
                        </p>
                        <p>
                        <span className="with-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                                <use href={`${sprite}#map`} />
                            </svg>
                            {distance} to Town Hall
                        </span>
                        </p>
                    </div>
                </figcaption>
            </a>
        </figure>
    );
};

export default Card;
