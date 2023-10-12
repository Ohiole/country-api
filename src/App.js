import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import InfoPage from './Components/InfoPage';

function App() {
  
  const [bgMode, setBgMode] = useState(false);

  let countryName;

  const changeBg = () => {
    setBgMode(!bgMode)
  }

  return (
    <div className={bgMode ? 'App darkmode' : 'App'}>
      <Router>
        <Header changeBg={changeBg} bgMode={bgMode}/>
        <Routes>
          <Route path='/country-api' exact element={<MainPage />} />
          <Route path='/item/:countryName' exact element={<InfoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
