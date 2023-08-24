import Image from 'next/image';

export default function CardsList({cards}) {
  return (
  <>
    {cards.map((card) => {
      return (
        <Card 
          key={card.id}
          // card={card}
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
        )
      })
    }
  </>);
}

function Card({ name, image, price, condition, description, yearSet, cardNum, promo }) {
  return(
    <>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 my-4">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
          <a href="#">
            <Image
              src="/card_image"
              alt="Card's image"
              objectFit="card"
              width={40}
              height={40}
            />
          </a>
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{yearSet}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{cardNum}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{condition}</p>
            {promo ? 
            (<label className="inline-flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" class="appearance-none w-5 h-5 border border-green-500 rounded checked:bg-green-500 checked:border-transparent" checked disabled/>
            <span className="text-green-500" >Promotional</span>
            </label>) :
            (<label className="inline-flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" class="appearance-none w-5 h-5 border border-red-500 rounded checked:bg-red-500 checked:border-transparent" disabled/>
            <span className="text-red-500">Not Promotional</span>
            </label>)}

            {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}