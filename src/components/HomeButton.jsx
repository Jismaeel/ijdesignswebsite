import { Link } from "react-router-dom";

const HomeButton = ({ text }) => {
  return (
    <>
      <div className="mx-auto max-w-screen-sm text-center py-10">
        <Link
          to="/projects"
          type="button"
          className="px-20 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm py-2.5 text-center me-2 mb-2"
        >
          {text}
        </Link>
      </div>
    </>
  );
};

export default HomeButton;
