import './App.css';
import Pallate from './components/Pallate/Pallate';
import mycolors from './mycolors';
import generatePalette from './colorMaker';

function App() {
  const haha = generatePalette(mycolors[1]);
    console.log(haha);
  return (
    <div className="App">
      <h1>harsh</h1>
      <Pallate pallate={generatePalette(mycolors[1])}/>
    </div>
  );
}

export default App;
