import { useNavigate } from 'react-router-dom';
import BlockDaigram from "../../../Assets/Block_Diagram.png"
import CircutDaigram from "../../../Assets/Circuit_Diagram.png"
import PcbPlacement from "../../../Assets/PCB_Placements.png"
import PcbSoldering from "../../../Assets/PCB_Soldering_Backside.png"

function HeartbeatMonitoringSystem() {
  const navigate = useNavigate();
  return (
    <div className="p-6 space-y-12 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 text-blue-500 hover:text-blue-700"
        >
          ⬅️ Back
        </button>
        <h1 className="text-5xl font-extrabold text-gray-800">🚀 HEART BEAT DETECTION AND MEASUREMENT SYSTEM</h1>
      </header>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📌 Overview</h3>
        <p className="mt-4 text-gray-700 text-lg">
          A handy module for Heart beat Detection and Monitoring which not only detects heart pulses but also counts it and displays it on the seven segment display. A cost-effective solution for Health Measurements.
        </p>
      </section>

      {/* Tech/Hardware Used Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🛠️ Tech/Hardware Used</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>Hardware: IR Transmitter and receiver, LM358, 555 timer, 4026 IC, 7 Segment Display, Battery, DMM, Soldering gun and ion.</li>
          <li>Tools: Proteus PCB Designing and Simulation tool.</li>
          <li>Communication: Hardware peripherals based using analog circuits.</li>
        </ul>
      </section>

      {/* Features/Modules Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🧩 Features / Modules</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>Infrared Light-Based Pulse Sensing</li>
          <li>Analog to Digital Pulse Conversion</li>
          <li>Counter-Based Pulse Counting</li>
          <li>Time-Gated Counting Mechanism</li>
          <li>Real-Time BPM Display</li>
          <li>Compact Modular Design</li>
        </ul>
      </section>

      {/* Responsibilities Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔍 Responsibilities</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>🔧 Signal Acquisition from IR Sensor Module</li>
          <li>📊 Signal Analysis with Digital Storage Oscilloscope (DSO)</li>
          <li>🔀 Signal Conditioning with Filters and Integrators</li>
          <li>⚖️ Comparator Threshold Adjustment for Varying Blood Thickness</li>
          <li>🧪 Breadboard Prototyping and Debugging</li>
          <li>📈 Adaptive Design Thinking and Problem Solving</li>
        </ul>
      </section>

      {/* Diagrams Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">⚙️ Diagrams</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Block Diagram</h4>
            <img
              src={BlockDaigram}
              alt="Block Diagram"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800">Circuit Diagram</h4>
            <img
              src={CircutDaigram}
              alt="Circuit Diagram"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800">PCB Component Placement Diagram</h4>
            <img
              src={PcbPlacement}
              alt="PCB Component Placement Diagram"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800">PCB Component Soldering Diagram</h4>
            <img
              src={PcbSoldering}
              alt="PCB Component Soldering Diagram"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Outcome/Achievements Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📈 Outcome / Achievements</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>✅ Successfully Captured Reliable Heartbeat Signals</li>
          <li>🔬 Overcame IR Signal Noise and Reflection Issues</li>
          <li>🎛️ Implemented Dynamic Comparator Reference Control</li>
          <li>🧪 Validated Design with Multi-User Testing</li>
          <li>🔧 Designed a Modular and Interpretable Hardware System</li>
          <li>📚 Gained Practical Experience in Biomedical Signal Processing</li>
        </ul>
      </section>

      {/* Timeline Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📅 Timeline</h3>
        <p className="mt-4 text-gray-700 text-lg">Jun 2020 – Dec 2020</p>
      </section>

      {/* Tags Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔖 Tags</h3>
        <p className="mt-4 text-gray-700 text-lg">#Analog #CircuitDesign #Timer #opAmp #sevenSegmentDisplay #IR #Soldering</p>
      </section>
    </div>
  );
}

export default HeartbeatMonitoringSystem;
