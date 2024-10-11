import React from "react";

let Card = (props) => {
  return (
    <div className="container text-center">
      <div className="row mt-3">
        {/* Primer card */}
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
        {/* Segundo card */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card rounded-0 h-100">
            <img
              src="https://images.pexels.com/photos/27665858/pexels-photo-27665858.jpeg"
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
        {/* Tercer card */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card rounded-0 h-100">
            <img
              src="https://images.pexels.com/photos/27660063/pexels-photo-27660063.jpeg"
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
        {/* Cuarto card */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="card rounded-0 h-100">
            <img
              src="https://images.pexels.com/photos/27856556/pexels-photo-27856556.jpeg"
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
      </div>
    </div>
  );
};

export default Card;
