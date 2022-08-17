import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { id, type, gender, age, weight, name, isAdopted } = pet;

  const disabledBtn = <button className="ui disabled button">Already adopted</button>

  const adoptBtn = (
    <button
      className="ui primary button"
      onClick={() => onAdoptPet(id)}
    >
      Adopt pet
    </button>
  )

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {name} {gender === "female" ? " ♀" : " ♂"}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? disabledBtn : adoptBtn }
      </div>
    </div>
  );
}

export default Pet;
