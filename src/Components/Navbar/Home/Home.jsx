import React from "react";
import avatarImg from "../../../../public/profile.jpg";

const Home = () => {
  const handlePrintResume = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>Sonu_Nishad_Resume</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              color: #1e293b;
              margin: 0;
              padding: 40px;
              font-size: 14px;
              line-height: 1.5;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #0f172a;
              padding-bottom: 12px;
              margin-bottom: 20px;
            }
            .name {
              font-size: 26px;
              font-weight: 800;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin: 0 0 5px 0;
              color: #0f172a;
            }
            .contact-info {
              font-size: 12px;
              display: flex;
              justify-content: center;
              gap: 15px;
              flex-wrap: wrap;
              color: #475569;
            }
            .contact-info a {
              color: #2563eb;
              text-decoration: none;
            }
            .section {
              margin-bottom: 20px;
            }
            .section-title {
              font-size: 15px;
              font-weight: 700;
              text-transform: uppercase;
              border-bottom: 1.5px solid #cbd5e1;
              padding-bottom: 4px;
              margin-bottom: 10px;
              letter-spacing: 0.5px;
              color: #0f172a;
            }
            .summary {
              text-align: justify;
              color: #334155;
            }
            .skills-table {
              width: 100%;
              border-collapse: collapse;
            }
            .skills-table td {
              padding: 4px 0;
              vertical-align: top;
            }
            .skill-cat {
              font-weight: 700;
              width: 120px;
              color: #334155;
            }
            .skill-list {
              color: #475569;
            }
            .job, .project-item {
              margin-bottom: 15px;
            }
            .job-header, .project-header {
              display: flex;
              justify-content: space-between;
              font-weight: 700;
              margin-bottom: 4px;
              color: #0f172a;
            }
            .job-tech, .project-tech {
              font-style: italic;
              font-size: 13px;
              color: #475569;
              margin-bottom: 6px;
            }
            ul {
              margin: 0;
              padding-left: 20px;
              color: #334155;
            }
            li {
              margin-bottom: 4px;
            }
            .print-banner {
              background-color: #eff6ff;
              border: 1px solid #bfdbfe;
              padding: 12px;
              border-radius: 8px;
              text-align: center;
              margin-bottom: 25px;
            }
            .print-btn {
              background-color: #2563eb;
              color: white;
              border: none;
              padding: 8px 18px;
              font-size: 13px;
              font-weight: 600;
              border-radius: 6px;
              cursor: pointer;
              transition: background 0.2s;
            }
            .print-btn:hover {
              background-color: #1d4ed8;
            }
            @media print {
              .no-print {
                display: none;
              }
              body {
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="print-banner no-print">
            <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500; color: #1e40af;">
              Here is your updated resume. Click the button below to print or save it as a PDF file.
            </p>
            <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
          </div>
          <div class="header">
            <h1 class="name">Sonu Nishad</h1>
            <div class="contact-info">
              <span>Email: <a href="mailto:sonu0132001@gmail.com">sonu0132001@gmail.com</a></span>
              <span>Mobile: +91 8400740289</span>
              <span>LinkedIn: <a href="https://www.linkedin.com/in/sonu-nishad-582274321/" target="_blank">linkedin.com/in/sonu-nishad-582274321</a></span>
              <span>GitHub: <a href="https://github.com/sonuNishad123" target="_blank">github.com/sonuNishad123</a></span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Professional Summary</div>
            <div class="summary">
              Fullstack Developer with 2 years of hands-on experience in building responsive, scalable, and user-centric web applications using Angular, TypeScript, SCSS, and Material UI. Proficient in developing reusable components, optimizing UI performance, and delivering clean, intuitive interfaces. Experienced in consuming REST APIs, implementing secure data handling with interceptors, and ensuring seamless integration with backend services. Strong focus on consistent UI/UX, maintainable code architecture, and delivering high-quality, high-performance web solutions.
            </div>
          </div>

          <div class="section">
            <div class="section-title">Skills Summary</div>
            <table class="skills-table">
              <tr>
                <td class="skill-cat">Languages:</td>
                <td class="skill-list">Javascript, HTML5, CSS3, TypeScript</td>
              </tr>
              <tr>
                <td class="skill-cat">Frameworks:</td>
                <td class="skill-list">Angular js</td>
              </tr>
              <tr>
                <td class="skill-cat">Library:</td>
                <td class="skill-list">React js, Material UI</td>
              </tr>
              <tr>
                <td class="skill-cat">Tools:</td>
                <td class="skill-list">npm, Git, Github</td>
              </tr>
              <tr>
                <td class="skill-cat">Soft Skills:</td>
                <td class="skill-list">Team Collaboration, Requirement Analysis</td>
              </tr>
            </table>
          </div>

          <div class="section">
            <div class="section-title">Work Experience</div>
            <div class="job">
              <div class="job-header">
                <span>Fullstack Developer — Impulsive Web Pvt Ltd</span>
                <span>Nov 2023 - Present</span>
              </div>
              <div class="job-tech">Technologies: Angular.js, SCSS, Material UI</div>
              <ul>
                <li>Collaborated with backend teams to align data contracts, resolve integration issues, and deliver seamless end-to-end features.</li>
                <li>Built reusable components, custom directives, and optimized UI workflows to improve overall application efficiency.</li>
                <li>Integrated REST APIs with Angular services and interceptors, ensuring secure data flow and error handling.</li>
                <li>Worked on state management, routing, lazy loading, and performance optimization for faster load times.</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Projects</div>
            <div class="project-item">
              <div class="project-header">
                <span>Bukmuk</span>
                <span>Angular, TypeScript, SCSS, Material UI</span>
              </div>
              <ul>
                <li>Developed responsive and intuitive UI screens for subscription management, payments, customer events, and inventory operations.</li>
                <li>Created reusable Angular components, dynamic forms, and robust validation logic to simplify customer and admin workflows.</li>
                <li>Integrated backend APIs for subscriptions, payments, event registrations, and inventory processes using Angular services and interceptors.</li>
                <li>Designed clean and seamless UI flows for book requests, returns, and status tracking, significantly improving user experience and reducing manual steps.</li>
              </ul>
            </div>
            <div class="project-item">
              <div class="project-header">
                <span>News App</span>
                <span>React.js, JavaScript, CSS, APIs</span>
              </div>
              <ul>
                <li>Built a responsive and clean UI to display real-time news articles across categories like trending, business, sports, entertainment, and technology.</li>
                <li>Integrated third-party news APIs and implemented proper data handling with loading screens, error boundaries, and smooth content rendering.</li>
                <li>Developed reusable React components (cards, category filters, loaders, pagination) to enhance maintainability and user experience.</li>
                <li>Optimized rendering performance using memoization, efficient state management, and API request throttling.</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Education</div>
            <div class="job">
              <div class="job-header">
                <span>Bachelor of Technology — Computer Science Engineering</span>
                <span>Oct 2020 - June 2024</span>
              </div>
              <div class="job-tech">Shambhunath Institute of Engineering and Technology, Prayagraj, India</div>
            </div>
            <div class="job" style="margin-top: 10px;">
              <div class="job-header">
                <span>Intermediate — Mathematics</span>
                <span>June 2019 - July 2020</span>
              </div>
              <div class="job-tech">BS DR BR AIC Thathara Haisar bazar sant Kabir nagar</div>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <section
      id="Home"
      className="relative text-white min-h-screen flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-6xl mx-auto"
    >
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent-solid/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-solid/10 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        {/* Info Column */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6 order-2 md:order-1 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-accent-solid/10 text-accent border border-accent/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Available for Opportunities
          </span>

          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-accent-gradient animate-glow">
              Sonu Nishad
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-bold text-slate-300">
            Fullstack Web Developer
          </h2>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-xl">
            Passionate about crafting high-performance, responsive, and visually stunning web interfaces. Proficient in modern libraries and frameworks like **React.js** and **Angular**, along with TypeScript, SCSS, and Material UI.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={handlePrintResume}
              className="flex-1 sm:flex-initial text-center bg-accent-gradient hover:opacity-90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25 active:translate-y-0 cursor-pointer"
            >
              Get My Resume
            </button>
            <a
              href="#Contact"
              className="flex-1 sm:flex-initial text-center bg-slate-900/60 hover:bg-slate-800/80 text-white border border-slate-700/50 hover:border-slate-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="md:col-span-5 flex justify-center order-1 md:order-2">
          <div className="relative group w-64 h-64 md:w-80 md:h-80 animate-float">
            {/* Outer gradient glow */}
            <div className="absolute inset-0 bg-accent-gradient rounded-full blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"></div>

            {/* Profile Frame */}
            <div className="absolute inset-0 rounded-full p-1 bg-accent-gradient">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950">
                <img
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                  src={avatarImg}
                  alt="Sonu Nishad Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

