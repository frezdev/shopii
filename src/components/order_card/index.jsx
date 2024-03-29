import { Image } from '../image';

export const OrderCard = ({ image, title, price, handleClick }) => {
  return (
    <article className='bg-white h-fit grid grid-cols-[1fr_4fr] overflow-hidden border-b border-gray-300'>
      <figure className="aspect-square h-full">
        <Image className='bg-gray-200 aspect-square h-full object-cover' src={image} alt={title} />
      </figure>
      <section className='flex flex-col justify-between p-2'>
        <p className='text-lg font-light line-clamp-1'>{title}</p>
        <span className='text-xl font-bold block'>${price}</span>
        {handleClick && (
          <button
            onClick={handleClick}
            className='text-blue-600 w-fit self-end text-sm'
          >
            Eliminar
          </button>
        )}
      </section>
    </article>
  );
};
