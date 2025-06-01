import Footer from "../Footer/Footer";
import "./OrderSuccess.css";

function OrderSuccess({ order }) {
    return (
        <>
            <div className="order-success-container">
                <img
                    className="success-bg"
                    src="sample-interfaces/iteration-1/Success.png"
                    alt="Sipariş Onaylandı"
                />
                <div className="success-content">

                    <h3>Position Absolute Acı Pizza</h3>

                    <p><strong>Boyut:</strong> {order.boyut}</p>

                    <p>
                        <strong>Ek Malzemeler:</strong>{" "}
                        {Array.isArray(order.malzemeler) && order.malzemeler.length > 0
                            ? order.malzemeler.join(", ")
                            : "Yok"}
                    </p>

                    <div className="total-box">
                        <h4>Sipariş Toplamı</h4>
                        <div className="total-line">
                            <span>Seçimler ({order.adet} adet)</span>
                            <span>{(order.toplamFiyat / order.adet).toFixed(2)}₺</span>
                        </div>
                        <div className="total-line bold">
                            <span>Toplam</span>
                            <span>{order.toplamFiyat.toFixed(2)}₺</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OrderSuccess;
