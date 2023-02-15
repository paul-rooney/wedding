const Header = () => (
    <header className="cluster align-items:baseline justify-content:space-between">
        <a href="#home">K<span className="ampersand" style={{ fontSize: '0.875em', paddingInline: '0.0625em' }}>&</span>S</a>
        <nav>
            <ul className="cluster | justify-content:flex-start">
                <li><a href="#">Venue</a></li>
                <li><a href="#stay">Stay</a></li>
                <li><a href="#itinerary">Itinerary</a></li>
                <li className="highlight"><a href="#rsvp">RSVP</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
