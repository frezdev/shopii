import { useState } from 'react';
import { OrderCounter } from '../order_counter';

export const CardShoppingCart = ({ image, title, price, handleClick }) => {
  const [productCount, setProductCount] = useState(1);
  return (
    <li>
      <article className='flex overflow-hidden shadow-md rounded p-4 items-center justify-between border border-gray-200'>
        <section className="w-[60%] flex gap-6">
          <figure className='w-[80%] max-w-[70px]'>
            <img className='aspect-square h-full object-cover' src={image} alt={title} />
          </figure>
          <section className='flex flex-col justify-between'>
            <p className='text-lg font-semibold line-clamp-1'>{title}</p>
            <button
              onClick={handleClick}
              className='text-blue-600 w-fit font-medium text-sm'
            >
              Eliminar
            </button>
          </section>
        </section>
        <section>
          <OrderCounter
            value={productCount}
            decrement={() => setProductCount(productCount - 1)}
            increment={() => setProductCount(productCount + 1)}
          />
        </section>
        <section className='w-[20%] text-end'>
          <span className='text-xl font-bold block'>${price}</span>
        </section>
      </article>
    </li>
  );
};
