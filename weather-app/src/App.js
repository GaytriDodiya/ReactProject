import Forcast from './components/Forcast'
import './App.css';
import Weather from './components/CurrentLocation';

function App() {
  return (
    <div className="App">
 
  <Weather/>
  <Forcast/>
  {/* <Weather/> */}
    </div>
  );
}

export default App;
