import './App.css';
import Banner from './Components/Banner';
import {bannersData} from './data';

function App() {
  return (
    <div className="App">
      <Banner banners={bannersData} />
    </div>
  );
}
export default App;
