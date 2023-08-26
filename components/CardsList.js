import Image from 'next/image';

export default function CardsList({ cards }) {
  return (
    <div className='flex justify-center'>
      <div className="grid grid-cols-5 gap-x-24 bg-gray-100 p-4">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              name={card.card_name}
              image={card.image}
              price={card.price}
              condition={card.condition}
              description={card.description}
              yearSet={card.year_set}
              cardNum={card.card_num}
              promo={card.promotional}
              category={card.category}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card({ name, image, price, condition, description, yearSet, cardNum, promo }) {
  return (
    <>
      <div className="max-w-sm bg-white border-4 border-orange-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4 w-72 h-max">
        <a href="#" className="flex justify-center pt-4">
          <Image
            src="/brenden.jpeg"
            alt="Card's image"
            objectFit="cover"
            width={200}
            height={150}
            className="rounded"
          />
        </a>
        <div className="p-5">
          <a href="#" className="block">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {price}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {yearSet}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Card #: {cardNum}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Condition: {condition}</p>
          {promo ? (
            <label className="inline-flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none w-5 h-5 border border-green-500 rounded checked:bg-green-500 checked:border-transparent"
                checked
                disabled
              />
              <span className="text-green-500">Promotional</span>
            </label>
          ) : (
            <label className="inline-flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none w-5 h-5 border border-red-500 rounded checked:bg-red-500 checked:border-transparent"
                disabled
              />
              <span className="text-red-500">Not Promotional</span>
            </label>
          )}
          <div className="flex justify-end mt-4">
            <button className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600">Buy</button>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 clicked:bg-red-500">Wishlist</button>
          </div>
        </div>
      </div>

    </>
  )
}