import {
  FaBiohazard,
  FaShieldAlt,
  FaStethoscope,
  FaFireExtinguisher,
} from "react-icons/fa";

const HealthAndSafetyGuidelines = () => {
  return (
    <div className="py-16 px-4 sm:px-8 dark:bg-gray-900 dark:text-white">
      <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-12">
        Health and Safety <br /> Guidelines
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Hygiene Guidelines */}
        <div
          className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl"
          aria-labelledby="hygiene-guidelines"
        >
          <h3
            id="hygiene-guidelines"
            className="text-2xl font-semibold text-blue-600 mb-6 flex items-center space-x-2"
          >
            <FaStethoscope className="text-3xl" />
            <span>Hygiene Guidelines</span>
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Wash hands frequently with soap and water for at least 20 seconds.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Use hand sanitizers with at least 60% alcohol when soap is
              unavailable.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Cover your mouth and nose with a tissue or elbow when coughing or
              sneezing.
            </li>
          </ul>
        </div>

        {/* Infection Control Guidelines */}
        <div
          className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl"
          aria-labelledby="infection-control-guidelines"
        >
          <h3
            id="infection-control-guidelines"
            className="text-2xl font-semibold text-blue-600 mb-6 flex items-center space-x-2"
          >
            <FaBiohazard className="text-3xl" />
            <span>Infection Control Guidelines</span>
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Follow hospital staff instructions regarding isolation and
              infection control.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Wear masks if required by hospital policies, especially in
              high-risk areas.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Notify staff immediately if you feel unwell or show symptoms of
              illness.
            </li>
          </ul>
        </div>

        {/* Fire and Emergency Safety */}
        <div
          className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl"
          aria-labelledby="fire-safety-guidelines"
        >
          <h3
            id="fire-safety-guidelines"
            className="text-2xl font-semibold text-blue-600 mb-6 flex items-center space-x-2"
          >
            <FaFireExtinguisher className="text-3xl" />
            <span>Fire and Emergency Safety</span>
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Familiarize yourself with the nearest emergency exits and fire
              alarms.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              In case of fire, evacuate calmly and do not use elevators.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Follow instructions from hospital staff during emergency
              evacuations.
            </li>
          </ul>
        </div>

        {/* Personal Safety Guidelines */}
        <div
          className="bg-white shadow-lg rounded-lg p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-xl dark:hover:shadow-2xl"
          aria-labelledby="personal-safety-guidelines"
        >
          <h3
            id="personal-safety-guidelines"
            className="text-2xl font-semibold text-blue-600 mb-6 flex items-center space-x-2"
          >
            <FaShieldAlt className="text-3xl" />
            <span>Personal Safety Guidelines</span>
          </h3>
          <ul className="list-disc pl-6 space-y-4">
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Avoid walking around unattended, especially in high-risk areas
              (e.g., ICUs, surgery floors).
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Keep your personal belongings in a safe area and don’t leave
              valuables unattended.
            </li>
            <li className="text-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:scale-105 transition-all duration-300 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              If you have mobility issues, use assistance when moving around the
              hospital.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthAndSafetyGuidelines;
