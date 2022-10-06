import "./App.css";
import Pallate from "./components/Pallate/Pallate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import mycolors from "./mycolors";
import generatePalette from "./colorMaker";
import Home from "./components/home/Home";
import PallateList from "./components/Pallate-list/Pallate-list";

function colorPallateFinder(ID) {
  return mycolors.find(function (pallate) {
    if (pallate.id === ID) {
      console.log(pallate);
      return pallate;
    }
  });
}

// function printHello(x) {
//   console.log(x);
// }

// printHello();
const url = window.location.href.substring(30);
console.log(url);

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route
            exact
            path="/pallate"
            element={<Pallate pallate={generatePalette(mycolors[1])} />}
          /> */}
          {/* <Route
            exact
            path="/pallate/:id"
            element={
              <Pallate pallate={generatePalette(colorPallateFinder(url))} />
            }
          /> */}
          <Route exact path="/" element={<Home url={url}></Home>} />
          <Route exact path="/pallate-list" element={<PallateList />} />
        </Routes>
        <Routes>
          {/* <Route
            exact
            path="/pallate/:id"
            element={
              <Pallate pallate={generatePalette(colorPallateFinder(url))} />
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
