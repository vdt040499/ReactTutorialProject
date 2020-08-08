import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export default function Contact() {
  const [state, setState] = useState({
    email: "",
    status: "Buồn Cười"
  });
  const [isRedirect, setRedirect] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setRedirect(!isRedirect);
    getValue();
  };

  const isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  };

  const getValue = () => {
    let content = `Bạn vừa cung cấp email ${state.email} cho chúng tôi với một tâm thế hết sức ${state.status}`;
    alert(content);
  };

  if (isRedirect) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <section className="signup-section" id="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white" />
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
              <form className="form-inline d-flex">
                <div className="control-group col-md-6">
                  <input
                    className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                    id="inputEmail"
                    type="email"
                    name="email"
                    onChange={(event) => isChange(event)}
                    placeholder="Enter email address..."
                  />
                </div>
                <div className="control-group col-md-3">
                  <div className="form-group">
                    <label className="mr-5 p-0" for="status"><b>Status</b></label>
                    <select className="form-control" name="status" id="status" value={state.status} onChange={(event) => isChange(event)}>
                      <option value="Vui Vẻ">Vui Vẻ</option>
                      <option value="Buồn Cười">Buồn Cười</option>
                      <option value="Phẫn Nộ">Phẫn Nộ</option>
                    </select>
                  </div>
                </div>
                <button
                  onClick={(event) => submitForm(event)}
                  className="btn btn-primary mx-auto"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section bg-black pb-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    4923 Market Street, Orlando FL
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!">
              <i className="fab fa-twitter" />
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
