// Akshit AI Engine - Intelligent Knowledge & Query System
(function(window) {
  'use strict';

  const KNOWLEDGE_BASE = {
    bio: {
      name: "Akshit Mehta",
      title: "Full-Stack Data Scientist & Machine Learning Engineer",
      education: "Bachelor's Degree in Computer Science, Chitkara University",
      status: "Available for Data Science, Machine Learning & Full-Stack Systems roles worldwide",
      location: "India • Open to Remote & Relocation",
      phone: "+91 82191 78089",
      email: "mehtaakshit65@gmail.com",
      linkedin: "https://www.linkedin.com/in/akshitmehta0004/",
      github: "https://github.com/akshitmehta18",
      githubAlt: "https://github.com/Mehtaji2004",
      summary: "I build robust predictive machine learning pipelines, empirical statistical exploratory systems, and high-performance edge web applications. With deep grounding in Python, Scikit-Learn, Next.js, and low-level systems, I bridge the divide between theoretical AI and production deployment."
    },

    skills: {
      ml: ["Classification & Regression", "Random Forest & Gradient Boosting", "ROC-AUC & F1 Optimization", "Feature Engineering", "Hyperparameter Tuning (Optuna / GridSearchCV)", "Deterministic Validation"],
      data: ["Statistical Hypothesis Testing (ANOVA, Mann-Whitney U)", "EDA Suites (Seaborn, Matplotlib)", "Outlier Mitigation (IQR, Winsorization)", "High-Throughput ETL", "Normalized SQL & Parquet Pipelines", "Zero Data Leakage"],
      web: ["Next.js 14 App Router", "TypeScript & React", "Tailwind CSS", "RESTful & GraphQL APIs", "PostgreSQL, SQLite", "Vercel Edge Cloud Deployment"],
      systems: ["C++ Low-Level Systems Programming", "SFML Game Engine Architecture", "Fixed-Timestep Simulation Loops", "Memory Management & Object Pooling"]
    },

    stats: [
      { label: "AUC-ROC Benchmark", value: "91.4%", note: "Logistics delay classification" },
      { label: "Core Capabilities", value: "4 Disciplines", note: "ML, EDA, ETL, Full-Stack" },
      { label: "Production Repos", value: "7 Featured Projects", note: "Live web apps & ML systems" },
      { label: "Data Leakage", value: "0%", note: "Strict training/validation distribution isolation" },
      { label: "Game Engine FPS", value: "60 FPS Stable", note: "C++ / SFML top-down wave engine" }
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
          text: "Please type a question or command. Type 'help' to see available commands."
        };
      }

      const q = input.trim().toLowerCase();
      this.history.push(q);

      // 1. Direct Command Handlers
      if (q === "help" || q === "--help" || q === "-h") {
        return {
          type: "help",
          text: `
<strong>Available Commands & Query Topics:</strong>
<ul style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><code>about</code> : Biography, background & education</li>
  <li><code>skills</code> : Technical capability matrix (ML, Data, Web, C++)</li>
  <li><code>projects</code> : Overview of 7 featured production repositories</li>
  <li><code>stats</code> : Performance metrics & engineering benchmarks</li>
  <li><code>architecture</code> : Philosophy on data pipelines & system design</li>
  <li><code>contact</code> : Direct email, phone, LinkedIn & GitHub links</li>
  <li><code>hire</code> : Availability status and collaboration options</li>
  <li><code>clear</code> : Clears terminal session history</li>
</ul>
<em>Tip: You can also ask natural questions like "What is ROC-AUC?", "Explain TalentSphere", or "How to handle missing data?".</em>`
        };
      }

      if (q === "clear" || q === "cls") {
        return { type: "clear", text: "" };
      }

      if (q === "about" || q === "bio" || q === "who is akshit" || q.includes("who are you") || q.includes("tell me about yourself") || q.includes("background")) {
        const b = KNOWLEDGE_BASE.bio;
        return {
          type: "info",
          text: `
<strong>${b.name}</strong> — ${b.title}
<p style="margin: 0.4rem 0;">${b.summary}</p>
<ul style="margin: 0.3rem 0 0.3rem 1.25rem; line-height: 1.5;">
  <li><strong>Education:</strong> ${b.education}</li>
  <li><strong>Status:</strong> ${b.status}</li>
  <li><strong>Location:</strong> ${b.location}</li>
</ul>
<p style="margin-top: 0.4rem;">Type <code>skills</code> or <code>projects</code> to inspect technical works.</p>`
        };
      }

      if (q === "skills" || q === "stack" || q.includes("technologies") || q.includes("what skills")) {
        const s = KNOWLEDGE_BASE.skills;
        return {
          type: "skills",
          text: `
<strong>Technical Capabilities Matrix:</strong>
<div style="margin-top: 0.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem;">
  <div>
    <strong style="color: #6366f1;">Machine Learning:</strong>
    <ul style="margin: 0.2rem 0 0 1rem; font-size: 0.85rem;">
      ${s.ml.map(i => `<li>${i}</li>`).join('')}
    </ul>
  </div>
  <div>
    <strong style="color: #10b981;">Data & ETL:</strong>
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
<strong>7 Featured Production Repositories:</strong>
<ol style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.6;">
  ${projects.map(p => `
    <li>
      <strong>${p.title}</strong> [<em>${p.badge}</em>]<br>
      <span style="color: #6b7280; font-size: 0.85rem;">${p.metrics}</span> —
      <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">GitHub ↗</a>
      ${p.demo ? ` | <a href="${p.demo}" target="_blank" rel="noopener noreferrer" style="color: #10b981; text-decoration: underline;">Live Demo ↗</a>` : ''}
    </li>
  `).join('')}
</ol>
<em>Tip: Ask specifically about any project (e.g., "tell me about logistics ml" or "how does talentsphere work?").</em>`
        };
      }

      if (q === "stats" || q === "metrics" || q.includes("benchmarks")) {
        return {
          type: "stats",
          text: `
<strong>Verified Engineering Benchmarks:</strong>
<div style="margin: 0.5rem 0; display: flex; flex-direction: column; gap: 0.4rem;">
  ${KNOWLEDGE_BASE.stats.map(s => `
    <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(125,125,125,0.3); padding: 0.25rem 0;">
      <span><strong>${s.label}:</strong> <span style="color: #6366f1;">${s.value}</span></span>
      <span style="color: #6b7280; font-size: 0.85rem;">(${s.note})</span>
    </div>
  `).join('')}
</div>`
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
  <li><strong>GitHub:</strong> <a href="${b.github}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@akshitmehta18 ↗</a> / <a href="${b.githubAlt}" target="_blank" rel="noopener noreferrer" style="color: #6366f1;">@Mehtaji2004 ↗</a></li>
</ul>
<p style="margin-top: 0.25rem;">Or scroll to the bottom contact form to dispatch a direct message!</p>`
        };
      }

      if (q === "hire" || q.includes("hire you") || q.includes("available") || q.includes("freelance") || q.includes("contract")) {
        return {
          type: "hire",
          text: `
<strong>Hiring & Availability Status:</strong>
<p style="margin: 0.4rem 0;">I am actively open for:</p>
<ul style="margin: 0.25rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><strong>Full-Time Roles:</strong> Data Scientist, Machine Learning Engineer, Full-Stack AI Engineer</li>
  <li><strong>Consulting & Contracts:</strong> Predictive modeling, high-throughput ETL architecture, Next.js web application deployment</li>
  <li><strong>Location:</strong> India • Remote worldwide • Open to relocation</li>
</ul>
<p>Reach out directly at <strong><a href="mailto:mehtaakshit65@gmail.com" style="color: #6366f1;">mehtaakshit65@gmail.com</a></strong> or call <strong>+91 82191 78089</strong> to set up a preliminary discussion.</p>`
        };
      }

      if (q === "architecture" || q === "philosophy" || q.includes("design philosophy")) {
        return {
          type: "philosophy",
          text: `
<strong>Engineering Principles & Architecture:</strong>
<ol style="margin: 0.5rem 0 0.5rem 1.25rem; line-height: 1.6;">
  <li><strong>Empirical Rigor:</strong> Every modeling decision is grounded in hypothesis testing (ANOVA, Mann-Whitney U) and cost-benefit analysis rather than guesswork.</li>
  <li><strong>Zero Data Leakage:</strong> Strict boundaries between training distributions and live validation prevent optimistic overfitting and guarantee deterministic production performance.</li>
  <li><strong>Full Lifecycle Ownership:</strong> Bridging raw data ingestion (Parquet/SQL), feature engineering, ML training, and high-performance frontend interfaces.</li>
  <li><strong>Execution Speed & Maintainability:</strong> Clean, modular codebases with unit tests, CI/CD automated deployment, and reproducible documentation.</li>
</ol>`
        };
      }

      // 2. Project-Specific Natural Language Matchers
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
  <strong>Architecture:</strong> ${p.architecture}
</div>
<ul style="margin: 0.3rem 0 0.5rem 1.25rem; font-size: 0.85rem;">
  ${p.features.map(f => `<li>${f}</li>`).join('')}
</ul>
<p style="margin: 0.25rem 0;">
  <strong>Metrics:</strong> <span style="color: #6366f1;">${p.metrics}</span><br>
  <strong>Tech:</strong> ${p.tech.join(', ')}<br>
  <strong>Repository:</strong> <a href="${p.github}" target="_blank" rel="noopener noreferrer" style="color: #6366f1; text-decoration: underline;">${p.github} ↗</a>
  ${p.demo ? `<br><strong>Live URL:</strong> <a href="${p.demo}" target="_blank" rel="noopener noreferrer" style="color: #10b981; text-decoration: underline;">${p.demo} ↗</a>` : ''}
</p>`
          };
        }
      }

      // 3. Technical Data Science / ML Concepts
      if (q.includes("roc") || q.includes("auc") || q.includes("metrics")) {
        return {
          type: "tech_explainer",
          text: `
<strong>ROC-AUC (Receiver Operating Characteristic - Area Under Curve):</strong>
<p style="margin: 0.4rem 0;">In Akshit's Logistics Delay Prediction Engine, the model achieves a <strong>91.4% AUC-ROC</strong> score. Unlike raw accuracy (which can be misleading under severe class imbalance), AUC-ROC evaluates the model's ability to rank delayed shipments above on-time shipments across all discrimination thresholds, ensuring low false-positive operational alerts.</p>`
        };
      }

      if (q.includes("leakage") || q.includes("data leakage")) {
        return {
          type: "tech_explainer",
          text: `
<strong>Zero Data Leakage Guarantee:</strong>
<p style="margin: 0.4rem 0;">Data leakage occurs when information from outside the training dataset is inadvertently used to create the model. In Akshit's ETL pipelines, all imputations (e.g. median / KNN parameters), scalers, and target encodings are fitted strictly on the training fold during cross-validation before being transformed on the out-of-fold validation set.</p>`
        };
      }

      if (q.includes("etl") || q.includes("pipeline") || q.includes("preprocessing")) {
        return {
          type: "tech_explainer",
          text: `
<strong>ETL & Data Hygiene Architecture:</strong>
<p style="margin: 0.4rem 0;">Akshit's high-throughput ETL engine implements automated schema validation, missing value imputation routing, anomaly winsorization, and memory-efficient data structures. Output files are partitioned into normalized Parquet and SQL schemas, ready for downstream inference with 100% schema compliance.</p>`
        };
      }

      if (q.includes("next.js") || q.includes("nextjs") || q.includes("fullstack") || q.includes("frontend")) {
        return {
          type: "tech_explainer",
          text: `
<strong>Full-Stack Web Systems (Next.js 14):</strong>
<p style="margin: 0.4rem 0;">Akshit architects modern web platforms using the Next.js 14 App Router, TypeScript, React Server Components (RSC), and Tailwind CSS. Deployed on Vercel's Edge Network, applications achieve 100/100 Lighthouse performance, sub-50ms TTFB, and secure API route integration.</p>`
        };
      }

      if (q.includes("c++") || q.includes("game") || q.includes("sfml") || q.includes("low level")) {
        return {
          type: "tech_explainer",
          text: `
<strong>C++ Systems & SFML Game Loop:</strong>
<p style="margin: 0.4rem 0;">Through the <em>Stranded</em> survival engine, Akshit demonstrates low-level systems programming: deterministic 60 FPS update loops with fixed-timestep physics, spatial partitioning for collision detection, resource pooling for audio/sprites, and zero dynamic heap allocation in the hot rendering cycle.</p>`
        };
      }

      if (q.includes("chitkara") || q.includes("college") || q.includes("university")) {
        return {
          type: "info",
          text: `
<strong>Education:</strong>
<p style="margin: 0.4rem 0;">Akshit Mehta is completing his Bachelor's in Computer Science & Engineering at <strong>Chitkara University</strong>, with a specialized focus on Predictive Analytics, Machine Learning Pipelines, and Full-Stack Web Development.</p>`
        };
      }

      if (q.includes("hey") || q.includes("hello") || q.includes("hi") || q.includes("hola")) {
        return {
          type: "greeting",
          text: `
<strong>Hello! 👋 Welcome to Akshit Mehta's AI Knowledge Lab.</strong>
<p style="margin: 0.4rem 0;">I can answer questions regarding Akshit's predictive ML pipelines, statistical modeling, 7 case studies, or how to contact him for engineering opportunities.</p>
<p style="margin: 0;">Try typing: <code>skills</code>, <code>projects</code>, <code>stats</code>, <code>hire</code>, or ask anything about machine learning!</p>`
        };
      }

      // 4. Fallback intelligent response
      return {
        type: "general",
        text: `
<strong>Akshit AI Assistant:</strong>
<p style="margin: 0.4rem 0;">You asked: <em>"${input.replace(/</g,'&lt;')}"</em></p>
<p style="margin: 0.4rem 0;">Akshit specializes in <strong>Predictive Machine Learning</strong> (91.4% AUC-ROC), <strong>Statistical EDA</strong>, <strong>High-Throughput ETL</strong>, and <strong>Full-Stack Next.js Systems</strong>. He is available for engineering roles and collaborations.</p>
<p style="margin: 0.4rem 0;">Try one of the following:</p>
<ul style="margin: 0.2rem 0 0.4rem 1.25rem;">
  <li>Type <code>projects</code> to view the 7 featured GitHub repositories.</li>
  <li>Type <code>skills</code> to inspect his full technology stack.</li>
  <li>Type <code>contact</code> to get his direct phone (+91 82191 78089) and email.</li>
  <li>Type <code>help</code> for all commands.</li>
</ul>`
      };
    }
  }

  window.AkshitAI = new AkshitAI();
})(window);
