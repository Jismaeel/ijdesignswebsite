import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <Link
              to='/about'
              className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-blue-400 mb-2"
            >
              <svg
                className="w-2.5 h-2.5 me-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
              </svg>
              Get the best Creative work
            </Link>
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
              Welcome to Ij Designs
            </h1>
            <p className="text-lg font-normal text-gray-400 mb-6">
              Were you get the best Visual Comunication Designs with a
              affordable price range.
            </p>
            <Link
              to="/about"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900"
            >
              Read more
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Design
              </a>
              <h2 className=" text-white text-3xl font-extrabold mb-2">
                Start with Custom Visual designs
              </h2>
              <p className="text-lg font-normal text-gray-400 mb-4">
                Looking for custom visual designs at an affordable price? Let's
                create something amazing together! Whether you need a website, a
                logo, or any other visual element, I can help you bring your
                vision to life without breaking the bank. Contact me to get
                started!
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Website Design
              </a>
              <h2 className="text-white text-3xl font-extrabold mb-2">
                or Custom Website Designs
              </h2>
              <p className="text-lg font-normal text-gray-400 mb-4">
                Looking for a custom static website at an affordable price? Look
                no further! We offer tailored solutions to fit your needs and
                budget. Get in touch with us today to discuss your project and
                get started on building a beautiful, functional website that
                stands out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection
