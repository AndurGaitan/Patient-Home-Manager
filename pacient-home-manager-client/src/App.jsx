
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AssignKinesiologistPage from './pages/AssignKinesiologistPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assign-kinesiologist" element={<AssignKinesiologistPage />} />
      </Routes>
    </Router>
  );
};

export default App;
