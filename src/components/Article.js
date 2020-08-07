import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Article extends Component {
    stringToSlug = (str) => {
      // remove accents
      var from = "àáãảạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđùúủũụưừứửữựòóỏõọôồốổỗộơờớởỡợìíỉĩịäëïîöüûñçýỳỹỵỷ",
          to   = "aaaaaaaaaaaaaaaaaeeeeeeeeeeeduuuuuuuuuuuoooooooooooooooooiiiiiaeiiouuncyyyyy";
      for (var i=0, l=from.length ; i < l ; i++) {
        str = str.replace(RegExp(from[i], "gi"), to[i]);
      }
    
      str = str.toLowerCase()
            .trim()
            .replace(/[^a-z0-9 -]/g, '-')
            .replace(/-+/g, '-');
    
      return str;
  }

  render() {
    let { id, title, desc, img } = this.props;
    let slug = this.stringToSlug(title);
    return (
      <div>
        <div className="row justify-content-center no-gutters mt-5 mb-lg-0">
          <div className="col-lg-6">
            <Link to={"/article/" + slug + "." + id + ".html"}>
              <img className="img-fluid" src={img} alt="article_image" />
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">{title}</h4>
                  <p className="mb-0 text-white-50">{desc}</p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
