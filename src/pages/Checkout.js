import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
  return (
    <div className='w-full flex flex-col overflow-hidden bg-textColor2'>
        <p className='ml-44 my-4 font-bold text-lg'><FontAwesomeIcon icon={faArrowLeftLong} className='pr-2'/>CheckOut</p>
        <p className='ml-44 my-4 font-bold text-lg'>Billing Information</p>
      <div className='flex flex-col justify-start items-center my-6 bg-textColor2 w-3/5'>
        <div>
            <div className='flex space-x-8'>
                <div>
                    <p>First Name</p>
                    <span className='border rounded-lg w-24 border-black'>
                        <input
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder='Chisom'
                        />
                    </span>
                </div>
                <div>
                    <p>Last Name</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder='Lewis'
                        />
                    </span>
                </div>
            </div>
            <div className='my-6'>
                <div>
                    <p>Country of Residence</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder=''
                        />
                    </span>
                </div>
            </div>
            <div className='my-6'>
                <div>
                    <p>Street Address</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            id="street-address"
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder=''
                        />
                    </span>
                </div>
            </div>
            <div className='my-6 flex space-x-8'>
                <div>
                    <p>Town/City</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            id="city"
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder=''
                        />
                    </span>
                </div>
                <div>
                    <p>Phone Number</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder=''
                        />
                    </span>
                </div>
            </div>
            <div className='my-6'>
                <div>
                    <p>Postal Code</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            id="postal-code"
                            type='text'
                            className='px-4 w-full h-full'
                            placeholder=''
                        />
                    </span>
                </div>
            </div>
            <div className='my-6'>
                <div>
                    <p>Email address</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <input
                            id="email"
                            type='email'
                            className='px-4 w-full h-full'
                            placeholder='example@example.com'
                        />
                    </span>
                </div>
            </div>
            <div className='my-6'>
                <div>
                    <p>Order Note</p>
                    <span className='border rounded-xl w-24 border-black'>
                        <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"></textarea>
                    </span>
                </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-center my-12 bg-textColor2 w-2/5'>
      </div>
    </div>
  );
};

export default Checkout;