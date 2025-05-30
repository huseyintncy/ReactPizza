import { useState } from 'react';
import './App.css';
import Header from '../component/Header/Header';
import Card from '../component/Card/Card';
import Food from '../component/Food/Food';
import Footer from '../component/Footer/Footer';
import OrderPage from '../component/OrderPage/OrderPage';
import OrderSuccess from '../component/OrderSuccess/OrderSuccess';
import "./index.css"




function App() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const handleOrderClick = () => {
    setShowOrderForm(true);
    setOrderConfirmed(false);
  };

  const handleCloseForm = () => {
    setShowOrderForm(false);
  };

  const handleOrderSubmit = (data) => {
    setOrderData(data);
    setShowOrderForm(false);
    setOrderConfirmed(true);
  };

  return (
    <>
      {showOrderForm ? (
        // Sadece OrderPage gösteriliyor
        <div className="fullpage-order">
          <OrderPage onClose={handleCloseForm} onSubmit={handleOrderSubmit} />
        </div>
      ) : (
        // Normal sayfa içeriği
        <>
          <Header onOrderClick={handleOrderClick} />
          <Card />
          <Food />
          {orderConfirmed && <OrderSuccess order={orderData} />}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
