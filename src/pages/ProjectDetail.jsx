import { Link, useParams } from "react-router-dom";
import { portfolioData } from "./Showcase";
import {
  FiArrowLeft,
  FiExternalLink,
  FiLayers,
  FiStar,
  FiCode,
  FiCalendar,
} from "react-icons/fi";
import { FaFigma } from "react-icons/fa";



export default function ProjectDetail() {
  const { id } = useParams();

  const project = portfolioData.projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="h-screen flex justify-center items-center">
        Project tidak ditemukan.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white px-6 py-10">

      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-cyan-600"
        >
          <FiArrowLeft />
          Back
        </Link>

        {/* Title */}
        <h1 className="text-5xl font-bold text-cyan-700 mt-10">
          {project.title}
        </h1>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">

          {/* LEFT */}
          <div>

            <p className="text-gray-700 leading-8 text-lg">
              {project.desc}
            </p>

            {/* DATE */}
             <div className="flex items-center gap-3 bg-cyan-50 border border-cyan-200 rounded-xl px-4 py-3 mt-3 w-fit">
              <FiCalendar className="text-cyan-600" size={20} />
              <div>
                <p className="text-xs text-gray-500">Project Date</p>
                <p className="font-semibold text-cyan-700">
                  {project.date}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-5 mt-3">

              <div className="bg-cyan-600 text-white rounded-xl p-5">

                <FiLayers size={28} />

                <p className="text-4xl font-bold mt-3">
                  {project.technologies?.length || 0}
                </p>

                <p>Technologies Used</p>

              </div>

              <div className="bg-cyan-600 text-white rounded-xl p-5">

                <FiStar size={28} />

                <p className="text-4xl font-bold mt-3">
                  {project.features?.length || 0}
                </p>

                <p>Key Features</p>

              </div>

            </div>

            {/* Button */}
            <div className="flex gap-4 mt-5">

              {/* Demo */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  Demo
                  <FiExternalLink />
                </a>
              )}

              {/* Github */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  GitHub
                  <FiExternalLink />
                </a>
              )}

              {/* Figma */}
              {project.figma && (
                <a
                  href={project.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg flex items-center gap-2"
                >
                  Figma
                  <FaFigma />
                </a>
              )}

            </div>

            {/* Technology */}
            <div className="mt-5">

              <div className="flex items-center gap-2 text-cyan-700 font-bold text-xl mb-5">

                <FiCode />

                Technologies Used

              </div>

              <div className="flex flex-wrap gap-3">

                {project.technologies?.map((tech) => (

                  <span
                    key={tech}
                    className="bg-cyan-100 text-cyan-800 rounded-full px-5 py-2"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            {/* Screenshot */}
            <div className="rounded-3xl bg-cyan-200 p-5">

              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl w-full"
              />

            </div>

            {/* Feature */}
            <div className="bg-cyan-200 rounded-3xl p-8 mt-5">

              <h2 className="text-3xl font-semibold mb-6">

                Key Features

              </h2>

              <ul className="list-disc pl-5 space-y-4">

                {project.features?.map((item) => (

                  <li key={item}>{item}</li>

                ))}

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}