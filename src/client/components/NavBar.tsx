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
            <button id="searchBtn">
              BUSCAR
            </button>
          </div>
        </section>

        <h1>LA NACION</h1>

        <section id="rightSection">
          <button id="signInBtn">SUSCRIBITE</button>
          <button id="logInBtn">INGRESAR</button>
        </section>

      </div>
    </nav>
  );
}

export default NavBar;