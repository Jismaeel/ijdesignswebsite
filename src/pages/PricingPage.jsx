import { Link } from "react-router-dom";
import PricingCard from "../components/PricingCard";

const PriceingPage = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <Link to="/" className="hidden lg:block md:block">
            <svg
              className="w-[48px] rounded-md h-[48px] text-gray-800 hover:bg-slate-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </Link>

          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
              Designed for business like yours
            </h2>
            <p className="mb-5 font-light sm:text-xl text-gray-400">
              Get the best Designs for a affordable price.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <PricingCard
              title={"Posters/Business Cards"}
              discription={"Get Custom Designs only for"}
              price={"R195"}
              addItems1={"Custom Designs"}
              addItems2={"Editing files"}
              addItems3={"Free Revision"}
            />
            <PricingCard
              title={"Logos"}
              discription={"Get Custom Designs only for"}
              price={"R650"}
              addItems1={"Custom Designs"}
              addItems2={"Editing files"}
              addItems3={"Free Revision"}
            />
            <PricingCard
              title={"Website Designs"}
              discription={"Get Custom Designs only for"}
              price={"R900"}
              addItems1={"Custom Designs"}
              addItems2={"Editing files"}
              addItems3={"Free Revision"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceingPage;
