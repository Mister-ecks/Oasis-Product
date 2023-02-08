import './App.css';
import Onboarding from './components/Onboarding';
import { Routes, Route } from 'react-router-dom';
import Individual from './components/Individual';
import Residency from './components/Residency';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/residency" element={<Residency />} />
      </Routes>
    </div>
  );
}

export default App;
