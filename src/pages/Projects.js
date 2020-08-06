import React from "react";

import data from '../data/data.json'
import Article from '../components/Article'

export default function Projects() {
  return (
      <section className="projects-section bg-light" id="projects">
        <div className="container">
            { data.map((value, key) => {
                return(
                    <Article id={value.id} title={value.title} desc={value.desc} img={value.img} key={key}/>
                )
            })}
        </div>
      </section>
  );
}
