import React from "react";

const ContactUs = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4 border-0"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="text-center mb-4">
          <h1 className="text-uppercase fw-bold text-primary">
            Get in Touch With Us!
          </h1>
          <p className="text-muted">
            Send us a query and we will get back to you within 24 hours. Thank
            you!
          </p>
        </div>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded-pill"
              placeholder="First Name*"
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded-pill"
              placeholder="Last Name*"
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-12 col-md-6">
            <input
              type="email"
              className="form-control shadow-sm rounded-pill"
              placeholder="Email*"
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="password"
              className="form-control shadow-sm rounded-pill"
              placeholder="Password*"
            />
          </div>
        </div>
        <div className="row g-3 mt-3">
          <div className="col-12">
            <div class="mb-3">
              <textarea
                class="form-control shadow-none text-muted"
                id="exampleFormControlTextarea1"
                rows="3"
              >
                Message(if any)
              </textarea>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button className="btn btn-primary rounded-pill px-4 py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
