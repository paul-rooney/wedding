const Home = () => (
    <section id="home" className="cover">
        <div className="center stack | title">
            <p className="text-align:center text-transform:uppercase">You are invited to celebrate the marriage of</p>
            <h1 className="switcher | justify-content:center">
                <span className="forename">Kiana <span className="surname">Newman&#8209;Zand</span></span>
                <span className="ampersand">&</span>
                <span className="forename">Stephen <span className="surname">Rooney</span></span>
            </h1>
            <p className="text-align:center text-transform:uppercase">on Saturday 15 July 2023</p>
        </div>
        <div className="center cluster | justify-content:center text-align:center" style={{ '--space': '4.5rem' }}>
            <h2 hidden>Venue</h2>
            <div className="stack" style={{ '--space': '1rem' }}>
                <h3 className="divider">Ceremony</h3>
                <address>
                    Reading Town Hall<br />
                    Blagrave Street<br />
                    Reading, RG1 1QH
                </address>
                <p><time>12:45<span>PM</span></time></p>
            </div>
            <div className="stack" style={{ '--space': '1rem' }}>
                <h3 className="divider">Reception</h3>
                <address>
                    Thames Lido<br />
                    Napier Road<br />
                    Reading, RG1 8FR
                </address>
                <p><time>02:00<span>PM</span>&ndash;12:00<span>AM</span></time></p>
            </div>
        </div>
        <div className="center">
            <a className="call-to-action" href="#rsvp">
            <span className="with-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                RSVP
            </span>
            </a>
        </div>
        <img src="./assets/img/lido.png" role="presentation" />
    </section>
);

export default Home;
