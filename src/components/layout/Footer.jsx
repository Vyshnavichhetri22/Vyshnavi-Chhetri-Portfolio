import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left */}
        <div>
          <h3 className="text-lg font-bold text-grey">
            Vyshnavi <span className="text-violet-500">Chhetri</span>
          </h3>
          <p className="text-sm text-gray-400">
            Full Stack Developer
          </p>
        </div>

        {/* Center */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Vyshnavi Chhetri. All Rights Reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/Vyshnavichhetri22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vyshnavi-chhetri/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:vyshnavichhetri309@gmail.com"
            className="text-gray-400 hover:text-violet-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}