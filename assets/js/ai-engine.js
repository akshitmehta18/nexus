// Akshit AI Engine - Interactive Client-Side Portfolio FAQ & Knowledge Base
// Fast, offline-first client-side query system with zero latency.
(function(window) {
  'use strict';

  const KNOWLEDGE_BASE = {
    bio: {
      name: "Akshit Mehta",
      title: "Full-Stack Data Scientist & Machine Learning Engineer",
      education: "Bachelor of Engineering (B.E.) in Computer Science & Engineering, Chitkara University (2022–2026)",
      status: "Actively interviewing for Full-Time Data Science, Machine Learning, and Full-Stack Engineering roles worldwide",
      location: "India • Open to Remote Worldwide & Relocation",
      phone: "+91 82191 78089",
      email: "mehtaakshit65@gmail.com",
      linkedin: "https://www.linkedin.com/in/akshitmehta0004/",
      githubPrimary: "https://github.com/akshitmehta18",
      githubLab: "https://github.com/Mehtaji2004",
      resumeUrl: "assets/resume/Akshit_Mehta_Resume.html",
      summary: "I build robust predictive machine learning pipelines, empirical statistical exploratory systems, and high-performance edge web applications. With rigorous training in Python, Scikit-Learn, Next.js, and low-level C++ systems, I bridge the divide between theoretical data modeling and production deployments."
    },

    skills: {
      ml: ["Classification & Regression", "Gradient Boosting & Random Forest", "Stratified Cross-Validation", "ROC-AUC & Precision-Recall Tuning", "Feature Engineering & Risk Metrics", "Hyperparameter Search (Optuna / GridSearchCV)"],
      data: ["Statistical Hypothesis Testing (ANOVA, Mann-Whitney U, Chi-Square)", "Exploratory Data Analysis (Seaborn, Matplotlib)", "Outlier Mitigation (IQR, Winsorization)", "Pipeline Encapsulation (scikit-learn Pipelines)", "Schema Validation (Pydantic/Pandas)", "SQL & Parquet Storage"],
      web: ["Next.js 14 App Router", "TypeScript & React", "Tailwind CSS", "RESTful APIs", "Vercel Edge Cloud Deployment", "100/100 Lighthouse Performance"],
      systems: ["C++17 Low-Level Systems", "SFML Hardware Game Engine", "Fixed-Timestep Simulation Loops (60 FPS)", "Object Pooling & Spatial Grids"]
    },

    stats: [
      { label: "AUC-ROC Benchmark", value: "91.4%", note: "Tuned Gradient Boosting on synthetic logistics benchmark via 5-fold CV" },
      { label: "Statistical Hypotheses", value: "3 Verified", note: "p < 0.001 (Mann-Whitney U, Kruskal-Wallis) for carrier friction" },
      { label: "Featured Repositories", value: "7 Projects", note: "Predictive ML, Statistical EDA, ETL, Next.js Web Apps, C++ Systems" },
      { label: "Lighthouse Score", value: "100/100", note: "TalentSphere deployed on Vercel Edge Network" },
      { label: "Engine FPS", value: "60 FPS Stable", note: "Deterministic C++ / SFML loop with 0 heap allocations in tick loop" }
    ]
  };

  class AkshitAI {
    constructor() {
      this.history = [];
    }

    query(input) {
      if (!input || !input.trim()) {
        return {
          type: "empty",
          text: "Please type a question or command. Type 'help' to see available topics."
        };
      }

      const q = input.trim().toLowerCase();
      this.history.push(q);

      // Direct Command Handlers
      if (q === "help" || q === "--help" || q === "-h") {
        return {
          type: "help",
          text: `
<strong>Terminal FAQ & Knowledge Base Commands:</strong>
<ul style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><code>about</code> : Biography, education (Chitkara Univ), location &amp; availability</li>
  <li><code>resume</code> : View and download Akshit's updated professional résumé / CV</li>
  <li><code>skills</code> : Technical capability matrix (ML, Statistics, ETL, Next.js, C++)</li>
  <li><code>projects</code> : Overview of 7 featured repositories with notebooks, demos &amp; roles</li>
  <li><code>stats</code> : Performance metrics &amp; verified engineering benchmarks</li>
  <li><code>auc</code> : Methodology and dataset behind the 91.4% AUC-ROC result</li>
  <li><code>leakage</code> : How data leakage was tested and eliminated in ETL pipelines</li>
  <li><code>accounts</code> : Reconciliation of GitHub accounts (@akshitmehta18 &amp; @Mehtaji2004)</li>
  <li><code>contact</code> : Direct email, phone, LinkedIn &amp; GitHub links</li>
  <li><code>hire</code> : Role availability status and collaboration terms</li>
  <li><code>clear</code> : Clears terminal session history</li>
</ul>
<p style="margin-top: 0.4rem; font-size: 0.85rem; color: #94a3b8;">
  <em>Note: This is an instant client-side interactive FAQ engine running locally in your browser with zero latency.</em>
</p>`
        };
      }

      if (q === "clear" || q === "cls") {
        return { type: "clear", text: "" };
      }

      if (q === "resume" || q === "cv" || q.includes("resume") || q.includes("download cv") || q.includes("view resume")) {
        const b = KNOWLEDGE_BASE.bio;
        return {
          type: "resume",
          text: `
<strong>Akshit Mehta — Professional Résumé / CV:</strong>
<p style="margin: 0.4rem 0;">A full, printable, ATS-friendly résumé is available:</p>
<div style="margin: 0.5rem 0;">
  <a href="${b.resumeUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.4rem; background: #6366f1; color: #ffffff; padding: 0.35rem 0.85rem; border-radius: 6px; font-weight: 600; text-decoration: none;">
    📄 Open Printable Résumé (PDF / HTML) ↗
  </a>
</div>
<p style="font-size: 0.85rem; color: #94a3b8; margin-top: 0.4rem;">
  Includes full breakdown of Chitkara University B.E., 7 project case studies, publication-quality EDA, and contact credentials.
</p>`
        };
      }

      if (q === "about" || q === "bio" || q === "who is akshit" || q.includes("who are you") || q.includes("tell me about yourself") || q.includes("background") || q.includes("education") || q.includes("chitkara")) {
        const b = KNOWLEDGE_BASE.bio;
        return {
          type: "info",
          text: `
<strong>${b.name}</strong> — ${b.title}
<p style="margin: 0.4rem 0;">${b.summary}</p>
<ul style="margin: 0.3rem 0 0.3rem 1.25rem; line-height: 1.6;">
  <li><strong>Education:</strong> ${b.education}</li>
  <li><strong>Location:</strong> ${b.location}</li>
  <li><strong>Current Status:</strong> <span style="color: #10b981;">${b.status}</span></li>
  <li><strong>GitHub Profiles:</strong> <a href="${b.githubPrimary}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@akshitmehta18</a> (Primary / Portfolio) and <a href="${b.githubLab}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@Mehtaji2004</a> (Systems Lab)</li>
</ul>
<p style="margin-top: 0.4rem;">Type <code>projects</code>, <code>skills</code>, or <code>resume</code> for further details.</p>`
        };
      }

      if (q === "skills" || q === "stack" || q.includes("technologies") || q.includes("what skills")) {
        const s = KNOWLEDGE_BASE.skills;
        return {
          type: "skills",
          text: `
<strong>Technical Capabilities Matrix:</strong>
<div style="margin-top: 0.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 0.75rem;">
  <div>
    <strong style="color: #6366f1;">Machine Learning:</strong>
    <ul style="margin: 0.2rem 0 0 1rem; font-size: 0.85rem;">
      ${s.ml.map(i => `<li>${i}</li>`).join('')}
    </ul>
  </div>
  <div>
    <strong style="color: #10b981;">Data Analysis &amp; ETL:</strong>
    <ul style="margin: 0.2rem 0 0 1rem; font-size: 0.85rem;">
      ${s.data.map(i => `<li>${i}</li>`).join('')}
    </ul>
  </div>
  <div>
    <strong style="color: #f59e0b;">Full-Stack Web:</strong>
    <ul style="margin: 0.2rem 0 0 1rem; font-size: 0.85rem;">
      ${s.web.map(i => `<li>${i}</li>`).join('')}
    </ul>
  </div>
  <div>
    <strong style="color: #ec4899;">Low-Level Systems:</strong>
    <ul style="margin: 0.2rem 0 0 1rem; font-size: 0.85rem;">
      ${s.systems.map(i => `<li>${i}</li>`).join('')}
    </ul>
  </div>
</div>`
        };
      }

      if (q === "projects" || q === "works" || q === "case studies" || q.includes("list projects") || q.includes("show projects")) {
        const projects = window.PORTFOLIO_PROJECTS || [];
        return {
          type: "projects",
          text: `
<strong>7 Featured Production Repositories &amp; Case Studies:</strong>
<ol style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.6;">
  ${projects.map(p => `
    <li style="margin-bottom: 0.4rem;">
      <strong>${p.title}</strong> [<em>${p.badge}</em>]<br>
      <span style="color: #94a3b8; font-size: 0.83rem;">${p.metrics}</span><br>
      <span style="font-size: 0.83rem;">Role: ${p.myRole.split('.')[0]}</span><br>
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">GitHub Repo ↗</a>
      ${p.demo ? ` | <a href="${p.demo}" target="_blank" rel="noopener noreferrer" style="color: #10b981; text-decoration: underline;">Live Demo ↗</a>` : ''}
      ${p.notebook ? ` | <a href="${p.notebook}" target="_blank" rel="noopener noreferrer" style="color: #f59e0b; text-decoration: underline;">Notebook ↗</a>` : ''}
      ${p.walkthroughLink ? ` | <a href="${p.walkthroughLink}" target="_blank" rel="noopener noreferrer" style="color: #93c5fd; text-decoration: underline;">Walkthrough ↗</a>` : ''}
    </li>
  `).join('')}
</ol>
<p style="font-size: 0.85rem; color: #94a3b8;">
  Ask specifically about any project (e.g. <code>logistics ml</code>, <code>talentsphere</code>, <code>opencourse</code>, <code>stranded</code>).
</p>`
        };
      }

      if (q === "stats" || q === "metrics" || q.includes("benchmarks")) {
        return {
          type: "stats",
          text: `
<strong>Engineering Benchmarks &amp; Evaluation Results:</strong>
<div style="margin: 0.5rem 0; display: flex; flex-direction: column; gap: 0.4rem;">
  ${KNOWLEDGE_BASE.stats.map(s => `
    <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(125,125,125,0.3); padding: 0.25rem 0; flex-wrap: wrap; gap: 0.5rem;">
      <span><strong>${s.label}:</strong> <span style="color: #6366f1; font-weight: 700;">${s.value}</span></span>
      <span style="color: #94a3b8; font-size: 0.82rem;">(${s.note})</span>
    </div>
  `).join('')}
</div>
<p style="margin-top: 0.4rem; font-size: 0.85rem;">Type <code>auc</code> to inspect the synthetic dataset and 5-fold CV evaluation method.</p>`
        };
      }

      if (q === "auc" || q === "roc" || q.includes("91.4") || q.includes("auc-roc") || q.includes("synthetic")) {
        return {
          type: "tech_explainer",
          text: `
<strong>91.4% AUC-ROC Benchmark &amp; Synthetic Dataset Disclosure:</strong>
<p style="margin: 0.4rem 0;">
  The <strong>91.4% AUC-ROC</strong> metric in the Logistics Delay Prediction Engine was achieved using a tuned <strong>Gradient Boosting Classifier</strong> evaluated via <strong>stratified 5-fold cross-validation</strong> on a controlled synthetic multi-carrier supply chain benchmark dataset.
</p>
<ul style="margin: 0.3rem 0 0.5rem 1.25rem; font-size: 0.85rem; line-height: 1.5;">
  <li><strong>Dataset:</strong> 10,000 synthetic shipment records simulating origin dwell times, weather severity shocks, and transit distance friction.</li>
  <li><strong>Validation:</strong> Stratified 5-Fold Cross-Validation, ensuring no single lucky train-test split inflated the metric.</li>
  <li><strong>Why Synthetic:</strong> Enterprise logistics data is proprietary; generating realistic stochastic distributions allows transparent, open-source benchmarking of route risk features.</li>
</ul>
<p style="margin-top: 0.4rem;">
  <a href="https://github.com/Mehtaji2004/logistics-data-analysis#synthetic-benchmark-dataset--data-dictionary" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">Dataset Generator &amp; Spec ↗</a> | 
  <a href="https://github.com/Mehtaji2004/logistics-data-analysis/blob/main/notebooks/logistics_delay_prediction.ipynb" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">Evaluation Notebook ↗</a>
</p>`
        };
      }

      if (q === "leakage" || q.includes("data leakage") || q.includes("leak")) {
        return {
          type: "tech_explainer",
          text: `
<strong>Data Leakage Prevention &amp; Pipeline Testing:</strong>
<p style="margin: 0.4rem 0;">
  Data leakage occurs when information from outside the training partition (such as global median imputation or target statistics) contaminates model validation folds.
</p>
<p style="margin: 0.4rem 0;">
  In Akshit's ETL and ML pipelines, leakage is eliminated by encapsulating all data transforms within <strong>scikit-learn Pipeline objects</strong>. Imputers, scalers, and encodings are fitted strictly on the training fold during cross-validation before being applied to the validation fold. Automated unit tests assert zero variance in target-correlated features across fold boundaries.
</p>
<p style="margin-top: 0.3rem;">
  <a href="https://github.com/Mehtaji2004/logistics-data-preprocessing#leakage-prevention-tests--benchmarks" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">View Leak Prevention Unit Tests ↗</a>
</p>`
        };
      }

      if (q === "accounts" || q === "github" || q.includes("github accounts") || q.includes("identities") || q.includes("mehtaji")) {
        return {
          type: "info",
          text: `
<strong>GitHub Profiles &amp; Account Reconciliation:</strong>
<ul style="margin: 0.4rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><strong>Primary Profile:</strong> <a href="https://github.com/akshitmehta18" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@akshitmehta18</a> — Main portfolio showcase, Nexus intelligence platform, and personal developer profile.</li>
  <li><strong>Systems &amp; Project Lab:</strong> <a href="https://github.com/Mehtaji2004" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@Mehtaji2004</a> — Akshit's academic and systems lab handle hosting the core repositories (Logistics ML, EDA, ETL, TalentSphere, Stranded).</li>
  <li><strong>Collaborative Repos:</strong> OpenCourse is hosted under team org <a href="https://github.com/The-Karan/OpenCourse" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@The-Karan</a>; Nix is hosted under collaborator <a href="https://github.com/Nikhilsaini2204/nix-2211981245-2211981043" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@Nikhilsaini2204</a>.</li>
</ul>`
        };
      }

      if (q === "contact" || q === "email" || q === "phone" || q === "reach" || q.includes("how to contact")) {
        const b = KNOWLEDGE_BASE.bio;
        return {
          type: "contact",
          text: `
<strong>Direct Contact Channels:</strong>
<ul style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.7;">
  <li><strong>Email:</strong> <a href="mailto:${b.email}" style="color: #6366f1;">${b.email}</a></li>
  <li><strong>Phone / WhatsApp:</strong> <a href="tel:${b.phone.replace(/\s+/g,'')}" style="color: #6366f1;">${b.phone}</a></li>
  <li><strong>LinkedIn:</strong> <a href="${b.linkedin}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">in/akshitmehta0004 ↗</a></li>
  <li><strong>GitHub:</strong> <a href="${b.githubPrimary}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@akshitmehta18 ↗</a> / <a href="${b.githubLab}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@Mehtaji2004 ↗</a></li>
  <li><strong>Printable Résumé:</strong> <a href="${b.resumeUrl}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">View Résumé (HTML / PDF) ↗</a></li>
</ul>
<p style="margin-top: 0.25rem;">Scroll to the contact section below to send a verified message directly to Akshit's inbox!</p>`
        };
      }

      if (q === "hire" || q.includes("hire you") || q.includes("available") || q.includes("freelance") || q.includes("contract")) {
        return {
          type: "hire",
          text: `
<strong>Hiring &amp; Role Availability Status:</strong>
<p style="margin: 0.4rem 0;">Akshit is actively interviewing for:</p>
<ul style="margin: 0.25rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><strong>Full-Time Positions:</strong> Data Scientist, Machine Learning Engineer, Full-Stack AI Engineer</li>
  <li><strong>Location Preference:</strong> India • Remote worldwide • Open to relocation</li>
  <li><strong>Start Timeline:</strong> Immediate / Graduating 2026 from Chitkara University</li>
</ul>
<p>Contact directly at <strong><a href="mailto:mehtaakshit65@gmail.com" style="color: #6366f1;">mehtaakshit65@gmail.com</a></strong> or call <strong>+91 82191 78089</strong> to arrange an interview.</p>`
        };
      }

      if (q === "architecture" || q === "philosophy" || q.includes("design philosophy")) {
        return {
          type: "philosophy",
          text: `
<strong>Engineering Principles &amp; Architecture:</strong>
<ol style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><strong>Empirical Rigor:</strong> Every modeling decision is grounded in hypothesis testing (ANOVA, Mann-Whitney U) and cost-benefit sensitivity rather than guesswork.</li>
  <li><strong>Pipeline Encapsulation:</strong> Strict separation between training distributions and live validation prevents optimistic overfitting and guarantees deterministic production performance.</li>
  <li><strong>Full Lifecycle Ownership:</strong> Bridging raw data ingestion (Parquet/SQL), feature engineering, ML training, and high-performance frontend interfaces.</li>
  <li><strong>Execution Speed &amp; Maintainability:</strong> Clean, modular codebases with unit tests, CI/CD automated deployment, and reproducible documentation.</li>
</ol>`
        };
      }

      // Project-Specific Natural Language Matchers
      const projects = window.PORTFOLIO_PROJECTS || [];
      for (const p of projects) {
        const idMatches = q.includes(p.id);
        const titleWords = p.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        const titleMatches = titleWords.some(w => q.includes(w));

        if (idMatches || (q.includes("logistics") && p.id.includes("logistics") && (
          (q.includes("delay") || q.includes("model") || q.includes("ml")) && p.id === "logistics-data-analysis" ||
          (q.includes("chart") || q.includes("eda") || q.includes("visual")) && p.id === "logistics-eda-visualization" ||
          (q.includes("etl") || q.includes("clean") || q.includes("preprocess")) && p.id === "logistics-data-preprocessing"
        )) || (q.includes("talent") && p.id === "talentsphere") ||
           (q.includes("opencourse") && p.id === "opencourse") ||
           (q.includes("nix") && p.id === "nix-springboot") ||
           (q.includes("stranded") && p.id === "stranded")) {
          return {
            type: "project_detail",
            text: `
<strong>${p.title}</strong> [<em>${p.badge}</em>]
<p style="margin: 0.4rem 0;">${p.fullDesc}</p>
<div style="background: rgba(99, 102, 241, 0.08); padding: 0.5rem 0.75rem; border-left: 3px solid #6366f1; margin: 0.5rem 0; font-size: 0.85rem;">
  <strong>Problem:</strong> ${p.problem}<br>
  <strong>My Role:</strong> ${p.myRole}
</div>
<ul style="margin: 0.3rem 0 0.5rem 1.25rem; font-size: 0.85rem;">
  ${p.features.map(f => `<li>${f}</li>`).join('')}
</ul>
<p style="margin: 0.25rem 0; font-size: 0.85rem;">
  <strong>Metrics:</strong> <span style="color: #6366f1; font-weight: 700;">${p.metrics}</span><br>
  <strong>Tech:</strong> ${p.tech.join(', ')}<br>
  <strong>Repository:</strong> <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">${p.github} ↗</a>
  ${p.demo ? `<br><strong>Live URL:</strong> <a href="${p.demo}" target="_blank" rel="noopener noreferrer" style="color: #10b981; text-decoration: underline;">${p.demo} ↗</a>` : ''}
  ${p.notebook ? `<br><strong>Jupyter Notebook:</strong> <a href="${p.notebook}" target="_blank" rel="noopener noreferrer" style="color: #f59e0b; text-decoration: underline;">View Notebook on GitHub ↗</a>` : ''}
  ${p.walkthroughLink ? `<br><strong>Methodology / Walkthrough:</strong> <a href="${p.walkthroughLink}" target="_blank" rel="noopener noreferrer" style="color: #93c5fd; text-decoration: underline;">Inspect Details ↗</a>` : ''}
</p>`
          };
        }
      }

      if (q.includes("hey") || q.includes("hello") || q.includes("hi") || q.includes("hola")) {
        return {
          type: "greeting",
          text: `
<strong>Hello! 👋 Welcome to Akshit Mehta's Portfolio Terminal FAQ.</strong>
<p style="margin: 0.4rem 0;">This client-side intelligence console provides instant answers regarding Akshit's predictive ML pipelines, statistical modeling, 7 case studies, or hiring availability.</p>
<p style="margin: 0;">Try typing: <code>skills</code>, <code>projects</code>, <code>resume</code>, <code>auc</code>, <code>hire</code>, or click any shortcut chip above!</p>`
        };
      }

      // Fallback
      return {
        type: "general",
        text: `
<strong>Nexus Portfolio FAQ Engine:</strong>
<p style="margin: 0.4rem 0;">Query received: <em>"${input.replace(/</g,'&lt;')}"</em></p>
<p style="margin: 0.4rem 0;">Akshit specializes in <strong>Predictive Machine Learning</strong> (91.4% AUC-ROC), <strong>Statistical EDA</strong>, <strong>High-Throughput ETL</strong>, and <strong>Full-Stack Next.js Systems</strong>. He is available for engineering roles and collaborations.</p>
<p style="margin: 0.4rem 0;">Try one of the following commands:</p>
<ul style="margin: 0.2rem 0 0.4rem 1.25rem;">
  <li><code>projects</code> : View the 7 featured GitHub repositories and case studies.</li>
  <li><code>resume</code> : View and print Akshit's updated résumé / CV.</li>
  <li><code>auc</code> : Review the synthetic dataset disclosure and 5-fold CV evaluation.</li>
  <li><code>skills</code> : Inspect his technical stack.</li>
  <li><code>contact</code> : View direct phone (+91 82191 78089) and email.</li>
  <li><code>help</code> : Full command list.</li>
</ul>`
      };
    }
  }

  window.AkshitAI = new AkshitAI();
})(window);
