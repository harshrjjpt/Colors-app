import './App.css';
import Pallate from './components/Pallate/Pallate';
import mycolors from './mycolors';

function App() {
  return (
    <div className="App">
      <h1>harsh</h1>
      <Pallate pallate={mycolors[4]}/>
    </div>
  );
}

export default App;
