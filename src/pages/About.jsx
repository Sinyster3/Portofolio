import React from "react";
import AboutPhoto from "../components/AboutPhoto";
import habkiImg from "../assets/habki2.jpeg";
import { portfolioData } from "./Showcase";

export default function About() {
  const totalProjects = portfolioData.projects.length;
  const totalCertificates = portfolioData.certificates.length;
  const totalTools = portfolioData.tools.length;

  return (
    <section id="about" className="bg-white px-6 lg:px-12 xl:px-20 py-14">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-700">
          About Me
        </h2>
        <p className="mt-2 text-gray-700 text-lg">
          Transforming ideas into digital experience
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-10 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-2 space-y-10">
          {/* Who Am I + Approach */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-700">Who Am I</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                I am a web developer and data analyst with a passion for transforming 
                complex data into meaningful insights and creating functional, user-focused 
                digital solutions.  I have experience developing web applications through 
                internships, academic projects, and personal projects using modern web 
                technologies such as HTML, CSS, JavaScript, React, Tailwind CSS, and Laravel. 
                I enjoy solving problems, collaborating with teams, and continuously improving
                 my technical skills to build impactful digital products.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-cyan-700">My Approach</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                I believe that great websites are built by combining clean code, responsive 
                design, and user-centered experiences. In every project, I focus on understanding 
                user needs, writing maintainable code, and creating interfaces that are simple, 
                accessible, and visually engaging. I am committed to continuous learning and always 
                strive to improve both my technical and communication skills. My goal is to deliver 
                clean, efficient, and scalable solutions that not only meet technical requirements 
                but also provide real value.
              </p>
            </div>
          </div>

          {/* Personal Info */}
          <div>
            <h3 className="text-2xl font-semibold text-cyan-700">Personal Info</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-800">
              <InfoRow icon={<IconId />} label="Name" value="Mohammad Habli Islamy Sholihin" />
              <InfoRow icon={<IconCap />} label="Education" value="Universitas Ahmad Dahlan" />
              <InfoRow icon={<IconPin />} label="Place of Birth" value="Ciamis, Indonesia" />
              <InfoRow icon={<IconMedal />} label="GPA" value="3.51" />
              <InfoRow icon={<IconCalendar />} label="Date of Birth" value="3 February 2003" />
            </div>

            {/* CTA buttons same style */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-cyan-600 text-cyan-700 font-semibold
                           hover:bg-cyan-600 hover:text-white transition-colors duration-200"
              >
                <IconDownload className="w-5 h-5" />
                View CV
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-cyan-600 text-cyan-700 font-semibold
                           hover:bg-cyan-600 hover:text-white transition-colors duration-200"
              >
                <IconChevronRight className="w-5 h-5" />
                View Project
              </a>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className="flex justify-center lg:justify-end">
          <AboutPhoto src={habkiImg} alt="Profile photo" />
        </div>
      </div>

      {/* STATS (angka di atas showcase) */}
      <div className="max-w-7xl mx-auto mt-10 grid md:grid-cols-3 gap-6">
        <StatCard
          icon={<IconArrowSync className="w-7 h-7" />}
          value={totalProjects}
          title="TOTAL PROJECT"
          desc="Innovative web solutions crafted"
        />
        <StatCard
          icon={<IconUserCheck className="w-7 h-7" />}
          value={totalCertificates}
          title="CERTIFICATES"
          desc="Professional skills validated"
        />
        <StatCard
          icon={<IconTools className="w-7 h-7" />}
          value={totalTools}
          title="TOOLS & TECHNOLOGY"
          desc="Continuous learning journey"
        />
      </div>
    </section>
  );
}

/* ===================== Small components ===================== */
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 text-cyan-600">{icon}</span>
      <p>
        <span className="font-semibold">{label}</span> : {value}
      </p>
    </div>
  );
}

function StatCard({ icon, value, title, desc }) {
  return (
    <div className="relative rounded-2xl bg-cyan-600/10 border border-cyan-200 px-6 py-8">
      
      {/* ANGKA DI KANAN ATAS */}
      <span className="absolute top-4 right-6 text-3xl font-extrabold text-cyan-800">
        {value}
      </span>

      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow">
          <span className="text-cyan-700">{icon}</span>
        </div>
      </div>

      {/* Text */}
      <div className="text-center">
        <h4 className="text-cyan-700 font-semibold tracking-wide">
          {title}
        </h4>
        <p className="mt-1 text-sm text-cyan-900/80">
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ===================== Icons ===================== */
function IconId(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="M7 14h4M15 10h4M15 14h4" />
    </svg>
  );
}
function IconCap(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5.5A10 10 0 0012 20a10 10 0 006-2.5V12" />
    </svg>
  );
}
function IconPin(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}
function IconCalendar(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}
function IconMedal(props) {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M8 12l-2 8 6-3 6 3-2-8" />
    </svg>
  );
}
function IconDownload(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className ?? "w-5 h-5"} stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M5 21h14" />
    </svg>
  );
}
function IconChevronRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={props.className ?? "w-5 h-5"} stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
function IconArrowSync(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12a9 9 0 0115.54-5.64M21 12a9 9 0 01-15.54 5.64" />
      <path d="M3 5v6h6M21 19v-6h-6" />
    </svg>
  );
}
function IconUserCheck(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="7" r="4" />
      <path d="M15 19a6 6 0 00-12 0" />
      <path d="M16 11l2 2 4-4" />
    </svg>
  );
}
function IconTools(props) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3l3 3m-9.9 9.9l-3-3M7 8l-4 4 9 9 4-4-9-9z" />
      <path d="M22 12l-2 2-4-4 2-2a3 3 0 114 4z" />
    </svg>
  );
}