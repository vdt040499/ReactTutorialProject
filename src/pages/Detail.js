import React from "react";

import data from "../data/data.json";

export default function Detail(props) {
  let { id, slug } = props.match.params;
  return (
    <section className="projects-section bg-light" id="about">
      <div className="container">  
          {
            data.map((value, key) => {
              if(value.id == id) {
                return(
                  <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                  <div className="col-xl-12 col-lg-12 mb-5">
                    <img className="img-fluid mb-3 mb-lg-0" src={value.img} alt />
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="featured-text text-center text-lg-left">
                      <h4>{value.title}</h4>
                      <p className="text-black-50 mb-0">{value.desc}</p>
                    </div>
                  </div>
                  </div>
                );
              }
            })
          }
      </div>
    </section>
  );
}
