import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Purchase = ({ cart, removeFromCart }) => {
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const handleApplyCoupon = () => {
    // Assuming the coupon code 'DISCOUNT' is valid
    if (couponCode === 'DISCOUNT') {
      setMessage('Coupon activated');
      setTimeout(() => {
        navigate('/checkout'); // Navigate to the checkout page
      }, 2000);
    } else {
      setMessage('Invalid coupon code');
    }
  };

  const shippingFee = 30;
  const subtotal = cart.reduce((sum, item) => sum + item.totalCost, 0);
  const grandTotal = subtotal + shippingFee;

  return (
    <div className='w-full flex overflow-hidden bg-textColor2'>
      <div className='flex flex-col justify-start items-center my-6 bg-textColor2 w-3/5'>
        <div className='h-auto p-4 w-full'>
          {cart.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <div>
              {cart.map((item, index) => (
                <div key={index} className='flex border rounded-lg p-4 my-4 w-full h-1/2 border-textColor1'>
                  <img src={item.image} alt="Selected item" className='w-28 h-20' />
                  <span className='flex flex-col ml-4'>
                    <p className='text-xs my-2 font-semibold'>Name: {item.name}</p>
                    <p className='text-xs my-2'>Size: {item.size}</p>
                    <p className='text-xs my-2'>Quantity: {item.quantity}</p>
                    <p className='text-xs my-2'>Total Cost: ${item.totalCost.toFixed(2)}</p>
                  </span>
                  <button
                    className='border rounded-lg h-8 w-20 justify-end border-textColor1 mt-24 ml-auto'
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col justify-start items-center my-12 bg-textColor2 w-2/5'>
        <div className='flex flex-col justify-between items-center border rounded-lg p-4 mx-4 w-full border-textColor1'>
          <p className='font-semibold text-lg'>Order Summary</p>
          <div className='flex justify-between w-full mb-2'>
            <p className='text-lg font-semibold'>Subtotal:</p>
            <p className='text-lg font-semibold'>${subtotal.toFixed(2)}</p>
          </div>
          <div className='flex justify-between w-full mb-2'>
            <p className='text-lg font-semibold'>Shipping Fee:</p>
            <p className='text-lg font-semibold'>${shippingFee.toFixed(2)}</p>
          </div>
          <div className='flex justify-between w-full'>
            <p className='text-lg font-semibold'>Grand Total:</p>
            <p className='text-lg font-semibold'>${grandTotal.toFixed(2)}</p>
          </div>
          <span className='my-2'>
            <button className='border rounded-lg bg-textColor1 w-[500px] h-8 text-textColor2 text-center'>
              Proceed to Checkout
            </button>
          </span>
          <span className='w-[500px] my-2'>
            <p className='text-lg font-semibold'>Coupon Code</p>
          </span>
          <span className='border rounded-lg border-textColor1 w-[500px] h-8'>
            <input
              type='text'
              value={couponCode}
              onChange={handleCouponChange}
              className='px-4 w-full h-full'
              placeholder='Enter coupon code'
            />
          </span>
          <span className='border rounded-lg border-textColor1 w-[500px] h-8 my-2'>
            <button className='px-4 w-full h-full' onClick={handleApplyCoupon}>
              Apply Coupon
            </button>
          </span>
          {message && <p className='text-red-500 mt-2'>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Purchase;