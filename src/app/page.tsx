"use client";

import { ReactTyped } from "react-typed";
import { useEffect, useRef, useState } from "react";
import Contact from "@/components/Contact";

export default function Home() {
  const waveRef = useRef<HTMLSpanElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (waveRef.current) {
      waveRef.current.style.animation = "wave 2.5s infinite";
    }
  }, []);

  return (
    <>
      {/* ===== WAVE ANIMATION ===== */}
      <style jsx global>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>

      <main className="bg-gradient-to-br from-gray-50 to-gray-100">
        
{/* ===== NAVBAR WITH HOVER UNDERLINE & NO BLUE SHADE ===== */}
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60 px-4 py-4">
  <div className="max-w-6xl mx-auto flex items-center justify-between">
    {/* Logo */}
    <a href="#" className="text-2xl font-bold text-gray-800">
      Shivam<span className="text-blue-600">.dev</span>
    </a>

    {/* Desktop Nav Links with Hover Underline - NO BLUE SHADE */}
<div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-600">
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent"
  >
    About
  </a>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent"
  >
    Skills
  </a>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent"
  >
    Projects
  </a>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent"
  >
    Contact
  </a>
  <a
    href="/cv"
    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold focus:outline-none active:scale-95"
  >
    📄 View CV
  </a>
</div>

    {/* Mobile Hamburger - Animated Icon */}
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden text-gray-600 text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
      aria-label="Toggle Menu"
    >
      {isMenuOpen ? '✕' : '☰'}
    </button>
  </div>

  {/* Mobile Menu Dropdown - SMOOTH SLIDE ANIMATION */}
  <div
    className={`
      md:hidden overflow-hidden transition-all duration-300 ease-in-out
      ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
    `}
  >
    <div className="flex flex-col items-center gap-4 text-base font-medium text-gray-600 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-lg">
      <a
        href="#about"
        onClick={() => setIsMenuOpen(false)}
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent py-1"
      >
        About
      </a>
      <a
        href="#skills"
        onClick={() => setIsMenuOpen(false)}
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent py-1"
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={() => setIsMenuOpen(false)}
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent py-1"
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setIsMenuOpen(false)}
        className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all after:duration-300 pb-0.5 hover:text-blue-600 transition-colors focus:outline-none active:bg-transparent py-1"
      >
        Contact
      </a>
      <a
        href="/cv"
        onClick={() => setIsMenuOpen(false)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-semibold w-full text-center focus:outline-none active:scale-95"
      >
        📄 View CV
      </a>
    </div>
  </div>
</nav>

        {/* ============================================================ */}
        {/* SECTION 1: HERO (Terminal + Intro) */}
        {/* ============================================================ */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-20 md:py-10">
          
          {/* LEFT: Terminal */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-xs ml-2 font-mono">bash — shivam@portfolio</span>
              </div>
              <div className="p-4 font-mono text-sm space-y-1">
                <p className="text-green-400">$ whoami</p>
                <p className="text-white pl-4">shivam.sharma</p>
                <p className="text-green-400">$ cat /etc/role</p>
                <p className="text-white pl-4">DevOps Support Engineer</p>
                <p className="text-green-400">$ docker ps --filter "status=running"</p>
                <p className="text-white pl-4">CONTAINER ID   IMAGE        STATUS</p>
                <p className="text-white pl-4">a1b2c3d4   portfolio-app  Up 2 hours</p>
                <p className="text-green-400">$ curl -I https://shivam.dev</p>
                <p className="text-yellow-300 pl-4">HTTP/1.1 200 OK ✅</p>
                <p className="text-green-400 animate-pulse">$ _</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Intro Text */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                Hi, I'm <span className="text-blue-600">Shivam</span>
              </h1>
              <span ref={waveRef} className="text-4xl inline-block origin-[70%_70%]">
                👋
              </span>
            </div>

            <div className="text-xl md:text-2xl text-gray-600 h-10">
              <ReactTyped
                strings={[
                  "DevOps Support Engineer ⚙️",
                  "Docker Container Wizard 🐳",
                  "CI/CD Pipeline Builder 🔄",
                  "Linux Production Expert 🐧",
                  "Cloud Infrastructure Enthusiast ☁️",
                ]}
                typeSpeed={50}
                backSpeed={30}
                backDelay={2000}
                loop
                className="font-medium"
              />
            </div>

            <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed">
              I keep banking applications running at <strong className="text-blue-600">99.9% uptime</strong>, 
              reduce MTTR by <strong className="text-blue-600">30%</strong>, and turn complex infrastructure 
              into simple, automated pipelines.
            </p>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-gray-800">3+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">99.9%</div>
                <div className="text-sm text-gray-500">Uptime Achieved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">30%</div>
                <div className="text-sm text-gray-500">MTTR Reduction</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                🔍 View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:-translate-y-0.5"
              >
                📬 Let's Talk
              </a>
              <a 
  href="/cv" 
  className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:-translate-y-0.5"
>
  📄 View CV
</a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: ABOUT ME (Based on your CV) */}
        {/* ============================================================ */}
        <section id="about" className="w-full max-w-5xl mx-auto py-12 px-4 text-left scroll-mt-20">
          <h2 className="mb-8 text-3xl font-bold text-gray-800 md:text-4xl">
            About <span className="text-blue-600">Me</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-3 space-y-4">
              <p className="text-lg text-gray-700">
                DevOps Support Engineer with <span className="text-blue-600 font-semibold">3+ years</span> of experience 
                in Linux-based production environments for banking applications.
              </p>
              <p className="text-gray-600">
                I've worked on critical systems including <span className="text-blue-600 font-medium">RFMS, VAM, SFMS, and CCIL</span>, 
                ensuring <span className="text-blue-600 font-medium">99.9% application availability</span>. 
                I reduced Mean Time To Resolution (MTTR) by <span className="text-blue-600 font-medium">30%</span> 
                through proactive monitoring and root cause analysis.
              </p>
              <p className="text-gray-600">
                Recently, I built and deployed a <span className="text-blue-600 font-medium">Construction Workforce Management System</span> 
                using Django, PostgreSQL, Docker, and GitHub Actions CI/CD – taking a project from code to cloud 
                entirely on my own.
              </p>
              <p className="text-gray-600">
                I hold an <span className="text-blue-600 font-medium">MCA</span> degree and am certified in 
                AWS Cloud Practitioner and Kubernetes Fundamentals. Currently, I'm sharpening my Next.js and 
                full-stack DevOps skills to bridge the gap between development and operations even further.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-700 border border-blue-200">
                  🎓 MCA
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-700 border border-blue-200">
                  ☁️ AWS Certified
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-700 border border-blue-200">
                  🐳 Docker + K8s
                </span>
                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-sm text-blue-700 border border-blue-200">
                  🔧 3+ Years Exp
                </span>
              </div>
            </div>

            <div className="md:col-span-2 rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">⚡ Quick Facts</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">💼</span> 
                  <span><strong className="text-gray-800">3+ Years</strong> in DevOps Support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">🏦</span> 
                  <span>Ex-<strong className="text-gray-800">Acutec Global Services</strong> (Banking)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">📈</span> 
                  <span>Reduced MTTR by <strong className="text-gray-800">30%</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">🚀</span> 
                  <span>Current Stack: <strong className="text-gray-800">Next.js + DevOps</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">🎯</span> 
                  <span>Goal: <strong className="text-gray-800">Full-Stack DevOps Consultant</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: SKILLS & SERVICES */}
        {/* ============================================================ */}
        <section id="skills" className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-20">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            My <span className="text-blue-600">Tech Arsenal</span>
          </h2>
          <p className="mb-8 text-gray-500 max-w-2xl">
            Tools and technologies I use daily to keep systems running smoothly.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">🐳</span>
              <span className="font-medium text-gray-700 text-sm">Docker</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">☁️</span>
              <span className="font-medium text-gray-700 text-sm">AWS</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">🐧</span>
              <span className="font-medium text-gray-700 text-sm">Linux</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">🐍</span>
              <span className="font-medium text-gray-700 text-sm">Python/Django</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">🔄</span>
              <span className="font-medium text-gray-700 text-sm">GitHub Actions</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">🐘</span>
              <span className="font-medium text-gray-700 text-sm">PostgreSQL</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">📦</span>
              <span className="font-medium text-gray-700 text-sm">Kubernetes</span>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <span className="text-3xl block mb-2">⚛️</span>
              <span className="font-medium text-gray-700 text-sm">Next.js</span>
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            What I <span className="text-blue-600">Offer</span>
          </h2>
          <p className="mb-10 text-gray-500 max-w-2xl">
            How I can help your business grow with reliable and modern tech solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                🛠️
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">DevOps Consulting</h3>
              <p className="text-gray-500 text-sm">
                CI/CD pipeline setup, containerization with Docker, and infrastructure automation to speed up your delivery.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                ☁️
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cloud Migration</h3>
              <p className="text-gray-500 text-sm">
                Move your applications to the cloud (AWS) with minimal downtime and maximum security.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Full-Stack Development</h3>
              <p className="text-gray-500 text-sm">
                Custom web applications using Python/Django, Next.js, and PostgreSQL – built to scale from day one.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: PROJECTS (Coming Next) */}

                {/* ============================================================ */}
        {/* SECTION 4: PROJECTS */}
        {/* ============================================================ */}
        <section id="projects" className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-20">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mb-6 text-gray-500 max-w-2xl">
            Real-world applications I've built, deployed, and managed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PROJECT CARD 1: CWMS */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-2 text-sm text-blue-600 font-mono mb-3">
                <span className="bg-blue-50 px-2 py-0.5 rounded">Django</span>
                <span className="bg-blue-50 px-2 py-0.5 rounded">Docker</span>
                <span className="bg-blue-50 px-2 py-0.5 rounded">CI/CD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Construction Workforce Management</h3>
              <p className="text-gray-500 text-sm mb-4">
                Full-stack application to manage sites, workers, attendance, payroll, and expenses. 
                Features PDF/Excel payment slips, dynamic dashboards, receipt uploads, and role-based access.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span>🐘 PostgreSQL</span>
                <span>🔄 GitHub Actions</span>
                <span>🐍 Python</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://github.com/shivam-1072/cwms" target="_blank" className="text-blue-600 font-medium text-sm hover:underline">
                  🔗 View Code →
                </a>
                {/* <a href="#" className="text-gray-400 text-sm hover:text-blue-600">Live Demo</a> */}
              </div>
            </div>

            {/* PROJECT CARD 2: DevOps Lab */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="flex items-center gap-2 text-sm text-blue-600 font-mono mb-3">
                <span className="bg-blue-50 px-2 py-0.5 rounded">Flask</span>
                <span className="bg-blue-50 px-2 py-0.5 rounded">K8s</span>
                <span className="bg-blue-50 px-2 py-0.5 rounded">Jenkins</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Containerization & DevOps Lab</h3>
              <p className="text-gray-500 text-sm mb-4">
                Containerized a Flask banking monitoring app using Docker, deployed on Kubernetes (Minikube) 
                using Deployment and Service YAMLs. Practiced CI/CD with Jenkins, Shell scripting, and pod monitoring.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span>🐳 Docker</span>
                <span>📦 Kubernetes</span>
                <span>⚙️ Jenkins</span>
                <span>🐚 Shell</span>
              </div>
              <div className="mt-4 flex gap-3">
                <a href="https://github.com/shivam-1072" target="_blank" className="text-blue-600 font-medium text-sm hover:underline">
                  🔗 View Code →
                </a>
              </div>
            </div>

            {/* PROFESSIONAL ACHIEVEMENT CARD (Banking Experience) */}
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl p-6 border border-blue-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 md:col-span-2">
              <div className="flex items-center gap-2 text-sm text-blue-600 font-mono mb-3">
                <span className="bg-white/70 px-2 py-0.5 rounded border border-blue-200">🏦 Production</span>
                <span className="bg-white/70 px-2 py-0.5 rounded border border-blue-200">99.9% Uptime</span>
                <span className="bg-white/70 px-2 py-0.5 rounded border border-blue-200">Linux</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Banking Production Support (RFMS, VAM, SFMS, CCIL)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Managed critical Linux-based banking applications ensuring <strong className="text-blue-600">99.9% availability</strong>. 
                Handled incident management, root cause analysis, and reduced MTTR by <strong className="text-blue-600">30%</strong>. 
                Coordinated with cross-functional teams to maintain system stability for high-value financial transactions.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                <span>🐧 RHEL/Ubuntu</span>
                <span>📊 Log Analysis</span>
                <span>🔄 OpenShift</span>
                <span>📈 Monitoring</span>
              </div>
              <div className="mt-4">
                <span className="text-sm text-gray-500">📍 Acutec Global Services (2022 - 2026)</span>
              </div>
            </div>

          </div>
        </section>        

        {/* ============================================================ */}
        {/* <section id="projects"> ... We will add this in Session #7 ... </section> */}

{/* <Contact /> */}

{/* ============================================================ */}
{/* SECTION: CONTACT - SIMPLEST POSSIBLE */}
{/* ============================================================ */}
<section id="contact" className="w-full max-w-5xl mx-auto py-12 px-4 scroll-mt-20">
  <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
    Let's <span className="text-blue-600">Connect</span>
  </h2>
  <p className="mb-10 text-gray-500 max-w-2xl">
    Have a project in mind or just want to chat? Reach out to me.
  </p>

  {/* SIMPLE TWO-COLUMN LAYOUT */}
  <div className="w-full">
    <div className="flex flex-wrap -mx-4">
      
      {/* LEFT COLUMN */}
      <div className="w-full md:w-1/2 px-4">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              📧
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href="mailto:shivam1072@gmail.com" className="text-gray-800 font-medium hover:text-blue-600">
                shivam1072@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              📱
            </div>
            <div>
              <p className="text-sm text-gray-500">Phone</p>
              <a href="tel:+917506992276" className="text-gray-800 font-medium hover:text-blue-600">
                +91 7506992276
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
              🌐
            </div>
            <div>
              <p className="text-sm text-gray-500">Find me online</p>
              <div className="flex gap-4 mt-1">
                <a href="https://github.com/shivam-1072" target="_blank" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/shivamsharma1072" target="_blank" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">📍 Mumbai, India</p>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                rows={4} 
                placeholder="Tell me about your project..." 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              📤 Send Message
            </button>
            <p className="text-xs text-gray-400 text-center mt-2">
              * This is a demo form. For now, please email me directly.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* ============================================================ */}
        {/* SECTION 6: FOOTER */}
        {/* ============================================================ */}
        <footer className="w-full border-t border-gray-200 bg-white/50 mt-8">
          <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} Shivam Sharma. Built with 
              <span className="text-blue-600"> Next.js</span> & 
              <span className="text-blue-600"> Tailwind</span>.
            </p>
            <div className="flex gap-6 mt-2 md:mt-0">
              <a href="#about" className="hover:text-blue-600 transition">About</a>
              <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
              <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}