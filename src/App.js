// import React from "react";
// // import "./App.css";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Articles from "./Pages/Articles";
// import { Routes, Link, Route } from "react-router-dom";

// function App() {
//   return (
//     <>
//       <h1>Server-Side Rendring Example</h1>
//       <ul>
//         <li>
//           <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
//           <Link to="/articles">Articles</Link>{" "}
//         </li>
//       </ul>

//       <Routes>
//         <Route path="/" exact element={<Home />} />
//         <Route exact path="/articles" element={<Articles />} />
//         <Route exact path="/about" element={<About />} />
//       </Routes>
//     </>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Articles from "./Pages/Articles";

const App = () => {
  return (
    <>
      <h1>Server-Side Rendering Example</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Routes>
    </>
  );
};

export default App;
