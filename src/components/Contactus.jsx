const Contactus = () => {
  return (
    <>
      <section className="bg-gray-900 lg:px-32 py-10">
        <h1
          id="Contactus"
          className="text-center font-bold text-3xl text-white"
        >
          Contact us
        </h1>
        <div className="px-10 pb-2 pt-7">
          <label class="block mb-2 text-sm font-medium text-white">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="pb-2 px-10">
          <label class="block mb-2 text-sm font-medium text-white">
            Your email
          </label>
          <input
            type="email"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class="text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-400">
            We wll never share your details. Read our
            <a href="#" class="font-medium  hover:underline text-blue-500 pl-2">
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="pb-2 px-10">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <div className="pb-2 px-10">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Contactus;
