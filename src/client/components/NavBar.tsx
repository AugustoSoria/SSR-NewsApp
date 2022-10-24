import React, {useEffect, useState} from "react";

function NavBar() {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY)
  const [scrollUp, setscrollUp] = useState(false)

  function handleScroll() {
    lastScrollY < window.scrollY ? setscrollUp(true) : setscrollUp(false)
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll",  handleScroll);
    };
  });

  return (
    <>
      <header>
        <nav className={scrollUp ? "Navbar scrollDown" : "NavBar scrollUp" }>
          <div className="maxWidth1340">
            
            <section id="leftSection">
              <button id="menuBtn">
                <span className="material-symbols-outlined">
                  menu
                </span>
              </button>
              <div id="searchInputContainer">
                <input type="text" placeholder="Buscar"/>
                <span className="material-symbols-outlined">
                  search
                </span>
                <button id="searchBtn" className="highlight">
                  BUSCAR
                </button>
              </div>
            </section>

            <h1 className="highlight">LA NACION</h1>

            <section id="rightSection">
              <button id="signInBtn">SUSCRIBITE</button>
              <button id="logInBtn">INGRESAR</button>
            </section>

          </div>
        </nav>
        <nav className="mobileTopNavBar">
          <h1 className="highlight">LA NACION</h1>
          <a href="#" id="mobileSignInBtn" className="highlight">SUSCRIBITE</a>
        </nav>
      </header>
      <nav className={scrollUp ? "mobileBottomNavBar scrollDown" : "mobileBottomNavBar scrollUp" }>
        <a href="#" className="highlight">
          <span className="material-symbols-outlined">
            home
          </span>
          Home
        </a>
        <a href="#" className="highlight">
          <span className="material-symbols-outlined">
            credit_card
          </span>
          Club LA NACION
        </a>
        <a href="#" className="highlight">
          <span className="material-symbols-outlined">
            chat_bubble
          </span>
          Mi cuenta
        </a>
        <a href="#" className="highlight">
          <span className="material-symbols-outlined">
            menu
          </span>
          Menú
        </a>
      </nav>
    </>
  );
}

export default NavBar;