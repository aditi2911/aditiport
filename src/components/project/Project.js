"use client"; // Add this directive to mark the file as a Client Component

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects showcasing my skills and expertise",
};

export const projects = [
  {
    id: "real-time-chat",
    title: "Real-Time Chat Application",
    description:
      "A fully functional real-time chat platform enabling one-on-one messaging using Socket.IO, ensuring instant message delivery without page reloads. Implemented JWT-based authentication for secure user registration, login, and session management.",
    image: "/projects/chat.jpg",
    tags: ["React.js", "Socket.io", "Express", "MongoDB", "JWT", "Node.js"],
    github: "https://github.com/aditi2911/real-time-chat",
    details: [
      "Implemented JWT-based authentication for secure user registration, login, and session management",
      "Designed and integrated user profiles with editable information and persistent chat history",
      "Created a responsive user interface that delivers consistent performance across all device sizes",
      "Deployed on Vercel, enabling live access, real-time updates, and seamless hosting",
      "Utilized Socket.IO for real-time messaging functionality without page refreshes",
    ],
  },
  {
    id: "appointment-system",
    title: "Doctor Appointment Booking System",
    description:
      "A comprehensive full-stack appointment booking platform for hospitals and clinics with three-tier authentication (Admin, Doctor, Patient). Integrated secure online payments with Stripe.",
    image: "/projects/doctor-appointment.jpg",
    tags: ["React.js", "Express.js", "Node.js", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/aditi2911/appointment-system",
    details: [
      "Engineered a comprehensive full-stack appointment booking platform with three-tier authentication",
      "Improved booking efficiency by 50% and user retention by 30% by streamlining appointment flow",
      "Integrated secure online payments with Stripe",
      "Designed RESTful APIs, reducing response time by 20% and ensuring secure backend communication",
      "Implemented role-based access control for administrators, doctors, and patients",
    ],
  },
  {
    id: "weather-forecast",
    title: "Weather Forecast Web Application",
    description:
      "A fully responsive weather forecast application using HTML, CSS, and JavaScript, providing accurate real-time weather and air quality updates using the OpenWeatherMap API.",
    image: "/projects/weather-forecast.jpg",
    tags: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API", "Responsive Design"],
    github: "https://github.com/aditi2911/weather-forecast",
    details: [
      "Developed a fully responsive weather forecast application using HTML, CSS, and JavaScript",
      "Provided accurate real-time weather and air quality updates using the OpenWeatherMap API",
      "Integrated dynamic hourly forecasts and seamless data visualization",
      "Enhanced user experience and improved page load speed by 20%",
      "Achieved 95% accuracy in data retrieval through optimized API integration and efficient frontend logic",
    ],
  },
  
 
];

export default function Project() {
  return (
    <div className="min-h-screen bg-[#0a001f] mt-[10] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        {/* Cosmic Background with Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
              }}
            ></div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a001f]/80 to-[#1a0033]/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center perspective-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 transform-style-3d animate-pulse hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-500">
            <span className="bg-gradient-to-r from-[#ff66cc] to-[#66ccff] bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn">
            Explore my latest projects showcasing my skills in web development,
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Floating 3D Orbs */}
        <div className="absolute top-[10%] left-[10%] animate-spin-slow">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff66cc] to-[#66ccff] transform-style-3d rotate-x-45 rotate-y-45 shadow-lg shadow-[#ff66cc]/50"></div>
        </div>
        <div className="absolute bottom-[15%] right-[10%] animate-spin-slow">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#66ccff] to-[#ff66cc] transform-style-3d rotate-x-60 rotate-y-60 shadow-lg shadow-[#66ccff]/50"></div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative px-8 sm:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.id}`}
              key={project.id}
              className="group bg-[#1a1a40]/90 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform-style-3d hover:scale-105 hover:-translate-z-10 hover:border-[#ff66cc]/50 border border-transparent animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a001f]/80 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-[#ff66cc] to-[#66ccff] bg-clip-text text-transparent transition-colors duration-300 group-hover:from-[#66ccff] group-hover:to-[#ff66cc]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 transition-opacity duration-300 group-hover:opacity-80 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-[#ff66cc]/20 text-[#ff66cc] transition-colors duration-300 group-hover:bg-[#66ccff]/20 group-hover:text-[#66ccff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <div className="flex items-center mt-3">
                    <svg
                      className="w-5 h-5 mr-2 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="text-sm text-white">View on GitHub</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CSS for Animations and 3D Effects */}
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .rotate-x-45 {
          transform: rotateX(45deg);
        }

        .rotate-y-45 {
          transform: rotateY(45deg);
        }

        .rotate-x-60 {
          transform: rotateX(60deg);
        }

        .rotate-y-60 {
          transform: rotateY(60deg);
        }

        .hover\\:rotate-x-6:hover {
          transform: rotateX(6deg);
        }

        .hover\\:rotate-y-6:hover {
          transform: rotateY(6deg);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:-translate-z-10:hover {
          transform: translateZ(-10px);
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
