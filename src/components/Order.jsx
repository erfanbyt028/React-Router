import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    productName: '',
    quantity: 1,
    deliveryAddress: '',
    specialInstructions: ''
  });

  const handleInputChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order data to your backend
    console.log('Order submitted:', orderData);
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Place Your Order</h1>
          <p className="text-gray-600">Fill out the form below to complete your order</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={orderData.productName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={orderData.quantity}
              onChange={handleInputChange}
              min="1"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
            />
          </div>

          <div>
            <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Address
            </label>
            <textarea
              id="deliveryAddress"
              name="deliveryAddress"
              value={orderData.deliveryAddress}
              onChange={handleInputChange}
              required
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
              placeholder="Enter your delivery address"
            />
          </div>

          <div>
            <label htmlFor="specialInstructions" className="block text-sm font-medium text-gray-700 mb-2">
              Special Instructions (Optional)
            </label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              value={orderData.specialInstructions}
              onChange={handleInputChange}
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
              placeholder="Any special instructions for delivery"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Product:</span>
                <span className="font-medium">{orderData.productName || 'Not specified'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Quantity:</span>
                <span className="font-medium">{orderData.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Estimated Total:</span>
                <span className="font-medium text-orange-600">${(orderData.quantity * 29.99).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-md"
            >
              Place Order
            </button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Need help? <a href="#" className="text-orange-600 hover:text-orange-800">Contact support</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Order
