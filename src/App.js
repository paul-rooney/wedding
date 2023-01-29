import CardGallery from './components/CardGallery';
import Crossword from './components/Crossword';

function App() {
    return (
        <>
        <Crossword />
        <header className="header">
            <div className="header__content">
                <a className="header__logo" href="#home">K<span className="header__logo__ampersand">&</span>S</a>
                <nav className="header__nav">
                    <a className="header__nav__toggle" href="" data-nav-toggle>Menu</a>
                    <menu data-width="100" className="header__nav__menu">
                        <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="#venue">Venue</a></li>
                        <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="#stay">Stay</a></li>
                        <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="#itinerary">Itinerary</a></li>
                        <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="#rsvp">RSVP</a></li>
                    </menu>
                </nav>
            </div>
        </header>

        <main className="main">
            <section className="section section--hero" id="home">
                <h1 className="section__heading section__heading--primary">
                    Kiana <span>&</span> Stephen are getting married
                </h1>
            </section>

            <section className="section section--venue" id="venue">
                <h2 className="section__heading sr-only" hidden>Venue</h2>

                <div className="columns">
                    <div className="column">
                        <h3 className="column__heading">Ceremony</h3>
                        <div className="column__content">
                            <address className="column__content__address">
                                Reading Town Hall<br />
                                Blagrave Street<br />
                                Reading, RG1 1QH
                            </address>
                            <time className="column__content__datetime" dateTime="">12:45<span>PM</span></time>
                        </div>
                    </div>

                    <div className="column">
                        <h3 className="column__heading">Reception</h3>
                        <div className="column__content">
                            <address className="column__content__address">
                                Thames Lido<br />
                                Napier Road<br />
                                Reading, RG1 8FR
                            </address>
                            <time className="column__content__datetime" dateTime="">02:00<span>PM</span>&ndash;12:00<span>AM</span></time>
                        </div>
                    </div>

                    <a className="columns__cta" href="">RSVP</a>
                </div>

                <figure className="section__figure">
                    <div>
                        <img src='./assets/img/img001.jpeg' alt=''/>
                    </div>
                </figure>
            </section>

            <section className="section section--stay" id="stay">
                <div className="section__content">
                    <h2 className="section__heading">Stay</h2>

                    <p className="">
                        The wedding ceremony and reception are in two different venues, but both are in central Reading.
                    </p>
                    <p className="">
                        There are a number of hotel options available within the town centre. The hotels best located to our wedding are:
                    </p>
                </div>

                <figure className="section__figure">
                    <div>
                        <img src='./assets/img/img004.jpeg' alt=''/>
                    </div>
                </figure>
            </section>

            <CardGallery />

            <section className="section section--itinerary" id="itinerary">
                <div className="section__content">
                    <h2 className="section__heading">Itinerary</h2>

                    <div>
                        <h3>Friday</h3>
                        <time dateTime="">14 July</time>
                        <ol>
                            <li><time dateTime="">8:00<span>PM</span></time> Pre-wedding gathering; TBC</li>
                        </ol>
                    </div>

                    <div>
                        <h3>Saturday</h3>
                        <time dateTime="">15 July</time>
                        <ol>
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
        </main>

        <footer className="footer">
            <div className="footer__content">
                <div className="">
                    K&S
                    <a href="">15 July 2023</a>
                </div>

                <div className="">
                    <menu>
                        <li><a href="">Venue</a></li>
                        <li><a href="">Stay</a></li>
                        <li><a href="">Itinerary</a></li>
                        <li><a href="">RSVP</a></li>
                    </menu>
                </div>
            </div>
        </footer>

        </>
    );
}

export default App;
