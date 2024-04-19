import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

const Countries = (props) => {
  return (
    <section>
      <h2 className=" text-center text-4xl font-bold capitalize py-10">
        Country App
      </h2>
      <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {props.countries.map((country) => {
          const newCountry = { country, id: uuidv4() };

          return (
            <Country
              {...newCountry}
              key={newCountry.id}
              onRemoveCountry={props.onRemoveCountry}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Countries;
