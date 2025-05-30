import "./Card.css"
function Card() {
    return (
        <section className="card">
            {/* Sol büyük kart */}
            <div className="card-left">
                <div className="card-image-wrapper">
                    <img src="images\iteration-2-images\cta\kart-1.png" alt="kart 1" />
                    <div className="card-content">
                        <h2 className="kart-1">
                            Özel
                            <br />
                            Lezzetus
                        </h2>
                        <p>Position: Absolute Acı Burger</p>
                        <button className="button button1">Sipariş Ver</button>
                    </div>
                </div>
            </div>

            {/* Sağ iki küçük kart */}
            <div className="card-right">
                <div className="card-image-wrapper">
                    <img src="images\iteration-2-images\cta\kart-2.png" alt="kart 2" />
                    <div className="card-content card-content2">
                        <h2>Hackathlon</h2>
                        <p>Burger Menü</p>
                        <button className="button button2">Sipariş Ver</button>
                    </div>
                </div>

                <div className="card-image-wrapper">
                    <img className="kart-3" src="images\iteration-2-images\cta\kart-3.png" alt="kart 3" />
                    <div className="card-content">
                        <p className="title-line">
                            <b className="red-text">Çoooook</b> <i className="black-text">hızlı</i>
                        </p>
                        <p className="subtitle">npm gibi kurye</p>
                        <button className="button button2">Sipariş Ver</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
