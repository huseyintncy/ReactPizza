import "./Food.css"
function Food() {
    return (
        <>
            <section>
                <div className="main-menu">
                    <h2>en çok paketlenen menüler</h2>
                    <p>Acıktıran Kodlara Doyuran Lezzetler</p>
                </div>
            </section>

            <section className="icon-container icon1">
                <ul className="menu-list menu-list-alt">
                    <li className="ramen">
                        <img src="images\iteration-2-images\icons\1.svg" alt="yemek ikonu" />
                        Ramen
                    </li>
                    <li className="pizza">
                        <img src="images\iteration-2-images\icons\2.svg" alt="pizza ikonu" />
                        Pizza
                    </li>
                    <li className="burger">
                        <img src="images\iteration-2-images\icons\3.svg" alt="burger ikonu" />
                        Burger
                    </li>
                    <li className="fries">
                        <img src="images\iteration-2-images\icons\4.svg" alt="kızartmalar ikonu" />
                        French fries
                    </li>
                    <li className="fast-food">
                        <img src="images\iteration-2-images\icons\5.svg" alt="fast food ikonu" />
                        Fast Food
                    </li>
                    <li className="soft-drinks">
                        <img src="images\iteration-2-images\icons\6.svg" alt="gazlı içecek ikonu" />
                        Soft drinks
                    </li>
                </ul>
            </section>

            <section className="food-section">
                <div className="food-item">
                    <img src="images\iteration-2-images\pictures\food-1.png" alt="Terminal Pizza" />
                    <h2>Terminal Pizza</h2>
                    <div className="p-container">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>
                    </div>
                </div>
                <div className="food-item">
                    <img src="images\iteration-2-images\pictures\food-2.png" alt="Position Absolute Acı Pizza" />
                    <h2>Position Absolute Acı Pizza</h2>
                    <div className="p-container">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>
                    </div>
                </div>
                <div className="food-item">
                    <img src="images\iteration-2-images\pictures\food-3.png" alt="useEffect Tavuklu Burger" />
                    <h2>useEffect Tavuklu Burger</h2>
                    <div className="p-container">
                        <p>4.9</p>
                        <p>(200)</p>
                        <p>60₺</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Food;
