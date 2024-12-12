import React,{useState} from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
const Createblog = () => {
    const[value,setValue]=useState('');
  const menu = [
    { text: "K-DRAMAS", path: "/" },
    { text: "K-IDOLS", path: "/" },
    { text: "K-POP", path: "/" },
    { text: "K-CELEBRITIES", path: "/" },
  ];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="bg-purple-300 w-[60%] p-5 rounded-xl">
        <h1 className="text-2xl mb-5 text-purple-600">create blog post</h1>
        <div className="flex flex-col">
          <label htmlFor="" className="ml-1 text-purple-800">
            Title
          </label>
          <input
            type="text"
            className="h-10 border-purple-300 rounded my-2 p-2"
          />
          <label htmlFor="" className="ml-1 text-purple-800">
            {" "}
            Category
          </label>
          <select
            name=""
            id=""
            className="h-10 border-purple-300 rounded my-2 p-2"
          >
            {menu.map((x) => {
              return <option value={x.text}>{x.text}</option>;
            })}
          </select>
          <label htmlFor="" className="ml-1 text-purple-800">
            image
          </label>
          <input type="file" className=" border-purple-300 rounded my-2 p-2" />
          
          <label htmlFor="" className="ml-1 text-purple-800">
            post
          </label>
          <ReactQuill className="bg-white rounded mb-2 mt-2 editingarea" theme="snow" value={value} onChange={setValue}/>
          <hr />
          <button className="bg-purple-800 text-white h-8 w-[100px] mt-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Createblog;
