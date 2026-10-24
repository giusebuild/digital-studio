/* Digital Studio — small, useful interactions for the decision example. */
(() => {
  const tabs = [...document.querySelectorAll('[data-decision]')];
  const panels = [...document.querySelectorAll('[data-panel]')];
  const selectTab = (index, focus) => {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    if (focus) tabs[index].focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(index, false));
    tab.addEventListener('keydown', event => {
      const key = event.key;
      let next = index;
      if (key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (key === 'Home') next = 0;
      else if (key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      selectTab(next, true);
    });
  });

  document.querySelectorAll('[data-need]').forEach(link => {
    link.addEventListener('click', () => {
      const val = link.getAttribute('data-need');
      const target = [...document.querySelectorAll('input[name="need"]')].find(input => input.value === val);
      if (target) {
        target.checked = true;
        target.dispatchEvent(new Event('input', {bubbles: true}));
      }
    });
  });
})();