// import Login from "./auth/login";
// import Signup from "./auth/sign-up";

// export default function App() {
//   return (

//     <>
//     {/* <Login/> */}
//     <Signup/>
//     </>
//   );
// }

import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import Createblog from "./pages/Createblog";
import Nopage from "./pages/Nopage";
function App() {
  const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/create" element={<Createblog />}></Route>
          <Route path="*" element={<Nopage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
