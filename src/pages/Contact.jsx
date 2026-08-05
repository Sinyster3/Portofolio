  import React, { useState } from "react";  
  import { supabase } from "../lib/supabase";
  import GuestBook from "../components/GuestBook";

  import linkedinLogo from "../assets/linkedin.webp";
  import githubLogo from "../assets/github.png";
  import instagramLogo from "../assets/instagram.png";
  import tiktokLogo from "../assets/tiktok.png";
  import xLogo from "../assets/x.png";


  export default function Contact() {
    const [form, setForm] = useState({ name: "", message: "" });

    function onChange(e) {
      setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {

  await supabase
  .from("messages")
  .insert([
    {
      name: form.name,
      email: form.email,
      message: form.message,
    },
  ]);

console.log("DATA:", data);
console.log("ERROR:", error);

if (error) {
  alert(error.message);
  return;
}
      

      alert("Pesan berhasil dikirim!");

      setForm({
      name: "",
      message: "",
      });
    }

    return (
      <section id="contact" className="bg-white px-6 lg:px-12 xl:px-20 py-14">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-700">
            Contact Me
          </h2>
          <p className="mt-2 text-gray-700">
            Got a questions? Send a message, and I’ll get back to you soon
          </p>
        </div>

        {/* Container */}
        <div className="max-w-6xl mx-auto mt-8 rounded-2xl bg-cyan-200/60 p-6 md:p-8">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* LEFT */}
            <div className="lg:col-span-1 space-y-5">
              {/* Info box */}
              <div className="rounded-xl bg-white/70 border border-cyan-200 p-5">
                <InfoItem
                  icon={<IconMail />}
                  label="Email"
                  value="mhabliislamy28@gmail.com"
                />
                <div className="h-3" />
                <InfoItem icon={<IconPhone />} label="Phone" value="+62 857-9376-6037" />
                <div className="h-3" />
                <InfoItem
                  icon={<IconPin />}
                  label="Location"
                  value="Ciamis, Indonesia"
                />
              </div>

              {/* Connect With Me */}
              <div className="rounded-xl bg-white/70 border border-cyan-200 p-5">
                <p className="text-center font-semibold text-cyan-700 mb-4">
                  Connect With Me
                </p>

                
                <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <SocialBox
                    logo={linkedinLogo}
                    label="LinkedIn"
                    href="https://www.linkedin.com/in/mhabli-islamys"
                    />
                  </div>
                  
                  <SocialBox 
                    logo={instagramLogo}
                    label="Instagram" 
                    href="https://www.instagram.com/mhabli_islamy/" 
                    />
                  <SocialBox 
                    logo={tiktokLogo}
                    label="Tiktok" 
                    href="https://www.tiktok.com/@astra.jingga03" 
                    />
                  <SocialBox 
                    logo={githubLogo}
                    label="GitHub" 
                    href="https://github.com/Sinyster3" 
                    />
                  <SocialBox 
                    logo={xLogo}
                    label="&nbsp; X" 
                    href="https://x.com/iyaIniHabli" 
                    />

                </div>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="lg:col-span-2 rounded-xl bg-white/70 border border-cyan-200 p-6">
              <div className="text-center mb-5">
                <h3 className="text-xl font-extrabold text-cyan-700">Leave a Message</h3>
                <p className="text-sm text-gray-700">
                  Thank you for visiting my portfolio. Feel free to leave a message, feedback, or just say hello!
                </p>
              </div>


              <form onSubmit={onSubmit} className="space-y-4">
                <Field label="Name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Input name ..."
                    className="w-full rounded-md bg-cyan-100/70 border border-cyan-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-300"
                    required
                  />
                </Field>

                <Field label="Message">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Enter your message ..."
                    rows={5}
                    className="w-full resize-none rounded-md bg-cyan-100/70 border border-cyan-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-300"
                    required
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full rounded-md bg-cyan-700 text-white font-semibold py-2.5 hover:bg-cyan-800 transition inline-flex items-center justify-center gap-2"
                >
                  Submit
                  <IconSend />
                </button>
              </form>
            </div>
          </div>
        </div>
        <GuestBook />
      </section>
    );
  }

  /* ===================== Small components ===================== */

  function Field({ label, children }) {
    return (
      <label className="block">
        <span className="block text-sm font-semibold text-cyan-800 mb-1">{label}</span>
        {children}
      </label>
    );
  }

  function InfoItem({ icon, label, value }) {
    return (
      <div className="flex items-start gap-3">
        <div className="mt-0.5 h-9 w-9 rounded-full bg-white flex items-center justify-center shadow-sm">
          <span className="text-cyan-700">{icon}</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-cyan-800">{label}</p>
          <p className="text-sm text-gray-700">{value}</p>
        </div>
      </div>
    );
  }

  function SocialBox({ logo, label, href }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 rounded-lg bg-cyan-100/70 border border-cyan-200 flex items-center justify-center text-sm font-semibold text-cyan-800 hover:bg-cyan-200/70 transition"
      >
        <img
          src={logo}
          alt={label}
          className="w-6 h-6 object-contain"
        />
        <span>{label}</span>
      </a>
    );
  }

  /* ===================== Icons ===================== */

  function IconMail() {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 6h16v12H4z" />
        <path d="M4 7l8 6 8-6" />
      </svg>
    );
  }

  function IconPhone() {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.86 19.86 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.12.86.3 1.7.54 2.5a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.58-1.6a2 2 0 012.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0122 16.92z" />
      </svg>
    );
  }

  function IconPin() {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 21s7-4.35 7-10a7 7 0 10-14 0c0 5.65 7 10 7 10z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    );
  }

  function IconSend() {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    );
  }