import React, { useState } from "react";
import { ANIMALS, BREEDS } from "@frontendmasters/pet";

export default function SearchParams() {
  const [location, setLocation] = useState("Milpitas, CA");
  const [animal, setAnimal] = useState("Dog");
  const [breed, setBreed] = useState("Chihuahua");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal{" "}
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            {" "}
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        
        <button>Submit</button>
      </form>
    </div>
  );
}
