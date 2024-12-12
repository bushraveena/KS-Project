import React from 'react';

const Blog = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[60%] overflow-hidden">
          <h1 className="mt-1 text-3xl font-extrabold">i want to disapear</h1>
          <div className="flex mt-4 mb-4">
            <small>10 dec, 2024</small>
          </div>
          <img
            className="rounded-lg"
            src="https://picsum.photos/200/300"
            alt=""
          />
          <div>
            <h2 className="text-2xl mt-2 mb-2">is simply dummy</h2>
             text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            <h2 className="text-2xl mt-2 mb-2">is simply dummy</h2>
             It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.{" "}
          </div>
        </div>
      </div>
    );
}

export default Blog;
