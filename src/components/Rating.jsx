import React from "react";
import { star } from "../assets";
import Button from "./Button";
import { buttons } from "../constants";

const Rating = ({ handleClick, handleSubmit, value }) => (
  <section>
    <div className="star--container">
      <img src={star} alt="star" />
    </div>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is
      appreciated to help us improve our offering!
    </p>
    <div className="buttons--container">
      {buttons.map((button) => (
        <Button text={button.text} key={button.id} handleClick={handleClick} />
      ))}
    </div>
    <button
      className="btn--submit"
      onClick={handleSubmit}
      disabled={value === "" ? true : false}
    > 
    Submit
    </button>
  </section>
);

export default Rating;
