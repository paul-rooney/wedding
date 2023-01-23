const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <figure className="card">
            <a target="_blank" >
                <picture>
                    <img src={`./assets/img/${src}`} />
                </picture>
                <figcaption className="card__wrapper">
                    <h3 className="card__wrapper__heading">{name}</h3>
                    <div className="card__wrapper__rating">{renderStarRating()}</div>
                    <div className="card__wrapper__content">
                        <address className="card__wrapper__content__address">{address}</address>
                        <p className="card__wrapper__content__price">{price}</p>
                        <p className="card__wrapper__content__distance">{distance} to Town Hall</p>
                    </div>
                </figcaption>
            </a>
        </figure>
    );
};

export default Card;
