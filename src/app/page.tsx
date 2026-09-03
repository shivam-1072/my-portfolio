"use client";

import { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import React from "react";

export default function Home() {
  const waveRef = useRef<HTMLSpanElement>(null);

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

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4">
        
        {/* ============================================================ */}
        {/* SECTION 1: HERO (Terminal + Intro) */}
        {/* ============================================================ */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
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
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 2: ABOUT ME (Based on your CV) */}
        {/* ============================================================ */}
        <section id="about" className="w-full max-w-5xl mx-auto py-20 px-4 text-left">
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
        <section id="skills" className="w-full max-w-5xl mx-auto py-20 px-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            My <span className="text-blue-600">Tech Arsenal</span>
          </h2>
          <p className="mb-12 text-gray-500 max-w-2xl">
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
        <section id="projects" className="w-full max-w-5xl mx-auto py-20 px-4">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="mb-10 text-gray-500 max-w-2xl">
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

        {/* ============================================================ */}
        {/* SECTION 5: CONTACT (Coming Next) */}
        {/* ============================================================ */}
        {/* <section id="contact"> ... We will add this in Session #8 ... </section> */}

      </main>
    </>
  );
}