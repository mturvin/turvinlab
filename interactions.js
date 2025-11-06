// Turvin Design Lab v2.2 — dropdown hover + click-lock
(function(){
  function closeAll(){document.querySelectorAll('.dropdown.active').forEach(el=>el.classList.remove('active'));}
  document.addEventListener('click',e=>{
    const piece=e.target.closest('.piece');
    if(piece){
      const menu=piece.nextElementSibling; // dropdown is the next sibling
      const isActive=menu.classList.contains('active');
      closeAll();
      if(!isActive) menu.classList.add('active');
      e.preventDefault(); return;
    }
    if(!e.target.closest('.dropdown')) closeAll();
  });
  window.addEventListener('scroll',closeAll);
})();
