import Testmo2 from "../img/akeedah.webp";
import Testmo from "../img/sydney.webp";

const Testamonials = () => {
  return (
    <>
      <section className="bg-gray-900">
        <div className=" px-4 py-8 mx-auto text-center" />
        <div className="mx-auto">
          <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-white">
            Testimonials
          </h2>
          <p className="mb-8 font-light lg:mb-16 text-center sm:text-xl text-gray-400">
            Discover what our satisfied clients have to say about their
            experiences with our services.
          </p>
        </div>
        <div className="grid pb-9 lg:grid-cols-2 px-10">
          <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r bg-gray-800 border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
              <p className="my-4">
                Ij-Designs exceeded my expectations with their creativity and
                attention to detail. Their professionalism and expertise were
                evident throughout the process. I highly recommend them for
                anyone seeking exceptional design services.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={Testmo}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>Sydney Alexander</div>
                <div className="text-sm font-light text-gray-400">
                  Owner of Skylas Driving School
                  <br />
                  Chairmen of The Mitchells Plain Driving School Association
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 bg-gray-800 border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
              <p className="my-4">
                Working with ij Designs was a delight. Their attention to detail
                and innovative approach made my project a success. I highly
                recommend them for their exceptional design services.
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={Testmo2}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>Akeedah Jansen</div>
                <div className="text-sm font-light text-gray-400">
                  Owner of Hairtopia
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};

export default Testamonials;
