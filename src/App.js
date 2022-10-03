import './App.css';
import Pallate from './components/Pallate/Pallate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import mycolors from './mycolors';
import generatePalette from './colorMaker';
import Home from './components/home/Home';
{/* */}


function App() {
  const haha = generatePalette(mycolors[1]);
    console.log(haha);
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/pallate" element={<Pallate pallate={generatePalette(mycolors[1])}/> }/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
      </Routes>
  </Router>
  </div>
  );
}

export default App;
