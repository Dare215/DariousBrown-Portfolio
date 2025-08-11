document.getElementById('year').textContent = new Date().getFullYear();
// Smooth focus after skip link
const skip = document.querySelector('.skip-link');
if (skip) { skip.addEventListener('click', ()=> document.getElementById('main')?.focus()); }
// GA4 outbound project click tracking
document.addEventListener('click', function(e){
  const a = e.target.closest('a.btn.sm[href^="https://github.com/"]');
  if(!a) return;
  const project = a.href.split('/').slice(-1)[0];
  if (window.gtag) {
    gtag('event', 'select_content', {
      content_type: 'project_link',
      item_id: project,
      method: 'github'
    });
  }
});
