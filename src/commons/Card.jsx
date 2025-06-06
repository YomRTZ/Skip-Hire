const Card = ({ children }) => (
  <div className="bg-brand-light shadow-lg rounded-lg overflow-hidden w-full transition-all duration-300 hover:shadow-xl h-80">
    <div className="pb-6 sm:pb-6  md:pb-8  lg:pb-8 xl:pb-8">
      {children}
    </div>
  </div>
);
export default Card;