import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
        <p className="text-lg text-gray-600 mb-8">
          I’m open to collaboration and opportunities. Feel free to reach out through any of the platforms below!
        </p>
        <div className="flex justify-center space-x-8">
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
          {/* Email */}
          <a
            href="mailto:your.email@example.com"
            className="text-red-600 hover:text-red-400 transition"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
