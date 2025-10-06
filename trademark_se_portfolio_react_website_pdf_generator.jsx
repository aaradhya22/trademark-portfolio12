/*
Trademark Sports & Entertainment — Portfolio React Single-File App

WHAT THIS FILE IS
- A single-file React component (default export) using Tailwind CSS utility classes.
- Includes: Landing, About, Skills, Projects, UI/Design, Contact sections.
- Includes a "Download PDF" button that uses html2canvas + jsPDF to produce a polished PDF of the portfolio.

HOW TO USE
1. Install dependencies in a Create React App / Vite React project:
   - tailwindcss configured (recommended)
   - npm install jspdf html2canvas
2. Drop this file in `src/components/Portfolio.jsx` and import in your App.
3. Replace placeholder text, project links, screenshots, and contact info.
4. Click "Download PDF" in the UI to generate a printable PDF (client-side).

CUSTOMIZATION / DEPLOY
- Host on Vercel, Netlify, or GitHub Pages.
- Use your domain (e.g., aaradhya.dev) for a professional touch.

NOTES
- The PDF generator attempts to snapshot the `#portfolio-print` element; complex animations may not render in the PDF.
- If you prefer a separate printable Markdown -> PDF pipeline, I included a `PrintableContent` section you can copy into a static markdown file for conversion.
*/

