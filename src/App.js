import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainPage from './Components/MainPage';

function App() {
  
  const [bgMode, setBgMode] = useState(false);

  const changeBg = () => {
    setBgMode(!bgMode)
  }

  return (
    <div className={bgMode ? 'App darkmode' : 'App'}>
      <Header changeBg={changeBg} bgMode={bgMode}/>
      <MainPage />
    </div>
  );
}

export default App;
