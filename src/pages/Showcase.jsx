import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import proj1 from"../assets/projects/portofolio.png";
import proj2 from"../assets/projects/skripsi.png";
import proj3 from"../assets/projects/technophoria.png";
import proj4 from"../assets/projects/webcamping.png";
import proj5 from"../assets/projects/etillang.png";
import proj6 from"../assets/projects/email.png";

import cert1 from "../assets/certif/hactiv.png";
import cert2 from "../assets/certif/datasciencemachinelearning.jpg";
import cert3 from "../assets/certif/bootcampitsupport.jpg";
import cert4 from "../assets/certif/smartpathbootcamp.png";
import cert5 from "../assets/certif/theroleofmachinelearning.jpg";
import cert6 from "../assets/certif/infosession.jpg";
import cert7 from "../assets/certif/softskil.jpg";

import Logo1 from "../assets/tools/html.png";
import Logo2 from "../assets/tools/css.png";
import Logo3 from "../assets/tools/javascript.png";
import Logo4 from "../assets/tools/c++.png";
import Logo5 from "../assets/tools/java.png";
import Logo6 from "../assets/tools/python.png";
import Logo7 from "../assets/tools/figma.png";
import Logo8 from "../assets/tools/laravel.png";
import Logo9 from "../assets/tools/tailwindcss.png";
import Logo10 from "../assets/tools/php.png";
import Logo11 from "../assets/tools/mysql.png";
import Logo12 from "../assets/tools/react.png";



