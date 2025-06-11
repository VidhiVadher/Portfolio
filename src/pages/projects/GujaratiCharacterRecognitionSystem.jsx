import { useNavigate } from 'react-router-dom';

import Flowchart from "../../../Assets/Flow_chart.png"
import DatabseImg from "../../../Assets/Databse_image.png"
import Extracted from "../../../Assets/Extracted_images.png"
import ResultDetectd from "../../../Assets/Resultant_Detected_characters.png"

function GujaratiCharacterRecognitionSystem() {
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
        <h1 className="text-5xl font-extrabold text-gray-800">📝 Gujarati Character Recognition System</h1>
      </header>

      {/* Overview Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📌 Overview</h3>
        <p className="mt-4 text-gray-700 text-lg">
          A Python-based OCR (Optical Character Recognition) solution built specifically for the Gujarati script using image preprocessing and the k-Nearest Neighbor (k-NN) machine learning algorithm. This system recognizes characters from scanned printed documents, helping bridge the technology gap for Indian regional scripts.
        </p>
      </section>

      {/* Tech/Hardware Used Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🛠️ Tech/Hardware Used</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>Programming: Python</li>
          <li>Libraries: OpenCV, NumPy, Matplotlib, Scikit-learn</li>
          <li>Machine Learning: k-Nearest Neighbor (k-NN)</li>
          <li>Custom Components:</li>
          <ul className="list-disc pl-10 space-y-2">
            <li>Feature vector generator</li>
            <li>Image segmentation functions (crp_text())</li>
          </ul>
        </ul>
      </section>

      {/* Features / Modules Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🧩 Features / Modules</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>Full Gujarati Alphabet Recognition: Recognizes characters from ‘ka’ to ‘gna’ using custom dataset.</li>
          <li>Character Segmentation: Segments input images by scanning lines and characters using horizontal and vertical stripes.</li>
          <li>Custom Training Dataset: Built manually with 150+ image samples per character.</li>
          <li>Feature Extraction and Vectorization: Prepares labeled training vectors for the k-NN classifier.</li>
          <li>Real-Time Prediction Using k-NN: Classifies new character images based on nearest matches in the training set.</li>
        </ul>
      </section>

      {/* Responsibilities Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔍 Responsibilities</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>🖼️ Image Preprocessing Pipeline: Implemented grayscale conversion, thresholding, and segmentation.</li>
          <li>📁 Training Dataset Design: Collected and labeled Gujarati characters for training.</li>
          <li>🔍 Algorithm Evaluation: Experimented with template matching, SSIM, MSE, CNN, and Tesseract before selecting k-NN.</li>
          <li>🧪 Custom ML Pipeline in Python: Wrote feature_creation.py and app_code.py to handle training and live classification.</li>
          <li>🛠️ Manual Feature Engineering: Developed logic for generating character-specific feature vectors for k-NN.</li>
        </ul>
      </section>

      {/* Diagrams Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">⚙️ Diagrams</h3>
        <ul className="list-disc pl-6 mt-4 space-y-4 text-gray-700 text-lg">
          <li>
            Flowchart of OCR Pipeline:
            <img src={Flowchart} alt="Flowchart of OCR Pipeline" className="mt-2 rounded-lg shadow-md w-full max-w-3xl mx-auto" />
          </li>
          <li>
            Character Dataset:
            <img src={DatabseImg} alt="Character Dataset" className="mt-2 rounded-lg shadow-md w-full max-w-3xl mx-auto" />
          </li>
          <li>
            Character Extraction:
            <img src={Extracted} alt="Character Extraction" className="mt-2 rounded-lg shadow-md w-full max-w-3xl mx-auto" />
          </li>
          <li>
            Resultant Output:
            <img src={ResultDetectd} alt="Resultant Output" className="mt-2 rounded-lg shadow-md w-full max-w-3xl mx-auto" />
          </li>
        </ul>
      </section>

      {/* Outcome / Achievements Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📈 Outcome / Achievements</h3>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700 text-lg">
          <li>✅ Achieved 75% recognition accuracy for printed Gujarati characters</li>
          <li>🧠 Successfully avoided complex/dependency-heavy OCR libraries like Tesseract</li>
          <li>📦 Built a modular, lightweight and locally trainable recognition system</li>
          <li>🚀 Validated ability to scale with more characters and adapt to other Indian languages</li>
          <li>📉 Identified and documented key challenges with handwritten and similar-shaped characters</li>
        </ul>
      </section>

      {/* Timeline Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">📅 Timeline</h3>
        <p className="mt-4 text-gray-700 text-lg">Jan 2021 – May 2021</p>
      </section>

      {/* Tags Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-3xl font-semibold text-gray-800">🔖 Tags</h3>
        <p className="mt-4 text-gray-700 text-lg">#OCR #Gujarati #kNN #Python #ImageProcessing #MachineLearning #OpenCV</p>
      </section>
    </div>
  );
}

export default GujaratiCharacterRecognitionSystem;
