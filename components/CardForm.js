import { useState } from "react";

export default function CardForm({createSellCard, user}) {

  const [checked, setChecked] = useState(false);

  function handleCheckbox(e) {
    e.preventDefault();
    if (!checked) {
      setChecked((checked) => true);
    }
    else {
      setChecked((checked) => false);
    };
    console.log(checked)
  }

  function handleSubmit(event) {


    event.preventDefault();
    const cardInfo = {
      card_name: event.target.name.value,
      // image: event.target.card_image.value,
      condition: event.target.condition.value,
      category: event.target.category.value,
      description: event.target.description.value,
      price: event.target.price.value,
      year_set: event.target.card_year.value,
      card_num: event.target.card_num.value,
      promotional: event.target.promo.value,
      owner: user.id,
    }
    console.log(user);
    createSellCard(cardInfo);
  }

  return (
    <>
      <div className="body">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card name:
              </label>
              <input
                id="name"
                name="name"
                rows="1"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter card name here..."
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="condition"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card condition:
              </label>
              <select
                id="condition"
                name="condition"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card category:
              </label>
              <select
                id="category"
                name="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Placeholder</option>
                <option>Placeholder</option>
                <option>Placeholder</option>
                <option>Placeholder</option>
              </select>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card description:
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tell us a bit more about your card..."
              ></textarea>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card price:
              </label>
              <textarea
                id="price"
                name="price"
                rows="1"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the price you'd like to sell your car for here..."
              ></textarea>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card year:
              </label>
              <textarea
                id="year"
                name="card_year"
                rows="1"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the card's year here..."
              ></textarea>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <label
                htmlFor="number"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Card number:
              </label>
              <textarea
                id="number"
                name="card_num"
                rows="1"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter the card's number here..."
              ></textarea>
            </div>
            <div>
              {/* <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="user_avatar"
              >
                Picture upload:
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                id="user_avatar"
                name="card_image"
                type="file"
              ></input>
              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                Please provide an image that accurately represents the current
                condition of the card.
              </div> */}
              <input id="promo" name="promo" type="checkbox" onChange={handleCheckbox} value={checked}/>
              <label>
                Promotional
              </label>
            </div>
            <div className="submit-button-container">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
