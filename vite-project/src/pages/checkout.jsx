import React, { useState, useEffect } from 'react';
import { api } from "../utils/utils";

function Order() {
    const [formData, setFormData] = useState({
        total_price: '',
        amount: '', 
        phoneNumber: '' 
    });

    
    // const [orderData, setOrderData] = useState(null);

    // useEffect(() => {
    //     const fetchOrderData = async () => {
    //         try {
    //             const response = await api.get('/orders');
    //             setOrderData(response.data);
    //         } catch (error) {
    //             console.error('Error fetching order data:', error);
    //         }
    //     };

    //     fetchOrderData();
    // }, []); // Empty dependency array to run effect only once on mount

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrderAndPayment = async (e) => {
        e.preventDefault();

        try {
            const orderResponse = await api.post('/orders', {
                total_price: formData.total_price,
                status: 'Pending'
            });
            console.log(orderResponse.data);

            if (orderResponse.status === 201) {
                const paymentResponse = await api.post('/payments', {
                    amount: formData.amount,
                    phoneNumber: formData.phoneNumber
                });
                console.log(paymentResponse.data);
            }
        } catch (error) {
            console.error('Error placing order or making payment:', error);
        }
    };

    return (
        <div style={container}>
            <div style={card}>
                <h1>Order and Payment</h1>
                <form onSubmit={handlePlaceOrderAndPayment}>
                    <div style={formGroupStyle}>
                        <label>Total Price:</label>
                        <input
                            type="number"
                            name="total_price"
                            value={formData.total_price}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label>Amount:</label>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label>Phone Number:</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <button type="submit" style={buttonStyle}>Place Order and Pay</button>
                </form>
                {/* {orderData && (
                   <div>
                   <h2>Recent Orders</h2>
                   <ul>
                       {orderData.map((order, index) => (
                           <li key={index}>
                               <div>
                                   <p>Total Price: {order.total_price}</p>
                                   <p>Status: {order.status}</p>
                               </div>
                           </li>
                       ))}
                   </ul>
               </div> */}
               
                {/* )} */}
            </div>
        </div>
    );
}

const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

const card = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
};

const formGroupStyle = {
    marginBottom: '15px',
};

const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
};

export default Order;
