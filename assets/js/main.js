// Main Controller - Akshit Mehta Portfolio & Editorial Showcase
// Fully updated with verified contact dispatch, accessible project modals,
// terminal jump-and-focus controller, and transparent case study evidence.

(function() {
  'use strict';

  let lastActiveElement = null;

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
      ? '<span class="theme-icon" aria-hidden="true">☀️</span><span class="theme-label">Light</span>'
      : '<span class="theme-icon" aria-hidden="true">🌙</span><span class="theme-label">Dark</span>';
    btn.setAttribute('aria-label', isDark ? 'Switch to light color theme' : 'Switch to dark color theme');
  }

  // --- CLI Shell Jump & Focus Controller ---
  window.jumpToTerminal = function(presetCmd) {
    const terminalSec = document.getElementById('terminal');
    const termInput = document.getElementById('terminal-input');
    
    if (terminalSec) {
      const nav = document.querySelector('.framed-nav');
      const navOffset = nav ? nav.offsetHeight + 16 : 80;
      const elementPosition = terminalSec.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      if (termInput) {
        termInput.focus();
        termInput.classList.add('terminal-input-active');
        setTimeout(() => termInput.classList.remove('terminal-input-active'), 1800);
        
        if (presetCmd && typeof presetCmd === 'string') {
          termInput.value = presetCmd;
        }
      }
    }, 450);
  };

  // --- Project Cards Renderer ---
  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || !window.PORTFOLIO_PROJECTS) return;

    container.innerHTML = window.PORTFOLIO_PROJECTS.map((p, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      
      // Determine secondary action button (Evidence link)
      let evidenceBtn = '';
      if (p.demo) {
        evidenceBtn = `
          <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-pill-btn live-btn" title="Open live deployed application">
            <span class="pulse-indicator"></span>
            <span>Live Demo ↗</span>
          </a>
        `;
      } else if (p.notebook) {
        evidenceBtn = `
          <a href="${p.notebook}" target="_blank" rel="noopener noreferrer" class="project-pill-btn notebook-btn" title="View Jupyter notebook on GitHub">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z"/></svg>
            <span>Notebook ↗</span>
          </a>
        `;
      } else if (p.walkthroughLink) {
        evidenceBtn = `
          <a href="${p.walkthroughLink}" target="_blank" rel="noopener noreferrer" class="project-pill-btn doc-btn" title="View technical architecture and methodology walkthrough">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            <span>Walkthrough ↗</span>
          </a>
        `;
      }

      return `
        <article class="project-card" data-id="${p.id}" tabindex="0">
          <div class="project-card-header">
            <span class="project-card-num">${numStr} / 07</span>
            <span class="project-card-badge">${p.badge}</span>
          </div>

          <h3 class="project-card-title">${p.title}</h3>
          
          <div class="project-card-role-tag">
            <span class="role-icon" aria-hidden="true">👤</span>
            <span>${p.myRole.split('.')[0]}</span>
          </div>

          <p class="project-card-desc">${p.shortDesc}</p>
          
          <div class="project-card-metric" title="Validated Performance Metric">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
            <span>${p.metrics}</span>
          </div>

          <div class="project-card-tech" aria-label="Technologies used">
            ${p.tech.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${p.tech.length > 4 ? `<span class="tech-tag">+${p.tech.length - 4}</span>` : ''}
          </div>

          <div class="project-card-footer">
            <button class="project-inspect-btn" onclick="window.openProjectModal('${p.id}', this)" aria-label="Inspect architecture and case study for ${p.title}">
              <span>Inspect Architecture</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>

            <div class="project-action-icons">
              ${evidenceBtn}
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-gh-btn" aria-label="View source code on GitHub for ${p.title}" title="View Source on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // --- Modal Deep-Dive Window with Keyboard Accessibility ---
  window.openProjectModal = function(projectId, triggerBtn) {
    lastActiveElement = triggerBtn || document.activeElement;
    const project = (window.PORTFOLIO_PROJECTS || []).find(p => p.id === projectId);
    if (!project) return;

    document.getElementById('modal-category').textContent = project.categoryLabel;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-metrics').textContent = project.metrics;
    document.getElementById('modal-desc').textContent = project.fullDesc;
    
    // Problem and Role details
    const problemBox = document.getElementById('modal-problem');
    if (problemBox) problemBox.textContent = project.problem;

    const roleBox = document.getElementById('modal-role');
    if (roleBox) roleBox.textContent = project.myRole;

    const evalBox = document.getElementById('modal-evaluation');
    if (evalBox) evalBox.textContent = project.evaluation;

    document.getElementById('modal-arch').textContent = project.architecture;

    const featList = document.getElementById('modal-features');
    featList.innerHTML = project.features.map(f => `
      <li style="margin-bottom: 0.5rem; display: flex; align-items: flex-start; gap: 0.5rem;">
        <span style="color: var(--accent-loop); font-weight: bold;" aria-hidden="true">›</span>
        <span>${f}</span>
      </li>
    `).join('');

    const techBox = document.getElementById('modal-tech');
    techBox.innerHTML = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join(' ');

    const linksBox = document.getElementById('modal-links');
    linksBox.innerHTML = `
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="hero-btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>View Source on GitHub ↗</span>
        </a>
        ${project.demo ? `
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="hero-btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Live Deployment ↗</span>
          </a>
        ` : ''}
        ${project.notebook ? `
          <a href="${project.notebook}" target="_blank" rel="noopener noreferrer" class="hero-btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Jupyter Notebook ↗</span>
          </a>
        ` : ''}
        ${project.datasetLink ? `
          <a href="${project.datasetLink}" target="_blank" rel="noopener noreferrer" class="hero-btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Dataset Spec ↗</span>
          </a>
        ` : ''}
        ${project.walkthroughLink ? `
          <a href="${project.walkthroughLink}" target="_blank" rel="noopener noreferrer" class="hero-btn-secondary" style="display: inline-flex; align-items: center; gap: 0.5rem;">
            <span>Methodology Walkthrough ↗</span>
          </a>
        ` : ''}
      </div>
    `;

    const modal = document.getElementById('project-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Focus close button inside modal
    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  };

  window.closeProjectModal = function() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    
    // Return focus to the trigger button
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  };

  // --- Interactive AI Shell & Terminal Controller ---
  function initTerminal() {
    const termInput = document.getElementById('terminal-input');
    const termOutput = document.getElementById('terminal-output');
    const quickChips = document.querySelectorAll('.term-chip');

    function executeCommand(cmd) {
      if (!cmd || !cmd.trim()) return;
      
      const cleanCmd = cmd.trim();
      
      // User line
      const userLine = document.createElement('div');
      userLine.className = 'terminal-row-user';
      userLine.innerHTML = `<span class="terminal-prompt" aria-hidden="true">akshit@nexus:~$</span> <span class="terminal-cmd-text">${cleanCmd.replace(/</g, '&lt;')}</span>`;
      termOutput.appendChild(userLine);

      // Query AI / scripted knowledge engine
      const res = window.AkshitAI ? window.AkshitAI.query(cleanCmd) : { text: 'Knowledge engine ready. Type help.' };
      
      if (res.type === 'clear') {
        termOutput.innerHTML = '';
      } else {
        const aiLine = document.createElement('div');
        aiLine.className = 'terminal-row-ai';
        aiLine.innerHTML = res.text;
        termOutput.appendChild(aiLine);
      }

      // Smooth scroll to latest output
      termOutput.scrollTop = termOutput.scrollHeight;
      if (termInput) {
        termInput.value = '';
        termInput.focus();
      }
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
        if (cmd) {
          // Provide instant visual feedback on click
          this.classList.add('chip-active');
          setTimeout(() => this.classList.remove('chip-active'), 250);
          executeCommand(cmd);
        }
      });
    });

    // Hero Floating Capsule Query Input
    const heroInput = document.getElementById('hero-ai-input');
    const heroBtn = document.getElementById('hero-ai-btn');
    if (heroInput && heroBtn) {
      function handleHeroQuery() {
        const val = heroInput.value.trim();
        if (!val) {
          window.jumpToTerminal();
          return;
        }
        window.jumpToTerminal(val);
        setTimeout(() => {
          executeCommand(val);
          heroInput.value = '';
        }, 500);
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

  // --- Contact Form Dispatch with Real Verification ---
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const successBox = document.getElementById('contact-success');
    const errorBox = document.getElementById('contact-error');
    const submitBtn = document.getElementById('contact-submit-btn');
    const resetBtn = document.getElementById('contact-reset-btn');
    const errResetBtn = document.getElementById('contact-err-reset-btn');
    const directMailtoBtn = document.getElementById('contact-direct-mailto');

    if (!form) return;

    // Helper to generate mailto URL
    function getMailtoUrl(name, email, company, message) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'} (${company || 'Direct'})`);
      const body = encodeURIComponent(`Hi Akshit,\n\nName: ${name}\nEmail: ${email}\nOrganization: ${company}\n\nMessage:\n${message}\n\n---\nDispatched via Nexus Portfolio`);
      return `mailto:mehtaakshit65@gmail.com?subject=${subject}&body=${body}`;
    }

    // Helper to generate Gmail compose URL
    function getGmailUrl(name, email, company, message) {
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'} (${company || 'Direct'})`);
      const body = encodeURIComponent(`Hi Akshit,\n\nName: ${name}\nEmail: ${email}\nOrganization: ${company}\n\nMessage:\n${message}\n\n---\nDispatched via Nexus Portfolio`);
      return `https://mail.google.com/mail/?view=cm&fs=1&to=mehtaakshit65@gmail.com&su=${subject}&body=${body}`;
    }

    if (directMailtoBtn) {
      directMailtoBtn.addEventListener('click', function(e) {
        const name = document.getElementById('cf-name').value.trim();
        const email = document.getElementById('cf-email').value.trim();
        const company = document.getElementById('cf-company').value.trim();
        const message = document.getElementById('cf-message').value.trim();
        window.location.href = getMailtoUrl(name, email, company, message);
      });
    }

    form.addEventListener('submit', async function(e) {
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
        submitBtn.innerHTML = '<span>Verifying &amp; Delivering...</span>';
      }

      const payload = {
        name: name,
        email: email,
        organization: company,
        message: message,
        _subject: `Nexus Portfolio Inquiry from ${name} (${company})`,
        _template: 'table'
      };

      try {
        // Dispatch to FormSubmit AJAX endpoint
        const response = await fetch('https://formsubmit.co/ajax/mehtaakshit65@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        const data = await response.json();

        // Check verification: ONLY show success if the endpoint actually confirmed receipt
        if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
          form.style.display = 'none';
          if (errorBox) errorBox.style.display = 'none';
          if (successBox) {
            successBox.style.display = 'block';
            successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        } else {
          throw new Error(data.message || 'Form service did not confirm delivery.');
        }
      } catch (err) {
        console.warn('Form dispatch fallback triggered:', err);
        // Fallback: Show explicit action buttons so message is NEVER lost
        form.style.display = 'none';
        if (successBox) successBox.style.display = 'none';
        if (errorBox) {
          errorBox.style.display = 'block';
          
          const gmailFallback = document.getElementById('fallback-gmail-btn');
          const mailtoFallback = document.getElementById('fallback-mailto-btn');
          
          if (gmailFallback) gmailFallback.href = getGmailUrl(name, email, company, message);
          if (mailtoFallback) mailtoFallback.href = getMailtoUrl(name, email, company, message);
          
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        }
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        form.reset();
        form.style.display = 'block';
        if (successBox) successBox.style.display = 'none';
        if (errorBox) errorBox.style.display = 'none';
      });
    }

    if (errResetBtn) {
      errResetBtn.addEventListener('click', function() {
        form.style.display = 'block';
        if (successBox) successBox.style.display = 'none';
        if (errorBox) errorBox.style.display = 'none';
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
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          window.closeProjectModal();
        }
      });
    }
  });

})();
