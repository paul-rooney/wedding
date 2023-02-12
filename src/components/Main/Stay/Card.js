const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="var(--very-soft-yellow)" stroke="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
            <a target="_blank" >
                <picture className="frame">
                    <img src={`./assets/img/${src}`} alt={`A bedroom in ${name}`} />
                </picture>
                <figcaption className="box">
                    <p>{name}</p>
                    <div>{renderStarRating()}</div>
                    <div>
                        <address>{address}</address>
                        <p>{price}</p>
                        <p>{distance} to Town Hall</p>
                    </div>
                </figcaption>
            </a>
        </figure>
    );
};

export default Card;
