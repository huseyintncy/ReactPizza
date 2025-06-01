import { useState } from "react";
import { Button } from 'reactstrap';
import "./OrderPage.css"
import axios from "axios";

function OrderPage({ onClose, onSubmit }) {
    const [size, setSize] = useState("");
    const [crust, setCrust] = useState("");
    const [toppings, setToppings] = useState([]);
    const [note, setNote] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");



    const toppingOptions = [
        // 1. Satır (5)
        "Sucuk", "Sosis", "Kanada Jambonu", "Tavuk Izgara", "Pepperoni",

        // 2. Satır (5)
        "Soğan", "Domates", "Mısır", "Jalapeno", "Sarımsak",

        // 3. Satır (4)
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
                <div className="price-rating-row">
                    <span className="price">{price.toFixed(2)}₺</span>
                    <span className="rating">4.9 <span className="rating-count">(200)</span></span>
                </div>


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
                    <label>Ek Malzemeler </label><br />
                    <p style={{ margin: "0.25rem 0 0.75rem", fontSize: "0.9rem", color: "#555" }}>
                        En fazla 10 malzeme seçebilirsiniz.  <strong>5₺</strong>
                    </p>

                    {/* 1. satır */}
                    <div className="toppings-row">
                        {toppingOptions.map((top, idx) => (
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




                </div>
                {/* İsim inputu */}
                <div>
                    <label>İsim *</label><br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Adınızı giriniz"
                        required
                    />
                    {name.length > 0 && name.length < 3 && (
                        <p style={{ color: "red", fontSize: "0.9rem" }}>
                            İsim en az 3 karakter olmalı
                        </p>
                    )}
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

                        <Button
                            color="success"
                            block
                            onClick={async () => {
                                if (name.length < 3 || !size || !crust || toppings.length < 4) {
                                    alert("Lütfen geçerli bir isim giriniz ve gerekli alanları doldurunuz.");
                                    return;
                                }

                                const formData = {
                                    isim: name,
                                    boyut: size,
                                    hamur: crust,
                                    malzemeler: toppings,
                                    özel: note,
                                    adet: quantity,
                                    toplamFiyat: total
                                };

                                try {
                                    const response = await axios.post(
                                        "https://reqres.in/api/pizza",
                                        formData,
                                        {
                                            headers: {
                                                "Content-Type": "application/json",
                                                "x-api-key": "reqres-free-v1"
                                            }
                                        }
                                    );
                                    console.log("Sipariş başarıyla gönderildi:", response.data);

                                    onSubmit({
                                        ...formData,
                                        id: response.data.id,
                                        createdAt: response.data.createdAt
                                    });
                                } catch (error) {
                                    console.error("Sipariş gönderilemedi:", error.message);
                                    setErrorMessage("Sipariş gönderilemedi. Lütfen internet bağlantınızı kontrol edin.");
                                }
                            }}
                        //disabled={name.length < 3 || !size || !crust}
                        >
                            SİPARİŞ VER
                        </Button>

                        {errorMessage && (
                            <p style={{ color: 'red', fontWeight: 'bold', marginTop: '1rem' }}>
                                {errorMessage}
                            </p>
                        )}



                    </div>

                </div>
                { }

                <button onClick={onClose}>Formu Kapat</button>
            </div>
        </div>
    );
}

export default OrderPage;
