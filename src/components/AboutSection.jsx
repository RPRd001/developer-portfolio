import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faHtml5,
  faCss3Alt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faTerminal } from "@fortawesome/free-solid-svg-icons";

const AboutSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:items-center gap-8">
          {/* Profile Description */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 mb-4">
              I am a self-taught developer passionate about learning and
              building projects using the latest technologies. I have been
              exploring various programming languages and frameworks, and I&apos;m
              constantly looking to expand my skill set.
            </p>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Technologies I Use:
            </h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faPython}
                  className="text-blue-500 mr-2"
                />
                Python
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="text-yellow-500 mr-2"
                />
                JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="text-orange-500 mr-2"
                />
                HTML5
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faCss3Alt}
                  className="text-blue-600 mr-2"
                />
                CSS3 (Tailwind CSS)
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="text-green-500 mr-2"
                />
                Node.js & Express.js
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faDatabase}
                  className="text-green-800 mr-2"
                />
                MongoDB
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon
                  icon={faTerminal}
                  className="text-gray-700 mr-2"
                />
                Bash & Command Line
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Certifications
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <a
                  href="https://example.com/microsoft-certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Microsoft Training Certification
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/freecodecamp-certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  freeCodeCamp Certification
                </a>
              </li>
              <li>
                <a
                  href="https://example.com/sololearn-certification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  SoloLearn Certification
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
