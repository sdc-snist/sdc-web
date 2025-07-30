function Card(props) {
  return (
    <div className="flex flex-col align-center justify-center max-w-sm mx-auto mt-7 p-4 border-none rounded-lg shadow-[0px_15px_30px_rgba(0,0,0,0.3)] bg-white place-items-center 
      transition-transform duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0px_20px_35px_rgba(0,0,0,0.4)]">
      
      <img
        src={props.img}
        alt="card image"
        className="w-auto h-auto object-contain rounded-lg mb-4 align-center"
      />
      <h1 className="text-xl font-semibold text-center text-gray-800 mb-2">
        {props.heading}
      </h1>
      <p className="text-sm text-center text-gray-600">{props.desc}</p>
    </div>
  );
}

export default Card;
