import React from "react";
import "./SuccessImageScreen.css";


function SuccessImageScreen({ onShowSummary }) {
    return (
        <>
            <div className="success-image-screen">
                <img
                    className="success-image"
                    src="sample-interfaces/iteration-1/Success.png"
                    alt="Sipariş Onayı"
                />
                {/* Buton resmi kaplamayacak şekilde overlay olarak yerleştirildi */}
                <button onClick={onShowSummary} className="summary-button">
                    Sipariş Özetini Gör
                </button>

            </div>

        </>

    );
}

export default SuccessImageScreen;
