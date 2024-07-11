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
    <div className='flex-col my-12 overflow-hidden bg-textColor2 lg:flex lg:flex-col lg:items-center lg:overflow-hidden'>
      <div className='grid grid-cols-2 gap-2 px-2 lg:grid lg:grid-cols-3 lg:gap-4'>
        {displayedProducts.map((product, displayIndex) => {
          const productIndex = (currentPage - 1) * itemsPerPage + displayIndex;
          return (
            <div key={product.id} className='border rounded-lg border-spacing-2 w-40 h-60 p-2 shadow-xl 
            lg:border lg:rounded-lg lg:border-spacing-4 lg:w-52 lg:h-96 lg:p-4 lg:shadow-xl'>
              <img src={product.image} alt={product.name} className='w-20 h-24 lg:w-44 lg:h-52 '/>
              <p className='text-xs my-2'>{product.name}</p>
              <div className='flex space-x-2 mb-2 lg:mb-4'>
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
              <p className='my-0 font-semibold lg:my-2 lg:font-semibold'>${productStates[productIndex].totalCost.toFixed(2)}</p>
              <div className='flex'>
                  <div className='border rounded-lg border-spacing-2 w-1/2 flex mb-2 lg:border lg:rounded-lg 
                  lg:border-spacing-4 lg:w-full lg:flex 
                  lg:justify-center lg:items-center lg:text-xs lg:border-textColor1'>
                    <button
                      className='px-1 py-0 border-r lg:border-r lg:px-2 lg:py-1'
                      onClick={() => handleQuantityChange(productIndex, -1)}
                    >
                      -
                    </button>
                    <span>{productStates[productIndex].quantity}</span>
                    <button
                      className='px-1 border-l py-0 lg:border-l lg:px-2 lg:py-1'
                      onClick={() => handleQuantityChange(productIndex, 1)}
                    >
                      +
                    </button>
                    
                  </div>
                  <div>
                    <button
                        className='border rounded-lg border-spacing-2 ml-2 w-16 h-6 text-wrap text-center 
                        text-xs bg-textColor1 text-textColor2 lg:border lg:rounded-lg 
                        lg:border-spacing-4 lg:ml-4 lg:w-28 lg:h-8 
                        lg:text-center 
                        lg:text-xs lg:bg-textColor1 lg:text-textColor2'
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
      <div className='flex justify-center mt-2 mb-2 lg:mt-4'>
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
