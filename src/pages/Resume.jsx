function Resume() {
  return (
    <div className="p-6 space-y-12 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800">👩‍💼 Vidhi Vadher</h1>
        <h2 className="text-2xl text-blue-600">Embedded Firmware Engineer</h2>
        <p className="text-gray-700 text-lg">📍 Bhavnagar, Gujarat, India</p>
        <p className="text-gray-700 text-lg">
          📧 vidhivadher05@gmail.com | 📞 +91 8780875753
        </p>
        <a
          href="https://linkedin.com/in/vidhivadher" // Replace with your LinkedIn profile link
          className="text-blue-500 hover:underline text-lg"
        >
          🔗 LinkedIn
        </a>
      </header>

      {/* Profile Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🧠 Profile</h3>
        <p className="mt-4 text-gray-700 text-lg">
          Experienced Embedded Firmware Engineer with over 4 years of proven expertise in developing embedded system solutions. Skilled in C and C++ programming languages, with a track record of delivering high-quality firmware for diverse applications. Strong background in real-time operating systems, communication protocols, and on-field troubleshooting.
        </p>
      </section>

      {/* Work Experience Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">💼 Work Experience</h3>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-xl font-bold text-gray-800">🔹 Embedded Engineer — Matrix Comsec PVT. LTD.</h4>
            <p className="text-gray-700 text-lg">📆 Aug 2024 – Present</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 text-lg">
              <li>Conducted code clean-up and resolved compiler warnings to enhance overall code stability.</li>
              <li>Developed a Python script to fetch and track known vulnerabilities from the National Vulnerability Database (NVD).</li>
              <li>Set up and configured the Kneron Evaluation Kit (EVK) and created a custom application to stream 4 parallel video feeds.</li>
              <li>Explored the Kneron NPU (Neural Processing Unit) and gained hands-on understanding of its AI inference pipeline.</li>
            </ul>
          </div>
          {/* Add other work experiences similarly */}
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🎓 Education</h3>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-xl font-bold text-gray-800">B.Tech – Electronics & Communication</h4>
            <p className="text-gray-700 text-lg">📍 Dharmsinh Desai University (2017 – 2021)</p>
            <p className="text-gray-700 text-lg">CPI: 8.51 | SPI: 8.79</p>
          </div>
          {/* Add other education details similarly */}
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🧰 Technical Expertise</h3>
        <div className="mt-4 space-y-6">
          <div>
            <h4 className="text-xl font-bold text-gray-800">🔧 Hardware Platforms</h4>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 text-lg">
              <li>STM32L4xx (Automotive apps)</li>
              <li>8051 (Assembly-based home automation)</li>
              <li>ESP8266 (Timers & alarm apps)</li>
              <li>NXP i.MX7 (Custom YOCTO build)</li>
              <li>Arduino (IoT prototyping)</li>
            </ul>
          </div>
          {/* Add other technical expertise similarly */}
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🏆 Accomplishments</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>🥇 Pat on the Back Award — Volansys (Sep 2023)</li>
          <li>🎓 Certified: C Programming & Assembly (NPTEL, Jan 2020)</li>
          <li>🎓 Certified: Embedded Systems Software (Coursera, Jul 2020)</li>
          <li>🎓 Certified: Physical Design using EDA (Udemy, Jul 2020)</li>
          <li>🎓 Certified: Embedded System Design (NPTEL, Dec 2020)</li>
        </ul>
      </section>

      {/* Address Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🏠 Address</h3>
        <p className="mt-4 text-gray-700 text-lg">
          “Gurukrupa”, 24/B, Satkar Society, Ghogha Road, Bhavnagar – 364001.
        </p>
      </section>
    </div>
  );
}

export default Resume;
