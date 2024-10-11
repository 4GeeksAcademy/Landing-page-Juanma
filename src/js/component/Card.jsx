import React from "react";

let Card = (props) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
      <div className="card rounded-0 h-100">
        <img
          src="https://images.pexels.com/photos/28717994/pexels-photo-28717994.jpeg"
          className="card-img-top img-fluid rounded-0"
          alt="..."
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <a href="#" className="btn btn-primary mt-auto">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