import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Portfolio() {
  const printRef = useRef();

  const projects = [
    {
      title: 'Trademark Sports Team Portal',
      desc: 'Dynamic portal for teams: rosters, schedules, live stats, and admin management. Real-time updates and mobile-first design.',
      tech: ['React', 'Tailwind', 'Node.js', 'Firebase'],
      link: '#'
    },
    {
      title: 'Multiplayer Arena (Prototype)',
      desc: 'Multiplayer game prototype with matchmaking, chat, and inventory systems — built to test engagement loops and low-latency servers.',
      tech: ['Unity', 'Photon', 'C#'],
      link: '#'
    },
    {
      title: 'Mobile Event App',
      desc: 'Cross-platform app for event schedules, push notifications, and ticket QR-checkin. Focused on UX for busy event attendees.',
      tech: ['React Native', 'Firebase', 'Stripe'],
      link: '#'
    }
  ];

  async function downloadPdf() {
    const el = document.getElementById('portfolio-print');
    if (!el) return;
    // increase scale for better quality
    const canvas = await html2canvas(el, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Aaradhya_Portfolio.pdf');
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
        {/* Sidebar */}
        <aside className="lg:col-span-1 bg-gradient-to-br from-black via-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
          <img src="https://via.placeholder.com/160" alt="Your photo" className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-gray-700" />
          <h1 className="text-center text-2xl font-bold mt-4">Aaradhya Asawale</h1>
          <p className="text-center text-sm text-gray-300">Full-Stack & Interactive Developer</p>

          <div className="mt-6 text-sm space-y-2">
            <p><strong>Focus:</strong> Web Design, Full-Stack, Games & Apps</p>
            <p><strong>Location:</strong> Phoenix / Remote</p>
            <p><strong>Email:</strong> youremail@example.com</p>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <a href="#" className="px-3 py-2 bg-blue-600 rounded-md text-white text-sm">GitHub</a>
            <a href="#" className="px-3 py-2 bg-indigo-600 rounded-md text-white text-sm">LinkedIn</a>
          </div>

          <div className="mt-6 text-xs text-gray-400">
            <p><strong>Available:</strong> Freelance & Full-time</p>
            <p className="mt-2">Tailored portfolio for <em>Trademark Sports & Entertainment</em> with sports/entertainment visual language.</p>
          </div>

          <div className="mt-6">
            <button onClick={() => downloadPdf()} className="w-full px-4 py-2 bg-green-600 rounded-md font-semibold">Download PDF</button>
          </div>
        </aside>

        {/* Main content */}
        <main id="portfolio-print" ref={printRef} className="lg:col-span-2 bg-gray-800 rounded-2xl p-6 shadow-inner">
          {/* Header / Hero */}
          <section className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-extrabold">Designing digital experiences for sports & entertainment</h2>
              <p className="mt-2 text-gray-300">Specializing in high-performance websites, scalable servers, cross-platform apps, and interactive games. I bridge UX-forward design with solid engineering.</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Selected tech</div>
              <div className="mt-2 flex gap-2">
                <span className="px-2 py-1 bg-gray-700 rounded">React</span>
                <span className="px-2 py-1 bg-gray-700 rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-700 rounded">Unity</span>
                <span className="px-2 py-1 bg-gray-700 rounded">AWS</span>
              </div>
            </div>
          </section>

          {/* About */}
          <section className="mb-6">
            <h3 className="text-xl font-bold mb-2">About Me</h3>
            <p className="text-gray-300">I’m a full-stack developer with experience in web design, app products, server infrastructure, and game prototypes. I focus on building responsive, accessible, and high-performance experiences tailored to sports audiences — ticketing flows, live stats, event apps, and fan engagement features.</p>
          </section>

          {/* Skills */}
          <section className="mb-6 grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold">Web & Design</h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>Responsive layouts (mobile-first)</li>
                <li>React, Next.js, Tailwind</li>
                <li>Figma → coded prototypes</li>
                <li>Accessibility & performance</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold">Backend & Servers</h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>Node.js, Express, REST & GraphQL</li>
                <li>Databases: PostgreSQL, MongoDB</li>
                <li>Scaling: load balancing, caching, CDNs</li>
                <li>Cloud: AWS, Firebase</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h4 className="font-semibold">Apps & Games</h4>
              <ul className="mt-2 text-sm text-gray-300 space-y-1">
                <li>React Native / Flutter apps</li>
                <li>Unity (C#) — prototypes & multiplayer</li>
                <li>Realtime networking (Photon, WebSocket)</li>
                <li>Analytics & monetization basics</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h3 className="text-xl font-bold mb-4">Highlighted Projects</h3>
            <div className="space-y-4">
              {projects.map((p, idx) => (
                <article key={idx} className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                      <p className="text-sm text-gray-300 mt-1">{p.desc}</p>
                      <div className="mt-2 text-xs text-gray-400">Tech: {p.tech.join(', ')}</div>
                    </div>
                    <div className="text-right">
                      <a href={p.link} className="px-3 py-1 bg-blue-600 rounded text-sm">View</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* UI / Design gallery */}
          <section className="mb-6">
            <h3 className="text-xl font-bold mb-3">Design Samples</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">Mockup 1</div>
              <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">Mockup 2</div>
              <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">Mockup 3</div>
              <div className="h-40 bg-gray-700 rounded-lg flex items-center justify-center">Mockup 4</div>
            </div>
          </section>

          {/* Experience / Short timeline */}
          <section className="mb-6">
            <h3 className="text-xl font-bold mb-3">Experience Snapshot</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><strong>Freelance Full-Stack Developer</strong> — Built websites and event apps for small sports brands.</li>
              <li><strong>Game Prototype (Personal)</strong> — Designed gameplay loop, matchmaking experiments, and server tests.</li>
              <li><strong>Server Admin / DevOps</strong> — Deployed and maintained Node.js services on AWS for low-latency endpoints.</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-6">
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <p className="text-gray-300">Interested in working together? I can adapt to Trademark's brand and workflows — whether that’s building event microsites, live stat systems, or fan engagement apps.</p>
            <div className="mt-3 flex gap-3">
              <a href="mailto:youremail@example.com" className="px-4 py-2 bg-blue-600 rounded">Email Me</a>
              <a href="#" className="px-4 py-2 bg-gray-700 rounded">Download Resume</a>
            </div>
          </section>

          <footer className="text-xs text-gray-500 mt-4">© {new Date().getFullYear()} Aaradhya Asawale — Portfolio tailored for Trademark Sports & Entertainment</footer>
        </main>
      </div>

      {/* Printable markdown / copy-friendly area (hidden visually but used for clean PDF if desired) */}
      <div className="sr-only" aria-hidden>
        <PrintableContent projects={projects} />
      </div>
    </div>
  );
}

function PrintableContent({ projects }) {
  return (
    <div id="printable-md">
      <h1>Aaradhya Asawale — Full-Stack & Interactive Developer</h1>
      <p>Contact: youremail@example.com</p>
      <h2>About</h2>
      <p>I’m a full-stack developer with experience in web design, apps, servers, and games. I specialize in fast, accessible, and beautiful digital experiences for sports & entertainment.</p>
      <h2>Projects</h2>
      {projects.map((p, i) => (
        <div key={i}>
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
          <p>Tech: {p.tech.join(', ')}</p>
        </div>
      ))}
      <h2>Skills</h2>
      <ul>
        <li>React, Next.js, Tailwind</li>
        <li>Node.js, Express, PostgreSQL, MongoDB</li>
        <li>Unity (C#), Photon</li>
      </ul>
    </div>
  );
}
