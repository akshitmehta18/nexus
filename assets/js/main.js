// Main Controller - Akshit Mehta Portfolio & Editorial Showcase
(function() {
  'use strict';

  // --- Theme Management ---
  const THEME_KEY = 'akshit_theme_pref';

  function initTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;

    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    updateThemeToggleUI(isDark);
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateThemeToggleUI(isDark);
  }

  function updateThemeToggleUI(isDark) {
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;
    btn.innerHTML = isDark 
      ? '<span class="theme-icon">☀️</span><span class="theme-label">Light</span>'
      : '<span class="theme-icon">🌙</span><span class="theme-label">Dark</span>';
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // --- Project Cards Renderer ---
  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || !window.PORTFOLIO_PROJECTS) return;

    container.innerHTML = window.PORTFOLIO_PROJECTS.map((p, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      return `
        <article class="project-card" data-id="${p.id}">
          <div class="project-card-header">
            <span class="project-card-num">${numStr} / 07</span>
            <span class="project-card-badge">${p.badge}</span>
          </div>
          <h3 class="project-card-title">${p.title}</h3>
          <p class="project-card-desc">${p.shortDesc}</p>
          
          <div class="project-card-metric">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>${p.metrics}</span>
          </div>

          <div class="project-card-tech">
            ${p.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${p.tech.length > 4 ? `<span class="tech-tag">+${p.tech.length - 4}</span>` : ''}
          </div>

          <div class="project-card-footer">
            <button class="project-inspect-btn" onclick="window.openProjectModal('${p.id}')">
              <span>Inspect Architecture</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-gh-btn" title="View Source on GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- Modal Deep-Dive Window ---
  window.openProjectModal = function(projectId) {
    const project = (window.PORTFOLIO_PROJECTS || []).find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-category').textContent = project.categoryLabel;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-metrics').textContent = project.metrics;
    document.getElementById('modal-desc').textContent = project.fullDesc;
    document.getElementById('modal-arch').textContent = project.architecture;

    const featList = document.getElementById('modal-features');
    featList.innerHTML = project.features.map(f => `
      <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
        <span style="color: #6366f1; font-weight: bold;">›</span>
        <span>${f}</span>
      </li>
    `).join('');

    const techBox = document.getElementById('modal-tech');
    techBox.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join(' ');

    const linksBox = document.getElementById('modal-links');
    linksBox.innerHTML = `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="hero-btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View Source on GitHub</span>
        </a>
        ${project.demo ? `
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="hero-btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Live Deployment ↗</span>
          </a>
        ` : ''}
      </div>
    `;

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  // --- Interactive AI Shell & Terminal Controller ---
  function initTerminal() {
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');
    const quickChips = document.querySelectorAll('.term-chip');

    function executeCommand(cmd) {
      if (!cmd) return;
      
      const cleanCmd = cmd.trim();
      
      // User line
      const userLine = document.createElement('div');
      userLine.className = 'terminal-row-user';
      userLine.innerHTML = `<span class="terminal-prompt">akshit@editorial:~$</span> <span class="terminal-cmd-text">${cleanCmd.replace(/</g, '&lt;')}</span>`;
      termOutput.appendChild(userLine);

      // AI response
      const res = window.AkshitAI ? window.AkshitAI.query(cleanCmd) : { text: 'AI engine ready.' };
      
      if (res.type === 'clear') {
        termOutput.innerHTML = '';
      } else {
        const aiLine = document.createElement('div');
        aiLine.className = 'terminal-row-ai';
        aiLine.innerHTML = res.text;
        termOutput.appendChild(aiLine);
      }

      termOutput.scrollTop = termOutput.scrollHeight;
      if (termInput) termInput.value = '';
    }

    if (termInput) {
      termInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          executeCommand(termInput.value);
        }
      });
    }

    quickChips.forEach(chip => {
      chip.addEventListener('click', function() {
        const cmd = this.getAttribute('data-cmd');
        if (cmd) executeCommand(cmd);
      });
    });

    // Wire Floating Hero Capsule Query Input
    const heroInput = document.getElementById('hero-ai-input');
    const heroBtn = document.getElementById('hero-ai-btn');
    if (heroInput && heroBtn) {
      function handleHeroQuery() {
        const val = heroInput.value.trim();
        if (!val) {
          document.querySelector('#terminal').scrollIntoView({ behavior: 'smooth' });
          if (termInput) termInput.focus();
          return;
        }
        document.querySelector('#terminal').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          executeCommand(val);
          heroInput.value = '';
        }, 400);
      }

      heroBtn.addEventListener('click', handleHeroQuery);
      heroInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleHeroQuery();
        }
      });
    }
  }

  // --- Contact Form Dispatch ---
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const successBox = document.getElementById('contact-success');
    const submitBtn = document.getElementById('contact-submit-btn');
    const resetBtn = document.getElementById('contact-reset-btn');
    const gmailBtn = document.getElementById('gmail-open-btn');

    if (!form) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const company = document.getElementById('cf-company').value.trim() || 'Independent';
      const message = document.getElementById('cf-message').value.trim();

      if (!name || !email || !message) {
        alert('Please complete all required fields.');
        return;
      }

      // UI loading state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Dispatching...</span>';
      }

      setTimeout(() => {
        form.style.display = 'none';
        if (successBox) successBox.style.display = 'block';

        // Compose direct Gmail link
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name} (${company})`);
        const body = encodeURIComponent(`Hi Akshit,\n\nName: ${name}\nEmail: ${email}\nOrganization: ${company}\n\nMessage:\n${message}\n\n---\nDispatched from Editorial Portfolio Showcase`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mehtaakshit65@gmail.com&su=${subject}&body=${body}`;
        
        if (gmailBtn) {
          gmailBtn.href = gmailUrl;
        }

        // Copy summary to clipboard
        try {
          navigator.clipboard.writeText(`Inquiry to Akshit Mehta from ${name} <${email}>: ${message}`);
        } catch (err) {}

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        }
      }, 400);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        form.reset();
        form.style.display = 'block';
        if (successBox) successBox.style.display = 'none';
      });
    }
  }

  // --- Direct Copy Helper ---
  window.copyToClipboard = function(text, labelId) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text).then(() => {
      const el = document.getElementById(labelId);
      if (el) {
        const orig = el.textContent;
        el.textContent = 'Copied! ✓';
        setTimeout(() => { el.textContent = orig; }, 2000);
      }
    });
  };

  // --- DOM Ready Bootstrapper ---
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', toggleTheme);
    }

    renderProjects();
    initTerminal();
    initContactForm();

    // Close modal on backdrop click or ESC
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) window.closeProjectModal();
      });
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') window.closeProjectModal();
      });
    }
  });

})();
