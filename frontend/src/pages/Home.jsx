import React, { useState, useEffect } from "react";
import Blogcard from "../Components/Blogcard";
import { getBlogs } from "../api/Api";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const allBlogs = getBlogs();
      setBlogs(allBlogs.data);
    }

    fetchData();
  }, []);

  const data = [
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
    {
      title: "it is worth investing in here",
      image: "https://picsum.photos/200/300",
      description: "i want to travel the world but i have no money",
      createdon: "10 dec,2024",
      comments: "0",
    },
  ];
  return (
    <div>
      <p>{JSON.stringify(blogs)}</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {blogs &&
          blogs.map((x) => {
            return <Blogcard blogdata={x} />;
          })}
      </div>
    </div>
  );
};

export default Home;
