
import "./OrderSuccess.css"

function OrderSuccess({ order }) {
    return (
        <div className="order-success">
            <img src="sample-interfaces\iteration-1\Success.png" alt="Sipariş Onaylandı" />
            <h2>Siparişiniz Alındı!</h2>
            <p>Teşekkür ederiz. Sipariş özetiniz aşağıdadır:</p>

            <ul>
                <li><strong>Boyut:</strong> {order.size}</li>
                <li><strong>Hamur:</strong> {order.crust}</li>
                <li><strong>Ek Malzemeler:</strong> {order.toppings.join(", ") || "Yok"}</li>
                <li><strong>Adet:</strong> {order.quantity}</li>
                <li><strong>Toplam Tutar:</strong> {order.total.toFixed(2)}₺</li>
            </ul>
        </div>
    );
}

export default OrderSuccess;