/* ===================== DATA (dipakai juga oleh About) ===================== */
export const portfolioData = {
  projects: [
    {
      id: 1,
      title:"Project Portfolio",
      date:"Juli 2026",
      desc:"Website portfolio pribadi yang menampilkan profil, pengalaman, proyek, sertifikat, serta keahlian teknis dalam tampilan modern, responsif, dan interaktif. Website ini dirancang untuk memudahkan recruiter atau klien dalam melihat hasil karya dan informasi profesional..",
      tag: "Front End Developer",
      image: proj1, //portfolioImg
      demo:"#", //https://namadomainmu.vercel.app
      github:"https://github.com/Sinyster3/Portofolio", //https://github.com/username/portfolio
      technologies:[
          "React",
          "Tailwind CSS",
          "HTML",
          "CSS",
          "JavaScript"
      ],
      features:[
          "Personal profile dan informasi karier",
          "Showcase project beserta halaman detail setiap project",
          "Galeri sertifikat dengan fitur preview gambar",
          "Desain Responsif"
      ]
    },
    {
      id: 2,
      title:"Perbandingan Algortma Gradient Boosting dan Random Forest Dalam Prediksi Pinjaman Nasabah ke Bank",
      date:"Oktober 2025",
      desc:"Membangun model machine learning untuk membandingkan performa algoritma Gradient Boosting dan Random Forest dalam memprediksi kelayakan pinjaman nasabah bank. Proyek ini mencakup proses data preprocessing, pelatihan model, evaluasi performa, dan perbandingan akurasi untuk menentukan algoritma terbaik.",
      tag: "SKRIPSI",
      image: proj2, 
      demo:"https://colab.research.google.com/drive/1Q0p3oKjBLh52DeMxEGN1TPuua4EWYUYc?usp=sharing", 
      github:"", 
      technologies:[
          "Python",
          "Data Mining",
          "Data Analyst",
          "Pandas",
          "NumPy",
          "Scikit-Learn",
          "Matplotlib",
          "Google Colab"
      ],
      features:[
          "Data cleaning dan preprocessing",
          "Perbandingan algoritma Gradient Boosting & Random Forest",
          "Prediksi status kelayakan pinjaman nasabah",
          "Evaluasi model menggunakan Accuracy, Precision, Recall, F1-Score, dan Confusion Matrix",
          "Visualisasi hasil perbandingan performa model"
      ]
    },
    {
      id: 3,
      title:"Technophoria Indonesia",
      date:"Januari 2025",
      desc:"Mengembangkan website Technophoria Training, sebuah platform e-commerce untuk penjualan dan pengelolaan pelatihan online. Selama magang, saya berkontribusi pada pengembangan tampilan website agar responsif, mudah digunakan, dan sesuai dengan kebutuhan pengguna.",
      tag: "Front End Developer",
      image: proj3, //portfolioImg
      figma: "https://www.figma.com/proto/Q6KfOiMET6wjMd5dhdaX95/TECHNOPHORIA-ECOMMERCE?node-id=128-1686&starting-point-node-id=128%3A1686&t=BsQyub9z6JPsMUEi-1",
      demo:"", 
      github:"https://github.com/Sinyster3/ECommers-Technophoria-Training", 
      technologies:[
          "Laravel",
          "PHP",
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "MySQL",
          "Git"
      ],
      features:[
          "Responsive Design",
          "Katalog Pelatihan",
          "Detail Produk",
          "Login & Register",
          "Kerangjang Belanja",
          "Simple UI",
      ]
    },
    {
      id: 4,
      title:"Web Camping Equipment",
      date:"Agustus 2024",
      desc:"Mengembangkan website Penjualan alat camping yang memudahkan pengguna untuk melihat katalog perlengkapan, melakukan pemesanan, serta mengelola proses Pembelian secara online dengan tampilan yang responsif dan mudah digunakan.",
      tag: "Front End Developer",
      image: proj4, //portfolioImg
      demo:"", //https://namadomainmu.vercel.app
      github:"https://github.com/Sinyster3/Web-Camping-Equipment", 
      figma:"https://www.figma.com/proto/XGte35lSk4fRLtjeq37PsQ/UI-UX-PANDEYAN-PROJECT?node-id=471-50&starting-point-node-id=471%3A50&t=iYf7yhhKfQGF2jQf-1",
      technologies:[
          "HTML",
          "CSS",
          "JavaScript",
          "Boostrap",
          "PHP",
          "MySQL"
      ],
      features:[
          "Responsive Design",
          "Simple UI",
          "Katalog & Detail Produk",
          "Sistem Pemesanan &  Pembayaran"
      ]
    },
    {
      id: 5,
      title:"Pelacakan Plat Nomor Kendaraan",
      date:"Juli 2023",
      desc:"Merancang desain UI/UX aplikasi pelacakan plat nomor kendaraan yang berfokus pada kemudahan pengguna dalam mencari informasi kendaraan melalui antarmuka yang sederhana, intuitif, dan responsif.",
      tag: "UI/UX",
      image: proj5, //portfolioImg
      figma:"https://www.figma.com/design/HQYzmoMufwDHoWCF95LCjB/Pelacakan-Plat-Nomor-Kendaraan?node-id=0-1&t=ZWyOZhiKpnhACGGG-1",
      demo:"",
      github:"", //https://github.com/username/portfolio
      technologies:[
          "Figma",
          "UI/UX"
      ],
      features:[
          "Halaman pencarian plat nomor kendaraan",
          "Dashboard hasil pencarian",
          "Navigasi yang sederhana dan user-friendly",
          "Login & Register"
      ]
    },
    {
      id: 6,
      title:"Deteksi Spam Email",
      date:"Juli 2024",
      desc:"Membangun model deteksi spam email menggunakan machine learning di Google Colab. Proyek ini meliputi preprocessing data, ekstraksi fitur teks, pelatihan model, dan evaluasi untuk mengklasifikasikan email sebagai spam atau non-spam.",
      tag: "Data Mining",
      image: proj6, //portfolioImg
      demo:"https://colab.research.google.com/drive/1QHZyeYvUH1lZniLn4Pcmu8RFA9Rx70IJ#scrollTo=JmS4qANwJRew", //https://namadomainmu.vercel.app
      github:"", //https://github.com/username/portfolio
      technologies:[
          "Naive Bayes",
          "Google Colab",
          "Pandas",
          "NumPy",
      ],
      features:[
          "Preprocessing dan pembersihan data teks",
          "Ekstraksi fitur menggunakan TF-IDF",
          "Klasifikasi email spam dan non-spam"
      ]
    },
  ],

  certificates: [
    {
      id: 1,
      title: "AI for Work & Career Readiness with Google AI Products",
      image: cert1, // ganti dengan cert1
      link: "#",
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      image: cert1, // ganti dengan cert1
      link: "#",
    },
    {
      id: 3,
      title: "Bootcamp IT Support",
      image: cert2,
      link: "#",
    },
    {
      id: 4,
      title: "Smartpath Bootcamp Analisis Data International",
      image: cert3,
      link: "#",
    },
    {
      id: 5,
      title: "The Role of Machine Learning in Supporting Digital Indonesia 2024",
      image: cert4,
      link: "#",
    },
    {
      id: 6,
      title: "Info Session “Intership: Maximize The Selection Process”",
      image: cert5,
      link: "#",
    },
    {
      id: 7,
      title: "Softskill Universitas Ahmad Dahlan",
      image: cert6,
      link: "#",
    },
  ],

  tools: [
    { id: 1, name: "HTML", icon: Logo1 },
    { id: 2, name: "CSS", icon: Logo2 },
    { id: 3, name: "JavaScript", icon: Logo3 },
    { id: 4, name: "C++", icon: Logo4 },
    { id: 5, name: "Java", icon: Logo5 },
    { id: 6, name: "Python", icon: Logo6 },
    { id: 7, name: "Figma", icon: Logo7 },
    { id: 8, name: "Laravel", icon: Logo8 },
    { id: 9, name: "TailwindCSS", icon: Logo9 },
    { id: 10, name: "PHP", icon: Logo10 },
    { id: 11, name: "MySQL", icon: Logo11 },
    { id: 12, name: "React", icon: Logo12 },
  ],
};

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedImage, setSelectedImage] = useState(null);
  const tabs = useMemo(
    () => [
      { key: "projects", label: "Project", icon: <IconCode className="w-5 h-5" /> },
      { key: "certificates", label: "Certificates", icon: <IconBadge className="w-5 h-5" /> },
      { key: "tools", label: "Tools", icon: <IconGear className="w-5 h-5" /> },
    ],
    []
  );

  return (
    <>
    <section className="bg-white px-6 lg:px-12 xl:px-20 py-14" id="showcase">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-700">
          Portfolio Showcase
        </h2>
        <p className="mt-2 text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          Explore my journey through projects, and technical expertise. Each section represent a
          milestone in my continuous learning path
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto mt-6">
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {tabs.map((t) => {
            const isActive = t.key === activeTab;
            return (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                type="button"
                aria-pressed={isActive}
                className={[
                  "flex items-center gap-2 rounded-lg px-8 py-2.5 text-sm font-semibold transition",
                  isActive
                    ? "bg-cyan-600 text-white shadow"
                    : "bg-white text-cyan-700 hover:bg-cyan-50 border border-cyan-200",
                ].join(" ")}
              >
                <span className={isActive ? "text-white" : "text-cyan-700"}>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content wrapper (bg cyan besar seperti gambar) */}
        <div className="mt-6 rounded-2xl bg-cyan-200/60 p-6 md:p-8">
          {activeTab === "projects" && <ProjectsGrid data={portfolioData.projects} />}
          {activeTab === "certificates" && <CertificatesGrid data={portfolioData.certificates} onImageClick={setSelectedImage} />}
          {activeTab === "tools" && <ToolsGrid data={portfolioData.tools} />}
        </div>
      </div>
    </section>
    
    {/* Modal */}
    {selectedImage && (
      <div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        onClick={() => setSelectedImage(null)}
      >
        <div
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 text-xl"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Certificate"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      </div>
    )}
  </>
);
}

/* ===================== Projects ===================== */
function ProjectsGrid({ data }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
      {data.length === 0 && (
        <div className="col-span-full text-center text-cyan-900/70 py-10">Belum ada project.</div>
      )}
    </div>
  );
}

function ProjectCard({ item }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-cyan-100 overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-32 bg-gray-100 overflow-hidden flex items-center justify-center">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-xs text-gray-400">No Image</span>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-bold text-gray-900 leading-snug text-sm">{item.title}</h4>
        <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-3">{item.desc}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[11px] px-2 py-1 rounded-md bg-gray-100 text-gray-700">
            {item.tag ?? "Info"}
          </span>

          <Link
            to={`/project/${item.id}`}
            className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition">
            Detail
            <IconArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </div>
    </div>
  );
}

