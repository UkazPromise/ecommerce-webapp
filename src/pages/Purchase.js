import React from 'react';

const Purchase = ({ cart }) => {
  return (
    <div className='flex justify-start items-center my-6'>
      <div className='h-auto p-4 w-[1200px]'>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className='flex border rounded-lg p-4 my-4 w-full'>
              <img src={item.image} alt={item.name} className='w-28 h-28 mr-4' />
              <div className='flex flex-col justify-between'>
                <p className='text-sm font-semibold'>{item.name}</p>
                <p className='text-xs my-2'>Size: {item.size}</p>
                <p className='text-xs my-2'>Quantity: {item.quantity}</p>
                <p className='text-xs my-2'>Total Cost: ${item.totalCost.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Purchase;
