const burger = document.getElementById('burger');
burger?.addEventListener('click', ()=>{
  const nav = document.querySelector('.nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.gap = '14px';
  nav.style.background = 'rgba(243, 232, 197, 0.95)';
  nav.style.position = 'absolute';
  nav.style.right = '20px';
  nav.style.top = '54px';
  nav.style.padding = '14px 18px';
  nav.style.border = '1px solid rgba(0,0,0,.12)';
  nav.style.borderRadius = '14px';
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
