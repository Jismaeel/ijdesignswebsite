
const PortfolioLink = ({ homepageImg, urlLink}) => {
  return ( 
    <div>
      <a
        href={urlLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={homepageImg}
          alt="Homepage of Example Website"
          className="w-full h-auto border-2 border-white rounded-md shadow-lg hover:opacity-80 transition-opacity duration-300"
        />
      </a>
    </div>
  );
};

export default PortfolioLink;
