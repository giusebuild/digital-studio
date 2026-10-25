/* Sales process illustration: three manually selectable stages, no simulated results. */
(() => {
  const tabs = [...document.querySelectorAll('[data-sales-stage]')];
  const panels = [...document.querySelectorAll('[data-stage-panel]')];
  if (!tabs.length || tabs.length !== panels.length) return;
  function activate(index, moveFocus=false) {
    tabs.forEach((tab,i) => {
      tab.setAttribute('aria-selected', String(i===index));
      tab.tabIndex = i===index ? 0 : -1;
    });
    panels.forEach((panel,i) => { panel.hidden = i!==index; });
    if(moveFocus) tabs[index].focus();
  }
  tabs.forEach((tab,index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', event => {
      let target;
      if(event.key==='ArrowRight') target=(index+1)%tabs.length;
      else if(event.key==='ArrowLeft') target=(index-1+tabs.length)%tabs.length;
      else if(event.key==='Home') target=0;
      else if(event.key==='End') target=tabs.length-1;
      else return;
      event.preventDefault();
      activate(target,true);
    });
  });
})();