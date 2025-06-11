function Home() {
  return (
    <div className="p-6 space-y-12 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="text-center space-y-4">
        <img
          src="/Assets/my_pic.jpeg" // Replace with the actual path to your photo
          alt="Vidhi Vadher"
          className="mx-auto rounded-full w-32 h-32 border-4 border-blue-500 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-gray-800">👩‍💼 Vidhi Vadher</h1>
        <h2 className="text-2xl text-blue-600">Embedded Firmware Engineer</h2>
        <p className="mt-2 text-gray-700 text-lg">Welcome to my online portfolio!!</p>
      </header>

      {/* Contents Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔗 Contents</h3>
        <ul className="list-none mt-4 space-y-4">
          <li>
            <a href="/resume" className="text-blue-500 text-lg hover:underline flex items-center">
              <span className="mr-2">📄</span> Resume
            </a>
          </li>
        </ul>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🧠 About Me</h3>
        <p className="mt-4 text-gray-700 text-lg">
          I'm an embedded systems enthusiast who thrives on exploring the inner workings of microcontrollers, microprocessors, and the low-level logic that drives real-world electronics. Whether it's designing a custom chip layout, troubleshooting a tricky bus conflict, or squeezing performance out of limited firmware — I find joy in the challenge.
        </p>
        <p className="mt-4 text-gray-700 text-lg">
          Having an experience of 4+ years in the embedded industry, I've worked on a variety of hands-on projects that span embedded firmware development, signal processing, system simulation, and product design.
        </p>
        <blockquote className="mt-6 italic text-gray-500 text-lg border-l-4 border-blue-500 pl-4">
          "If you can't explain it simply, you don't understand it well enough."
        </blockquote>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📁 Projects</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>
            <a href="/projects/AutonomousVehicleMonitoringSystem" className="text-blue-500 hover:underline">
              Autonomous Vehicle Monitoring System
            </a>
          </li>
          <li>
            <a href="/projects/GujaratiCharacterRecognitionSystem" className="text-blue-500 hover:underline">
              Gujarati Character Recognition System
            </a>
          </li>
          <li>
            <a href="/projects/HeartbeatMonitoringSystem" className="text-blue-500 hover:underline">
              Heartbeat Monitoring System
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
