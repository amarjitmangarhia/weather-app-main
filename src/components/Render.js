import React from "react";

const Render = (props) => {
  return (
    <div>
      <header>
        <h2>Weather App</h2>
      </header>
      <section id="first">
        <div className="main-items">
          <input
            onChange={props.onChangeHandler}
            type="text"
            placeholder="search city..."
          />
          <button className="button" onClick={props.onClickHandler}>
            Get
          </button>
        </div>
      </section>
      <section id="second">{props.content}</section>
    </div>
  );
};

export default Render;
