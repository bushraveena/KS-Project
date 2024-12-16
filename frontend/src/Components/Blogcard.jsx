import React from "react";
import { Link } from "react-router-dom";
const Blogcard = (props) => {
  let blogdata = props.blogdata;
  const apiURL = "http://localhost:3000/";

  return (
    <div className="bg-purple-300 shadow-md overflow-hidden rounded-xl">
      <Link to={`/blog/${blogdata.id}`}>
        <div className=" flex flex-col w-full">
          <img src={apiURL + blogdata.image} alt="" />
          <div className="p-2">
            <h2 className="mt-1 text-xl text-left">{blogdata.title}</h2>
            <p className="text-sm text-left opacity-70">
              {blogdata.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blogcard;
