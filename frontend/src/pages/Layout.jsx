import React from "react";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  const menu = [
    { text: "K-DRAMAS", path: "/" },
    { text: "K-IDOLS", path: "/" },
    { text: "K-POP", path: "/" },
    { text: "K-CELEBRITIES", path: "/" },
  ];
  return (
    <div>
      {/* <header></header> */}
      <div className="border-b">
        <div className="container px-5 py-5 flex justify-between">
          <Link to="/">
            <span className="font-extrabold text-2xl text-purple-700">
              BLOGGER
            </span>
          </Link>
          <div className="flex">
            <ul className="flex">
              {menu.map((x) => {
                return (
                  <li>
                    <Link className=" text-purple-800 p-2 items-center justify-center flex">
                      <span>{x.text}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="bg-purple-500 text-white px-2 py-1 rounded">
              <Link to="/create">+ New Post</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <body></body> */}
      <div className="flex mx-auto px-5 md:px-20">
        <div className="mt-5 mb-5 min-h-[500px] w-full">
          <Outlet></Outlet>
        </div>
      </div>
      {/* <footer></footer> */}
      <div className="flex bg-purple-400">
        <div className="flex mx-auto px-20 py-20 items-center justify-center">
          <h3 className="text-purple-800">BLLOGER</h3>
        </div>
      </div>
    </div>
  );
};

export default Layout;
