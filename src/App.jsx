import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from '../component/Header/Header';
import Card from '../component/Card/Card';
import Food from '../component/Food/Food';
import Footer from '../component/Footer/Footer';
import OrderPage from '../component/OrderPage/OrderPage';
import OrderSuccess from '../component/OrderSuccess/OrderSuccess';
import SuccessImageScreen from '../component/SuccessImageScreen/SuccessImageScreen';
import './media.css';
import './mediaForm.css';


function App() {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderData, setOrderData] = useState(null);
  const [showSuccessImage, setShowSuccessImage] = useState(false);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const handleOrderClick = () => {
    setShowOrderForm(true);
    setOrderConfirmed(false);
    setShowSuccessImage(false);
    setShowOrderSummary(false);
  };

  const handleCloseForm = () => {
    setShowOrderForm(false);
  };

  const handleOrderSubmit = async (formData) => {
    try {
      const response = await axios.post("https://reqres.in/api/pizza", formData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1"
        }
      });

      const apiResponse = response.data;

      const fullOrder = {
        ...formData,
        id: apiResponse.id,
        createdAt: apiResponse.createdAt
      };

      setOrderData(fullOrder);
      setShowOrderForm(false);
      setOrderConfirmed(true);
      setShowSuccessImage(true);
    } catch (error) {
      console.error("Sipariş gönderilemedi:", error);
      alert("Sipariş gönderilemedi. Lütfen tekrar deneyin.");
    }
  };

  return (
    <>

      {showOrderForm ? (
        <div className="fullpage-order">
          <OrderPage onClose={handleCloseForm} onSubmit={handleOrderSubmit} />

        </div>
      ) : showSuccessImage ? (
        <OrderSuccess order={orderData} />
        // <SuccessImageScreen onShowSummary={() => {
        //   setShowSuccessImage(false);
        //   setShowOrderSummary(true);
        // }} />
      ) : (
        <>
          <Header onOrderClick={handleOrderClick} />
          <Card onOrderClick={handleOrderClick} />

          <Food />
          {showOrderSummary && orderConfirmed && <OrderSuccess order={orderData} />}
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
