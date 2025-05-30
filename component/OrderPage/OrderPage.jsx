import { useState } from "react";
import { Button } from 'reactstrap';
import "./OrderPage.css"

function OrderPage({ onClose, onSubmit }) {
    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [toppings, setToppings] = useState([]);
    const [note, setNote] = useState("");
    const [quantity, setQuantity] = useState(1);

    const toppingOptions = [
        "Pepperoni", "Sosis", "Kanada Jambonu", "Tavuk Izgara",
        "Soğan", "Domates", "Mısır", "Sucuk", "Jalapeno", "Sarımsak",
        "Biber", "Ananas", "Kabak", "Susam"
    ];

    const price = 85.5;
    const toppingPrice = 5;
    const selectedToppingsPrice = toppings.length * toppingPrice;
    const total = (price + selectedToppingsPrice) * quantity;

    const handleToppingChange = (e) => {
        const { value, checked } = e.target;
        if (checked && toppings.length < 10) {
            setToppings([...toppings, value]);
        } else if (!checked) {
            setToppings(toppings.filter((t) => t !== value));
        }
    };

    return (
        <div className="order-form">
            <div className="order-image" >
                <img className="logo-3"
                    src="images/iteration-1-images/logo.svg"
                    alt="Logo"
                />
            </div>

            <div className="order-container">
                <h2>Position Absolute Acı Pizza</h2>
                <p><strong>{price.toFixed(2)}₺</strong></p>
                <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre...</p>

                { }
                <div className="flex-row">
                    <div className="size-options">
                        <label>Boyut Seç *</label>
                        <label><input type="radio" name="size" value="Küçük" onChange={(e) => setSize(e.target.value)} /> Küçük</label>
                        <label><input type="radio" name="size" value="Orta" onChange={(e) => setSize(e.target.value)} /> Orta</label>
                        <label><input type="radio" name="size" value="Büyük" onChange={(e) => setSize(e.target.value)} /> Büyük</label>
                    </div>

                    <div className="crust-options">
                        <label>Hamur Seç *</label>
                        <select value={crust} onChange={(e) => setCrust(e.target.value)}>
                            <option value="">Hamur Kalınlığı</option>
                            <option value="İnce">İnce</option>
                            <option value="Kalın">Kalın</option>
                        </select>
                    </div>
                </div>

                {/* Ek Malzemeler */}
                <div>
                    <label>Ek Malzemeler (Max 10)</label><br />

                    {/* 1. satır */}
                    <div className="toppings-row">
                        {toppingOptions.slice(0, 5).map((top, idx) => (
                            <label key={idx} className="topping-item">
                                <input
                                    type="checkbox"
                                    value={top}
                                    checked={toppings.includes(top)}
                                    onChange={handleToppingChange}
                                /> {top}
                            </label>
                        ))}
                    </div>

                    {/* 2. satır */}
                    <div className="toppings-row">
                        {toppingOptions.slice(5, 10).map((top, idx) => (
                            <label key={idx + 5} className="topping-item">
                                <input
                                    type="checkbox"
                                    value={top}
                                    checked={toppings.includes(top)}
                                    onChange={handleToppingChange}
                                /> {top}
                            </label>
                        ))}
                    </div>

                    {/* 3. satır */}
                    <div className="toppings-row">
                        {toppingOptions.slice(10, 14).map((top, idx) => (
                            <label key={idx + 10} className="topping-item">
                                <input
                                    type="checkbox"
                                    value={top}
                                    checked={toppings.includes(top)}
                                    onChange={handleToppingChange}
                                /> {top}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Sipariş Notu */}
                <div>
                    <label>Sipariş Notu</label><br />
                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                    />
                </div>

                { }
                <div className="summary-row">
                    <div className="quantity">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <div className="total-box">
                        <h4>Sipariş Toplamı</h4>
                        <div className="price-row">
                            <span>Seçimler</span>
                            <span>{selectedToppingsPrice.toFixed(2)}₺</span>
                        </div>
                        <div className="price-row total-price">
                            <strong>Toplam</strong>
                            <strong>{total.toFixed(2)}₺</strong>
                        </div>
                        <Button color="success" block onClick={() => {
                            const order = { size, crust, toppings, note, quantity, total };
                            onSubmit(order);
                        }}>
                            SİPARİŞ VER
                        </Button>
                    </div>

                </div>
                { }

                <button onClick={onClose}>Formu Kapat</button>
            </div>
        </div>
    );
}

export default OrderPage;
