import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'; // Import icons as needed
import { DiMongodb, DiDjango } from 'react-icons/di'; // Example icons

const techIcons = [
  { id: 1, icon: <FaReact className="text-blue-600 text-3xl" />, label: 'React' },
  { id: 2, icon: <FaNodeJs className="text-green-600 text-3xl" />, label: 'Node.js' },
  { id: 3, icon: <DiMongodb className="text-green-700 text-3xl" />, label: 'MongoDB' },
  { id: 4, icon: <FaPython className="text-yellow-500 text-3xl" />, label: 'Python' },
  { id: 5, icon: <DiDjango className="text-green-800 text-3xl" />, label: 'Django' }
];

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-36">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Full Stack Software Developer
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Passionate about building scalable web applications and working with modern technologies. 
          Experienced in both front-end and back-end development, specializing in creating robust and 
          efficient solutions.
        </p>

        {/* Tech Icons */}
        <div className="flex justify-center flex-wrap gap-6">
          {techIcons.map((tech) => (
            <div key={tech.id} className="w-20 h-20 flex items-center justify-center bg-white shadow-lg rounded-full">
              {tech.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
