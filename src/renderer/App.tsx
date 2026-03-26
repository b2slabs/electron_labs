import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import '@picocss/pico/css/pico.min.css';
import PermanentDrawerLeft from "./components/navbar/Drawer"

function Hello() {
  return (
    <div>
      <PermanentDrawerLeft />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
