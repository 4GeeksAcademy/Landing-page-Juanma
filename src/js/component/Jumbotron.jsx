import React from "react";

let Jumbotron = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="container pb-5 pt-5 mt-3"
          style={{ background: "#ccc" }}
        >
          <div className="row">
            <div className="col">
              <h1 className="display-1">A Warm Welcome!</h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{props.content}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-primary">
                Call to action!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
