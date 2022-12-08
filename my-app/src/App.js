import './App.css';
import Offers from './Components/Offers';
import {offersData} from './data';

function App() {
  return (
    <div className="App">
      <Offers offers={offersData} />
    </div>
  );
}
export default App;
