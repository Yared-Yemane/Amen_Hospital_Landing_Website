import { FaHandHoldingHeart, FaHandshake } from "react-icons/fa";

// Sample Data Arrays
const patientRights = [
  "Right to receive appropriate medical care.",
  "Right to confidentiality and privacy of personal health information.",
  "Right to informed consent before any medical procedure.",
  "Right to access healthcare services in a safe environment.",
];

const patientObligations = [
  "Obligation to provide accurate and complete information about their health.",
  "Obligation to follow medical instructions and treatment plans prescribed.",
  "Obligation to be considerate of the hospital's staff and other patients.",
  "Obligation to respect the hospital's rules and regulations.",
];

const Guidelines = () => {
  return (
    <div className=" px-16 sm:px-8 dark:bg-gray-900 dark:text-white py-5">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-12">
        Patient Rights and <br /> Obligations
      </h2>

      <div className="flex flex-col sm:flex-row justify-between gap-8">
        {/* Rights Section */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center space-x-2">
            <FaHandHoldingHeart className="text-3xl" />
            <span>Patient Rights</span>
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            {patientRights.map((right, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                {right}
              </li>
            ))}
          </ul>
        </div>

        {/* Obligations Section */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8 transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl dark:text-gray-300">
          <h3 className="text-2xl font-semibold text-blue-600 mb-6 flex items-center space-x-2">
            <FaHandshake className="text-3xl" />
            <span>Patient Obligations</span>
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            {patientObligations.map((obligation, index) => (
              <li
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                {obligation}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
