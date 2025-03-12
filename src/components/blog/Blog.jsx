import React from "react";
import bloglist from "../../editable-stuff/blog";
import { Link, useLocation } from "react-router-dom";
import { Jumbotron } from "../home/migration";

const Blog = (props) => {
  return (
    <Jumbotron fluid id="blog" className="bg-light m-4">
      <div className="container-lg bg-blue">
        <h1 className="text-center display-4 ">Blog</h1>
        {bloglist.map((value, index) => {
          return <BlogCard key={index} image={value.image} title={value.title} description={value.description} index={index} />;
        })}
      </div>
    </Jumbotron>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  const location = useLocation();
  const basePath = location.pathname.includes("/blog") ? "" : "/blog/";
  return (
    <div className="m-5 ">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            <img src={image} style={{ width: "360px", marginBottom: "3rem" }} alt="..." />
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`${process.env.PUBLIC_URL}${basePath}${index}`}>Read more...</Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog };
