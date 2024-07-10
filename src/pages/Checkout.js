import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

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
    <div className='w-full flex overflow-hidden bg-textColor2'>
      <div className='flex flex-col justify-start items-center my-6 bg-textColor2 w-3/5'>
        <p className='ml-44 my-4 font-bold text-lg'>
          <FontAwesomeIcon icon={faArrowLeftLong} className='pr-2' />
          CheckOut
        </p>
        <p className='ml-44 my-4 font-bold text-lg'>Billing Information</p>
        <div className='h-auto p-4 w-full'>
          <div className='flex space-x-8'>
            <div>
              <p>First Name</p>
              <span className='border rounded-lg w-48 border-black'>
                <input
                  type='text'
                  name='firstName'
                  value={form.firstName}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                  placeholder='Chisom'
                />
                {errors.firstName && <span className='text-red-500'>{errors.firstName}</span>}
              </span>
            </div>
            <div>
              <p>Last Name</p>
              <span className='border rounded-lg w-48 border-black'>
                <input
                  type='text'
                  name='lastName'
                  value={form.lastName}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                  placeholder='Lewis'
                />
                {errors.lastName && <span className='text-red-500'>{errors.lastName}</span>}
              </span>
            </div>
          </div>
          <div className='my-6'>
            <div>
              <p>Country of Residence</p>
              <span className='border rounded-lg w-96 border-black'>
                <input
                  type='text'
                  name='country'
                  value={form.country}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                />
                {errors.country && <span className='text-red-500'>{errors.country}</span>}
              </span>
            </div>
          </div>
          <div className='my-6'>
            <div>
              <p>Street Address</p>
              <span className='border rounded-lg border-black w-96 h-8'>
                <input
                  type='text'
                  name='streetAddress'
                  value={form.streetAddress}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                />
                {errors.streetAddress && <span className='text-red-500'>{errors.streetAddress}</span>}
              </span>
            </div>
          </div>
          <div className='my-6 flex space-x-8'>
            <div>
              <p>Town/City</p>
              <span className='border rounded-lg w-48 border-black'>
                <input
                  type='text'
                  name='city'
                  value={form.city}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                />
                {errors.city && <span className='text-red-500'>{errors.city}</span>}
              </span>
            </div>
            <div>
              <p>Phone Number</p>
              <span className='border rounded-lg w-48 border-black'>
                <input
                  type='text'
                  name='phone'
                  value={form.phone}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                />
                {errors.phone && <span className='text-red-500'>{errors.phone}</span>}
              </span>
            </div>
          </div>
          <div className='my-6'>
            <div>
              <p>Postal Code</p>
              <span className='border rounded-lg w-48 border-black'>
                <input
                  type='text'
                  name='postalCode'
                  value={form.postalCode}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                />
                {errors.postalCode && <span className='text-red-500'>{errors.postalCode}</span>}
              </span>
            </div>
          </div>
          <div className='my-6'>
            <div>
              <p>Email address</p>
              <span className='border rounded-lg w-96 border-black'>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  className='px-4 w-full h-full'
                  placeholder='example@example.com'
                />
                {errors.email && <span className='text-red-500'>{errors.email}</span>}
              </span>
            </div>
          </div>
          <div className='my-6'>
            <div>
              <p>Order Note</p>
              <span className='border rounded-lg w-96 border-black'>
                <textarea
                  id='orderNote'
                  name='orderNote'
                  rows='3'
                  value={form.orderNote}
                  onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600'
                ></textarea>
              </span>
            </div>
          </div>
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
          <div className='w-full my-2'>
            <p className='text-lg font-semibold'>Payment Method</p>
            <div className='flex flex-col space-y-2'>
              <button className='border rounded-lg w-full h-8'>Direct Bank Transfer</button>
              <button className='border rounded-lg w-full h-8'>PayPal</button>
              <button className='border rounded-lg w-full h-8'>Check Payment</button>
            </div>
          </div>
          <div className='w-full my-2'>
            <input type='checkbox' id='terms' />
            <label htmlFor='terms' className='pl-2'>
              I acknowledge the terms and conditions
            </label>
          </div>
          <button className='border rounded-lg bg-textColor1 w-full h-8 text-textColor2 text-center' onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
