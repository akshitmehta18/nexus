# Nexus — Editorial Framed AI Systems & Data Science Portfolio

An editorial framed showcase and interactive knowledge system for **Akshit Mehta** — Full-Stack Data Scientist & Machine Learning Engineer (Chitkara University).

- **Live Deployment**: [https://akshitmehta18.github.io/nexus/](https://akshitmehta18.github.io/nexus/)
- **GitHub Showcase Repository**: [https://github.com/akshitmehta18/nexus](https://github.com/akshitmehta18/nexus)
- **Systems & Project Lab Repositories**: [https://github.com/Mehtaji2004](https://github.com/Mehtaji2004)
- **Alternate Minimalist Portfolio (Vercel Edition)**: [https://portfolio-live-seven.vercel.app/](https://portfolio-live-seven.vercel.app/)
- **Printable Résumé / CV**: [assets/resume/Akshit_Mehta_Resume.html](assets/resume/Akshit_Mehta_Resume.html)
- **Primary Contact**: mehtaakshit65@gmail.com | +91 82191 78089 | [LinkedIn](https://www.linkedin.com/in/akshitmehta0004/)

---

## 🎨 Key Features & Architectural Enhancements

- **Clear First Impression**: Immediate hero communication answering who Akshit is, what roles he is interviewing for (Full-Time Data Science, ML & Full-Stack Systems), and primary CTAs (View Works, View Résumé, Get in Touch).
- **Visible About & Experience Section**: On-page education details (Chitkara University, B.E. Computer Science 2022–2026), location (India • Open to Remote & Worldwide Relocation), availability status, and milestone engineering timeline.
- **Downloadable & Printable Résumé**: Integrated ATS-friendly, clean résumé with a single-click "Print / Save as PDF" function (`assets/resume/Akshit_Mehta_Resume.html`).
- **Interactive Terminal FAQ (Client-Side Intelligence Engine)**:
  - Instant client-side Q&A running locally in the browser with zero latency.
  - Interactive quick-action command chips (`help`, `about`, `resume`, `skills`, `projects`, `stats`, `auc`, `leakage`, `accounts`, `contact`, `hire`, `clear`).
  - Jump-and-focus controller: clicking the hero "CLI Shell >_" button scrolls directly to the terminal, focuses the prompt, and highlights the active line.
- **Verified Contact Form & Direct Email Dispatch**:
  - Connected to FormSubmit AJAX endpoint with real response verification (`response.ok`).
  - "Message Delivered" success alert displays ONLY upon confirmed receipt.
  - Direct 1-click fallback buttons (`mailto:` and Gmail compose) ensure messages are never dropped even under strict corporate firewalls or adblock restrictions.
- **Transparent Metrics & Evidence Backing**:
  - The headline **91.4% AUC-ROC** benchmark is explicitly qualified: achieved on a controlled synthetic multi-carrier logistics benchmark dataset (10,000 shipment legs with transit anomalies) via stratified 5-fold cross-validation with tuned Gradient Boosting.
  - Links to dataset generation notebooks, validation strategies, and test notebooks are provided for each project.
  - Replaced unqualified "zero data leakage" claims with pipeline-encapsulated preprocessing descriptions validated by automated unit test suites.
- **GitHub Account & Portfolio Link Reconciliation**:
  - Explains the distinction between `@akshitmehta18` (primary profile & portfolio) and `@Mehtaji2004` (academic/systems lab repositories).
  - Explicit role and contribution attributions for collaborative open-source projects (`OpenCourse` under `@The-Karan`, `Nix` under `@Nikhilsaini2204`).
  - Distinct labeling for the alternate minimalist portfolio on Vercel.
- **Accessibility & Focus Rings**:
  - WCAG AA compliant `:focus-visible` styling on all interactive elements.
  - Accessible modal dialogs with keyboard focus trapping, Escape key listener, and return-focus behavior.
  - Semantic `<label for="...">` form controls and explicit SVG `aria-hidden` / accessible labels.

---

## 📂 7 Featured Case Studies

1. **Logistics ML & Delay Prediction Engine**: 91.4% AUC-ROC, Gradient Boosting on synthetic logistics benchmark, stratified 5-fold CV, route risk scoring.
2. **Logistics Analytics & 10-Chart Visual Suite**: Non-parametric hypothesis testing (Mann-Whitney U, Kruskal-Wallis, Chi-Square, p < 0.001), 10 publication-quality Seaborn figures.
3. **High-Throughput Logistics ETL Pipeline**: Pipeline-encapsulated transforms fitting strictly on training partitions, automated schema enforcement, KNN/median imputation.
4. **TalentSphere — AI Career & Job Discovery Platform**: Next.js 14 App Router, TypeScript, Vercel Edge, 100/100 Lighthouse performance.
5. **OpenCourse — AI Adaptive Learning Platform**: Open-source AI prompt engineering, dynamic JSON curriculum synthesis, adaptive reading tracks.
6. **Nix — Natural Language Spring Boot Assistant**: NLP intent classifier, AST annotation scanner for Spring Boot microservices codebase navigation.
7. **Stranded — C++ 2D Wave Survival Engine**: Hardware-accelerated SFML, deterministic 60 FPS fixed-timestep physics loop, zero dynamic heap allocations in tick cycle.

---

## 🚀 Running Locally

```bash
git clone https://github.com/akshitmehta18/nexus.git
cd nexus
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

© 2026 Akshit Mehta. Licensed under MIT.
