import { useNavigate } from 'react-router-dom';
import AirBox from "../../../Assets/AirBoxOne_Product.png"

function AutonomousVehicleMonitoringSystem() {
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
        <h1 className="text-5xl font-extrabold text-gray-800">🚀 Autonomous Vehicle Monitoring System</h1>
        <img
          src={AirBox}
          alt="Autonomous Vehicle Monitoring System"
          className="mx-auto rounded-lg w-full max-w-3xl border-4 border-blue-500 shadow-lg"
        />
      </header>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📌 Overview</h3>
        <p className="mt-4 text-gray-700 text-lg">
          An intelligent embedded system designed to monitor and report the real-time health status of commercial vehicles. The system integrates multiple sensors to track vehicle dynamics, environmental conditions inside refrigerator units, and tire pressure, while enabling automated inflation/deflation based on load and pressure. It supports both remote admin monitoring and real-time driver notifications through a mobile app.
        </p>
      </section>

      {/* Technologies Used Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🛠️ Technologies Used</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>MCU / Platform: STM32L4, imx7</li>
          <li>Sensors: Accelerometer, GPS, TPMS Pressure sensors, Temperature & Humidity sensors, Weight sensors</li>
          <li>Communication: BLE, CAN, UART, I2C, SPI, MQTT, Wi-Fi, Ethernet, LTE</li>
          <li>OS/Framework: FreeRTOS, YOCTO, Linux</li>
          <li>Tools: STM32CubeIDE, nRF Connect, Wireshark, J-Link</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🧩 Features / Modules</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>Automatic tire inflation & deflation system based on tire pressure values.</li>
          <li>Real-time temperature, pressure, accelerometer, GPS, RTC & ABS data logging mechanism to remote AWS cloud.</li>
          <li>Real-time accident/threat detection and camera operation accordingly.</li>
          <li>Real-time vehicle tracking with GPS and LTE-based trip start-end detection mechanism.</li>
          <li>Communication with mobile application over TCP/IP protocol for real-time data logging.</li>
        </ul>
      </section>

      {/* Responsibilities Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔍 Responsibilities</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>Designed UART driver for STM32 using HAL.</li>
          <li>Integrated FreeRTOS timers for scheduling.</li>
          <li>Performed field testing and debugging with oscilloscope.</li>
        </ul>
      </section>

      {/* Outcome Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📈 Outcome / Achievements</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>💡 Supported TCP/IP communication between product device & mobile application to give real-time updates and alerts to remote driver.</li>
          <li>✅ Excelled troubleshooting and debugging techniques to remotely access device and fix them in field at runtime.</li>
          <li>🏆 Fixed the critical RTC time corruption issue by developing alternate mechanisms like NTP/manual sync at real-time to avoid false time triggers.</li>
          <li>💡 Integrated the temperature monitoring sensor in the product and sent real-time data to AWS cloud to monitor the temperature inside refrigerator trucks.</li>
          <li>Worked on the revised hardware version of this product to make it more robust, efficient, and cost-effective.</li>
          <li>Validated various IC functionalities w.r.t features in the new hardware design and assured its proper working.</li>
        </ul>
      </section>

      {/* Timeline Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📅 Timeline</h3>
        <p className="mt-4 text-gray-700 text-lg">Jun 2021 – April 2024</p>
      </section>

      {/* Tags Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔖 Tags</h3>
        <p className="mt-4 text-gray-700 text-lg">#IoT #Firmware #BLE #FreeRTOS #STM32 #Wi-Fi #YOCTO #i.mx7</p>
      </section>
    </div>
  );
}

export default AutonomousVehicleMonitoringSystem;
