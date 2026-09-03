export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
        Hi, I'm <span className="text-purple-400">Shivam</span>
      </h1>
      <p className="mb-8 max-w-2xl text-lg text-gray-300 md:text-xl">
        I build modern web solutions and automate infrastructure. 
        From code to cloud – I handle it all.
      </p>
      <div className="flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-purple-500 px-6 py-3 font-semibold text-purple-400 transition hover:bg-purple-500 hover:text-white"
        >
          Let's Talk
        </a>
      </div>
  

{/* Stats Bar */}
<div className="mb-10 flex flex-wrap justify-center gap-8 text-white">
  <div className="text-center">
    <div className="text-3xl font-bold text-purple-400 md:text-4xl">5+</div>
    <div className="text-sm text-gray-400">Projects Delivered</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-purple-400 md:text-4xl">2+</div>
    <div className="text-sm text-gray-400">Years Learning</div>
  </div>
  <div className="text-center">
    <div className="text-3xl font-bold text-purple-400 md:text-4xl">10+</div>
    <div className="text-sm text-gray-400">Happy Clients</div>
  </div>
</div>

{/* ===== ABOUT SECTION (Based on Real CV) ===== */}
<section id="about" className="w-full max-w-5xl py-20 px-4 text-left">
  <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
    About <span className="text-purple-400">Me</span>
  </h2>
  
  <div className="grid gap-8 md:grid-cols-5">
    {/* Left side: Text */}
    <div className="md:col-span-3 space-y-4">
      <p className="text-lg text-gray-300">
        DevOps Support Engineer with <span className="text-purple-400 font-semibold">3+ years</span> of experience 
        in Linux-based production environments for banking applications.
      </p>
      <p className="text-gray-400">
        I've worked on critical systems including <span className="text-purple-300 font-medium">RFMS, VAM, SFMS, and CCIL</span>, 
        ensuring <span className="text-purple-300 font-medium">99.9% application availability</span>. 
        I reduced Mean Time To Resolution (MTTR) by <span className="text-purple-300 font-medium">30%</span> 
        through proactive monitoring and root cause analysis.
      </p>
      <p className="text-gray-400">
        Recently, I built and deployed a <span className="text-purple-300 font-medium">Construction Workforce Management System</span> 
        using Django, PostgreSQL, Docker, and GitHub Actions CI/CD – taking a project from code to cloud 
        entirely on my own.
      </p>
      <p className="text-gray-400">
        I hold an <span className="text-purple-300 font-medium">MCA</span> degree and am certified in 
        AWS Cloud Practitioner and Kubernetes Fundamentals. Currently, I'm sharpening my Next.js and 
        full-stack DevOps skills to bridge the gap between development and operations even further.
      </p>
      
      {/* Credential Badges */}
      <div className="flex flex-wrap gap-3 pt-4">
        <span className="rounded-full bg-purple-900/30 px-4 py-1.5 text-sm text-purple-300 border border-purple-500/20">
          🎓 MCA
        </span>
        <span className="rounded-full bg-purple-900/30 px-4 py-1.5 text-sm text-purple-300 border border-purple-500/20">
          ☁️ AWS Certified
        </span>
        <span className="rounded-full bg-purple-900/30 px-4 py-1.5 text-sm text-purple-300 border border-purple-500/20">
          🐳 Docker + K8s
        </span>
        <span className="rounded-full bg-purple-900/30 px-4 py-1.5 text-sm text-purple-300 border border-purple-500/20">
          🔧 3+ Years Exp
        </span>
      </div>
    </div>

    {/* Right side: Quick Facts Card */}
    <div className="md:col-span-2 rounded-xl bg-white/5 p-6 border border-white/10 backdrop-blur-sm">
      <h3 className="mb-4 text-lg font-semibold text-white">⚡ Quick Facts</h3>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-center gap-3">
          <span className="text-purple-400">💼</span> 
          <span><strong className="text-white">3+ Years</strong> in DevOps Support</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-purple-400">🏦</span> 
          <span>Ex-<strong className="text-white">Acutec Global Services</strong> (Banking Domain)</span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-purple-400">📈</span> 
          <span>Reduced MTTR by <strong className="text-white">30%</strong></span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-purple-400">🚀</span> 
          <span>Current Stack: <strong className="text-white">Next.js + DevOps</strong></span>
        </li>
        <li className="flex items-center gap-3">
          <span className="text-purple-400">🎯</span> 
          <span>Goal: <strong className="text-white">Full-Stack DevOps Consultant</strong></span>
        </li>
      </ul>
    </div>
  </div>
</section>

    </main>
  );

  
}