import "./Header.css"

function Header({ onOrderClick }) {
    return (
        <>
            <header>
                <section className="logo1">
                    <img src="images\iteration-1-images\logo.svg" alt="logo" />
                </section>
                <div className="header-content">
                    <section className="main-section">
                        <h2>fırsatı kaçırma</h2>
                        <p>KOD ACIKTIRIR</p>
                        <p>PIZZA, DOYURUR</p>
                        <button className="button" onClick={onOrderClick}>
                            ACIKTIM
                        </button>
                    </section>
                </div>
            </header>


            <section className="icon-container">
                <ul className="menu-list">
                    <li>
                        <img src="images/iteration-2-images/icons/1.svg" alt="yemek ikonu" />
                        YENİ! Kore
                    </li>
                    <li>
                        <img src="images/iteration-2-images/icons/2.svg" alt="pizza ikonu" />
                        Pizza
                    </li>
                    <li>
                        <img src="images/iteration-2-images/icons/3.svg" alt="burger ikonu" />
                        Burger
                    </li>
                    <li>
                        <img src="images/iteration-2-images/icons/4.svg" alt="kızartmalar ikonu" />
                        Kızartmalar
                    </li>
                    <li>
                        <img src="images/iteration-2-images/icons/5.svg" alt="fast food ikonu" />
                        Fast Food
                    </li>
                    <li>
                        <img src="images/iteration-2-images/icons/6.svg" alt="gazlı içecek ikonu" />
                        Gazlı İçecek
                    </li>
                </ul>
            </section>

        </>
    );
}

export default Header;

