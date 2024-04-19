import React from "react";

const Country = (props) => {
  const { name, flags, capital, population, area } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };
  return (
    <article>
      <div className=" bg-zinc-500 text-white px-5 pt-8 pb-5 rounded h-full text-center hover:scale-100 transform transition duration-300">
        <div className=" w-[250px] h-[150px] mx-auto">
          <img className=" w-full h-full" src={flags.png} alt={name.common} />
        </div>
        <div className=" pt-4">
          <h3 className=" text-2xl font-semibold">Name: {name.common}</h3>
          <h3>Populations: {population}</h3>
          <h3>Capital: {capital}</h3>
          <h3>Area: {area}</h3>
          <button
            onClick={() => handleRemoveCountry(name.common)}
            className=" capitalize font-bold bg-neutral-300 rounded py-2 px-4 text-black mt-4"
          >
            remove country
          </button>
        </div>
      </div>
    </article>
  );
};

export default Country;