/* ===================== Certificates (seperti gambar: kotak besar + gambar + judul) ===================== */
function CertificatesGrid({ data, onImageClick}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((c) => (
        <div
          key={c.id}
          
          className="group rounded-2xl bg-cyan-300/60 border border-cyan-200 h-64 flex items-end p-4 text-center justify-center transition hover:bg-cyan-300/80"
        >
          <div className="w-full">
            {/* gambar certificate */}
            <div className="mx-auto mb-3 h-32 w-32 md:h-36 md:w-36 rounded-xl bg-white/70 flex items-center justify-center overflow-hidden">
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition"
                  loading="lazy"
                  onClick={(e) => {
                  e.preventDefault();
                  onImageClick(c.image);
                }}
                />
              ) : (
                <span className="text-[10px] text-gray-500">IMG</span>
              )}
            </div>

            <p className="text-xs font-semibold text-cyan-900 leading-snug line-clamp-2">
              {c.title}
            </p>
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="col-span-full text-center text-cyan-900/70 py-10">
          Belum ada certificate.
        </div>
      )}
    </div>
  );
}

/* ===================== Tools (seperti gambar: grid icon kecil) ===================== */
function ToolsGrid({ data }) {
  return (
    <div>
      <h3 className="text-center text-cyan-800 font-extrabold text-xl md:text-2xl mb-6">
        Tools & Technologies
      </h3>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center">
        {data.map((t) => (
          <div
            key={t.id}
            className="w-20 h-20 rounded-xl bg-cyan-100/80 border border-cyan-200 flex flex-col items-center justify-center gap-1 shadow-sm"
            title={t.name}
          >
            <div className="h-14 w-14 rounded-lg bg-white flex items-center justify-center overflow-hidden">
              {t.icon ? (
                <img src={t.icon} alt={t.name} className="w-full h-full object-contain " />
              ) : (
                <span className="text-[10px] text-gray-500">ICON</span>
              )}
            </div>
            <p className="text-[10px] font-semibold text-cyan-900">{t.name}</p>
          </div>
        ))}
      </div>

      {data.length === 0 && (
        <div className="text-center text-cyan-900/70 py-10">Belum ada tools.</div>
      )}
    </div>
  );
}

/* ===================== Icons ===================== */
function IconCode({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 9l-3 3 3 3" />
      <path d="M14 9l3 3-3 3" />
      <path d="M12 7l-1 10" />
    </svg>
  );
}
function IconBadge({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2l3 5 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-5z" />
    </svg>
  );
}
function IconGear({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M19.4 15a7.7 7.7 0 00.1-2l2-1.1-2-3.5-2.3.6a7.9 7.9 0 00-1.7-1L15 5h-6l-.5 2.9a7.9 7.9 0 00-1.7 1l-2.3-.6-2 3.5L4.6 13a7.7 7.7 0 00.1 2L2.7 16.1l2 3.5 2.3-.6a7.9 7.9 0 001.7 1L9 22h6l.5-2.9a7.9 7.9 0 001.7-1l2.3.6 2-3.5-2.1-1.1z" />
    </svg>
  );
}
function IconArrowRight({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}