
document.addEventListener('DOMContentLoaded', ()=>{
  const cards = document.querySelectorAll('.card');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting) en.target.style.opacity = 1;
    });
  }, {threshold:0.15});
  cards.forEach(c=>io.observe(c));
  document.querySelectorAll('[data-href]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const url = b.getAttribute('data-href');
      if(url) window.open(url, '_blank', 'noopener');
    });
  });
});
