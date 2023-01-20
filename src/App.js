function App() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <a className="header__logo">K<span className="header__logo__ampersand">&</span>S</a>
          <nav className="header__nav">
            <a className="header__nav__toggle" href="" data-nav-toggle>Menu</a>
            <menu className="header__nav__menu">
              <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="">Venue</a></li>
              <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="">Stay</a></li>
              <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="">Itinerary</a></li>
              <li className="header__nav__menu__item"><a className="header__nav__menu__item__link" href="">RSVP</a></li>
            </menu>
          </nav>
        </div>
      </header>
      
      <main className="main">
        <section className="section section--hero">
          <h1 className="section__heading section__heading--primary">
            Kiana <span>&</span> Stephen are getting married
          </h1>
        </section>
        
        <section className="section section--venue">
          <h2 className="section__heading sr-only" hidden>Venue</h2>
          
          <div className="columns">
            <div className="column">
              <h3 className="column__heading">Ceremony</h3>
              <address className="column__content">
                Reading Town Hall<br />
                Blagrave Street<br />
                Reading, RG1 1QH
              </address>
            </div>
            
            <div className="column">
              <h3 className="column__heading">Reception</h3>
              <address className="column__content">
                Thames Lido<br />
                Napier Road<br />
                Reading, RG1 8FR
              </address>
            </div>

            <a className="columns__cta" href="">RSVP</a>            
          </div>
          
          <figure className="section__figure">
            <img src='http://unsplash.it/1200?random&gravity=center' alt=''/>
          </figure>
        </section>

        <section className="section section--stay">
          <div className="section__content">
            <h2 className="section__heading">Stay</h2>
            
            <p className="">
              If you&rsquo;re looking for accommodation, please let us know as we may have some rooms available at a discount. Here are some nearby options we like the look of:
            </p>

            <div className="columns">
              <div className="column">
                <h3 className="column__heading">Hotels</h3>
                <address className="column__content">
                  18&ndash;20 Station Road<br />
                  Reading, RG1 1JX
                </address>
              </div>

              <div className="column">
                <h3 className="column__heading">B&Bs</h3>
                <address className="column__content">
                  Hotel Novotel Reading Centre<br />
                  25b Friar Street<br />
                  Reading, RG1 1DP
                </address>
              </div>
            </div>
          </div>

          <figure className="section__figure">
            <img src='http://unsplash.it/1200?random&gravity=center' alt=''/>
          </figure>
        </section>

        <section className="section section--itinerary">
          <div className="section__content">
            <h2 className="section__heading">Itinerary</h2>

            <p>Ullamco ipsum esse ipsum veniam consectetur. Non adipisicing cillum labore proident ea voluptate. Adipisicing nisi laboris do Lorem Lorem id duis. Qui incididunt ad fugiat ad ex qui in aliqua Lorem qui reprehenderit. Occaecat deserunt eu in do ipsum consectetur veniam id. Do id cillum tempor et nulla sunt tempor incididunt ullamco occaecat aute id est qui.</p>
          </div>
        </section>
      </main>
      
      <footer className="footer"></footer>
    </>
  );
}

export default App;
