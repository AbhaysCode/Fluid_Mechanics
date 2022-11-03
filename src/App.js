import './App.css';
import Navbar from './components/navbar.js';
import Pascal from './components/pascal.js';
import Continuity from './components/continuity.js';
import Bernoulli from './components/bernoulli.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Pascal/>
      <Continuity/>
      <Bernoulli/>
    </div>
  );
}
export default App;
