export const Card = ({ onClick, image = "", imageAlt = "", title = "" }) => {
    return (
      <div
        className="card rounded sm:h-[150px] sm:py-6 py-2 px-4 sm:px-6 relative cursor-pointer"
        onClick={onClick}
      >
        <h4 className="font-bold tracking-widest">{title}</h4>
        <div className="img-box w-[30px] hidden sm:block absolute right-2 bottom-2">
          <img src={image} alt={imageAlt} />
        </div>
      </div>
    );
  };