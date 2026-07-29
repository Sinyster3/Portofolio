import React from "react";
import habkiImg from "../assets/habki.jpeg";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[100vh] px-10 md:px-32 bg-white">
      
      {/* FOTO PROFIL */}
      <div className="flex-shrink-0 md:mr-16 mb-10 md:mb-0">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-cyan-400 overflow-hidden shadow-lg">
          <img
            src={habkiImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* TEKS */}
      <div className="max-w-3xl">
        <p className="text-cyan-600 text-2xl font-medium mb-4">
          Welcome to my site
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900"> 
          Hi, I’m{" "}
          <span className="text-cyan-600">
            Mohammad Habli Islamy Sholihin
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I am an Informatics graduate from Ahmad Dahlan University with a strong interest 
          in <span className="font-semibold">Front End Development</span>, {" "}
          <span className="font-semibold">Web Development</span> and{" "}
          <span className="font-semibold">Data Analytics. </span> 
          I enjoy transforming ideas into responsive, user-friendly, and visually 
          appealing web applications. Passionate about continuous learning, I am always 
          eager to explore new technologies and create digital solutions that deliver 
          meaningful user experiences.
        </p>
      </div>
    </section>
  );
}
