import React from 'react';

const ProductGrid = ({ title, products }) => {
  return (
    <>
      <h2 className="text-[#0e171b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col gap-3 pb-3">
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{ backgroundImage: `url('${product.image}')` }}
            ></div>
            <div>
              <p className="text-[#0e171b] text-base font-medium leading-normal">{product.name}</p>
              <p className="text-[#4e7f97] text-sm font-normal leading-normal">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductGrid;