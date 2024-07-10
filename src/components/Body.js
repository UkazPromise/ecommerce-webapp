import React, { useState } from 'react';

const Body = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'SHEIN: Roupas femininas gown', image: './image1.png', price: 39.99 },
    { id: 2, name: 'SAFEIRODO: Long Sleeve loose gown', image: './image2.png', price: 59.99 },
    { id: 3, name: 'FISDY: Stylish long Sleeve dress with flounced Hem', image: './image3.png', price: 70.00 },
    { id: 4, name: 'Sweet Elegance Solid Fold Square Collar A line gown', image: './image4.png', price: 99.99 },
    { id: 5, name: 'Surplice Neck Tie Waist Long Sleeve  Dress', image: './image5.png', price: 85.00 },
    { id: 6, name: 'Rushed V Neck Bodycon Mini Dress', image: './image6.png', price: 99.99 },
    { id: 7, name: 'SHEIN: Ruffled Floral Bodycon  gown', image: './image7.png', price: 59.99 },
    { id: 8, name: 'FISDY: Classic V Neck Wrapped  gown', image: './image8.png', price: 59.99 },
    { id: 9, name: 'Safereido: Long Sleeve loose gown', image: './image9.png', price: 59.99 },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [productStates, setProductStates] = useState(
    products.map((product) => ({
      selectedSize: '',
      quantity: 1,
      totalCost: product.price,
    }))
  );

  const handleSizeSelect = (index, size) => {
    const newProductStates = [...productStates];
    newProductStates[index].selectedSize = size;
    setProductStates(newProductStates);
  };

  const handleQuantityChange = (index, change) => {
    const newProductStates = [...productStates];
    const product = products[index];
    if (newProductStates[index].selectedSize) {
      const newQuantity = newProductStates[index].quantity + change;
      if (newQuantity >= 1) {
        newProductStates[index].quantity = newQuantity;
        newProductStates[index].totalCost = product.price * newQuantity;
        setProductStates(newProductStates);
      }
    }
  };

  const handleAddToCart = (index, product) => {
    const state = productStates[index];
    if (state.selectedSize) {
      addToCart({ ...product, size: state.selectedSize, quantity: state.quantity, totalCost: state.totalCost });
    } else {
      alert('Please select a size first.');
    }
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(totalPages);
    } else if (pageNumber > totalPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className='flex flex-col items-center overflow-hidden'>
      <div className='grid grid-cols-3 gap-4'>
        {displayedProducts.map((product, displayIndex) => {
          const productIndex = (currentPage - 1) * itemsPerPage + displayIndex;
          return (
            <div key={product.id} className='border rounded-lg border-spacing-4 w-52 h-96 p-4 shadow-xl'>
              <img src={product.image} alt={product.name} className='w-44 h-52'/>
              <p className='text-xs my-2'>{product.name}</p>
              <div className='flex space-x-2 mb-4'>
                {['S', 'M', 'L', 'XL'].map((size) => (
                  <p
                    key={size}
                    className={`border rounded-full border-spacing-4 w-6 h-5 text-center text-xs cursor-pointer ${productStates[productIndex].selectedSize === size ? 'bg-blue-300' : ''}`}
                    onClick={() => handleSizeSelect(productIndex, size)}
                  >
                    {size}
                  </p>
                ))}
              </div>
              <p className='my-2 font-semibold'>${productStates[productIndex].totalCost.toFixed(2)}</p>
              <div className='flex'>
                  <div className='border rounded-lg border-spacing-4 w-full flex justify-center items-center text-xs border-textColor1'>
                    <button
                      className='border-r px-2 py-1'
                      onClick={() => handleQuantityChange(productIndex, -1)}
                    >
                      -
                    </button>
                    <span>{productStates[productIndex].quantity}</span>
                    <button
                      className='border-l px-2 py-1'
                      onClick={() => handleQuantityChange(productIndex, 1)}
                    >
                      +
                    </button>
                    
                  </div>
                  <div>
                    <button
                        className='border rounded-lg border-spacing-4 ml-4 w-28 h-8 text-center text-xs bg-textColor1 text-textColor2'
                        onClick={() => handleAddToCart(productIndex, product)}
                      >
                        Add to cart
                    </button>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex justify-center mt-4'>
        <button
          className='px-3 py-1 mx-1 border rounded'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 mx-1 border rounded ${currentPage === index + 1 ? 'bg-blue-300' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className='px-3 py-1 mx-1 border rounded'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Body;
