import React from "react";
import Blogcard from "../Components/Blogcard";

const Home = () => {
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((x) => {
          return <Blogcard blogdata={x} />;
        })}
      </div>
    </div>
  );
};

export default Home;
