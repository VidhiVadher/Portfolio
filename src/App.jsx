import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import AutonomousVehicleMonitoringSystem from './pages/projects/AutonomousVehicleMonitoringSystem';
import GujaratiCharacterRecognitionSystem from './pages/projects/GujaratiCharacterRecognitionSystem';
import HeartbeatMonitoringSystem from './pages/projects/HeartbeatMonitoringSystem';

function App() {
  return (
    <Router>
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />

        {/* Dynamic Project Routes */}
        <Route path="/projects/AutonomousVehicleMonitoringSystem" element={<AutonomousVehicleMonitoringSystem />} />
        <Route path="/projects/GujaratiCharacterRecognitionSystem" element={<GujaratiCharacterRecognitionSystem />} />
        <Route path="/projects/HeartbeatMonitoringSystem" element={<HeartbeatMonitoringSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
