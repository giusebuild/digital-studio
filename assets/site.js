/* Digital Studio — interaction layer, no external services or trackers */
(() => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuButton && mobileNav) {
    const close = () => {
      mobileNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Apri menu');
      menuButton.textContent = '☰';
    };
    menuButton.addEventListener('click', () => {
      const open = !mobileNav.classList.contains('is-open');
      mobileNav.classList.toggle('is-open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Chiudi menu' : 'Apri menu');
      menuButton.textContent = open ? '✕' : '☰';
    });
    mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') close();
    });
    window.matchMedia('(min-width: 791px)').addEventListener('change', event => {
      if (event.matches) close();
    });
  }

  const form = document.querySelector('[data-demo-form]');
  const output = document.getElementById('contact-result');
  const copyButton = document.querySelector('[data-copy-summary]');
  if (!form || !output || !copyButton) return;

  let summary = '';
  form.addEventListener('input', () => {
    output.classList.remove('is-visible');
    copyButton.textContent = form.dataset.demoForm === 'partner' ? 'Copia la presentazione' : 'Copia il riepilogo';
  });

  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    if (form.dataset.demoForm === 'partner') {
      summary = [
        'PRESENTAZIONE PARTNER — DIGITAL STUDIO',
        'Nome: ' + values.get('name'),
        'Email: ' + values.get('email'),
        'Attività: ' + (values.get('company') || 'Non indicata'),
        'Competenza: ' + values.get('specialty'),
        '',
        'Collaborazione:',
        values.get('message')
      ].join('\n');
    } else {
      summary = [
        'RICHIESTA — DIGITAL STUDIO',
        'Nome: ' + values.get('name'),
        'Email: ' + values.get('email'),
        'Azienda: ' + (values.get('company') || 'Non indicata'),
        'Esigenza: ' + values.get('need'),
        '',
        'Descrizione:',
        values.get('message')
      ].join('\n');
    }
    output.classList.add('is-visible');
    output.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  });

  copyButton.addEventListener('click', async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      copyButton.textContent = 'Testo copiato ✓';
    } catch (_) {
      const area = document.createElement('textarea');
      area.value = summary;
      area.setAttribute('readonly', '');
      area.style.position = 'absolute';
      area.style.left = '-9999px';
      document.body.appendChild(area);
      area.select();
      const copied = document.execCommand('copy');
      area.remove();
      if (copied) {
        copyButton.textContent = 'Testo copiato ✓';
      } else {
        const blob = new Blob([summary], {type:'text/plain;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = form.dataset.demoForm === 'partner' ? 'presentazione_partner.txt' : 'richiesta_digital_studio.txt';
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        copyButton.textContent = 'Testo salvato ✓';
      }
    }
  });
})();