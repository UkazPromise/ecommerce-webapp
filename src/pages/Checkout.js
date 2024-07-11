import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const Checkout = () => {
  const location = useLocation();
  const { subtotal, shippingFee, grandTotal, cart } = location.state || {
    subtotal: 0,
    shippingFee: 0,
    grandTotal: 0,
    cart: [],
  };

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    city: '',
    phone: '',
    postalCode: '',
    email: '',
    orderNote: '',
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    Object.keys(form).forEach(key => {
      if (!form[key] && key !== 'orderNote') {
        tempErrors[key] = 'This field is required';
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      alert('Your Order has been placed.');
      navigate('/');
    }
  };

  return (
    <>
      <div className='w-full flex-col lg:flex overflow-hidden bg-textColor2'>
        <div className='flex flex-col justify-start my-6 bg-textColor2 w-full lg:w-3/5 ml-0 lg:ml-8'>
          <p className='ml-6 my-4 font-bold text-lg'>
            <FontAwesomeIcon icon={faArrowLeftLong} className='pr-2' />
            CheckOut
          </p>
          <p className='ml-6 my-4 font-bold text-lg'>Billing Information</p>
          <div className='h-auto p-4 w-full space-y-10'>
            <div className='flex space-x-8'>
              <div>
                <p className='font-bold'>First Name*</p>
                <span className='border rounded-lg w-48 border-black'>
                  <input
                    type='text'
                    name='firstName'
                    value={form.firstName}
                    onChange={handleChange}
                    className='px-4 w-full h-full border rounded-lg border-black bg-textColor2'
                    placeholder='Chisom'
                  />
                  {errors.firstName && <span className='text-red-500 text-xs'>{errors.firstName}</span>}
                </span>
              </div>
              <div >
                <p className='font-bold'>Last Name</p>
                <span className='border rounded-lg w-48 border-black'>
                  <input
                    type='text'
                    name='lastName'
                    value={form.lastName}
                    onChange={handleChange}
                    className='px-4 w-full h-full border rounded-lg border-black bg-textColor2'
                    placeholder='Lewis'
                  />
                  {errors.lastName && <span className='text-red-500 text-xs'>{errors.lastName}</span>}
                </span>
              </div>
            </div>
            <div className='my-8'>
              <div>
                <p className='font-bold'>Country of Residence</p>
                <span>
                  <input
                    type='text'
                    name='country'
                    value={form.country}
                    onChange={handleChange}
                    className='px-4 w-[350px] lg:w-[470px] h-12 border rounded-lg border-black bg-textColor2'
                  />
                  {errors.country && <span className='text-red-500 text-xs'>{errors.country}</span>}
                </span>
              </div>
            </div>
            <div className='my-6'>
              <div>
                <p className='font-bold'>Street Address</p>
                <span className='border rounded-lg border-black w-96 h-8'>
                  <input
                    type='text'
                    name='streetAddress'
                    value={form.streetAddress}
                    onChange={handleChange}
                    className='px-4 w-[350px] lg:w-[470px] h-12 border rounded-lg border-black bg-textColor2'
                  />
                  {errors.streetAddress && <span className='text-red-500 text-xs'>{errors.streetAddress}</span>}
                </span>
              </div>
            </div>
            <div className='my-6 flex space-x-8'>
              <div>
                <p className='font-bold'>Town/City</p>
                <span>
                  <input
                    type='text'
                    name='city'
                    value={form.city}
                    onChange={handleChange}
                    className='px-4 w-full h-full border rounded-lg border-black bg-textColor2'
                  />
                  {errors.city && <span className='text-red-500 text-xs'>{errors.city}</span>}
                </span>
              </div>
              <div>
                <p className='font-bold'>Phone Number</p>
                <span>
                  <input
                    type='text'
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    className='px-4 w-full h-full border rounded-lg border-black bg-textColor2'
                  />
                  {errors.phone && <span className='text-red-500 text-xs'>{errors.phone}</span>}
                </span>
              </div>
            </div>
            <div className='my-6'>
              <div>
                <p className='font-bold'>Postal Code</p>
                <span>
                  <input
                    type='text'
                    name='postalCode'
                    value={form.postalCode}
                    onChange={handleChange}
                    className='px-4 w-[350px] lg:w-[470px] h-12 border rounded-lg border-black bg-textColor2'
                  />
                  {errors.postalCode && <span className='text-red-500 text-xs'>{errors.postalCode}</span>}
                </span>
              </div>
            </div>
            <div className='my-6'>
              <div>
                <p className='font-bold'>Email address</p>
                <span className='border rounded-lg w-96 border-black'>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    className='px-4 w-[350px] lg:w-[470px] h-12 border rounded-lg border-black bg-textColor2'
                    placeholder='example@example.com'
                  />
                  {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
                </span>
              </div>
            </div>
            <div className='my-6'>
              <div>
                <p className='font-bold'>Order Note</p>
                <span>
                  <textarea
                    id='Note about your order'
                    name='orderNote'
                    rows='3'
                    value={form.orderNote}
                    onChange={handleChange}
                    className='px-4 w-[350px] lg:w-[470px] h-12 rounded-lg bg-textColor2 border border-black'
                  ></textarea>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-center my-12 bg-textColor2 w-full lg:w-2/5 lg:mr-8'>
          <div className='flex flex-col justify-center lg:justify-between items-center border rounded-lg p-2 lg:p-4 lg:mx-4 w-full border-textColor1'>
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
            <hr className='my-4 border-textColor1 border w-full' />
            <div className='w-full my-2'>
              <div className='flex flex-col space-y-2'>
                <div>
                  <span className='flex'>
                    <input
                      type='radio'
                      name='paymentMethod'
                      value='Bank Transfer'
                      checked={paymentMethod === 'Bank Transfer'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <p className='px-2'>Direct Bank Transfer</p>
                  </span>
                  <p className='px-6'>
                    Make your payment directly into our bank
                    <br />account. Please use your order ID as the payment
                    <br />reference. Your order won't be shipped until the
                    <br />funds have cleared in our account.
                  </p>
                </div>
                <p className='text-lg font-semibold'>Payment Method</p>
                <span className='flex'>
                  <input
                    type='radio'
                    name='paymentMethod'
                    value='PayPal'
                    checked={paymentMethod === 'PayPal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <p>PayPal</p>
                </span>
                <span className='flex'>
                  <input
                    type='radio'
                    name='paymentMethod'
                    value='Check Payment'
                    checked={paymentMethod === 'Check Payment'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <p>Check Payment</p>
                </span>
              </div>
            </div>
            <hr className='my-4 border-textColor1 border w-full' />
            <div className='w-full my-2'>
              <input type='checkbox' id='terms' />
              <label htmlFor='terms' className='pl-2'>
                I acknowledge the terms and conditions
              </label>
            </div>
            <button
              className='border rounded-lg bg-textColor1 w-full h-8 text-textColor2 text-center'
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
