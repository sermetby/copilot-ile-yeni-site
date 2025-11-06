// Küçük JS: mobil menü toggling ve yıl güncelleme (daha güvenilir)
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.nav-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      const control = this.getAttribute('aria-controls');
      const nav = document.getElementById(control) || document.querySelector('#' + control);
      if(!nav) return;
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      const hidden = nav.getAttribute('aria-hidden') === 'true';
      nav.setAttribute('aria-hidden', String(!hidden));
    });
  });

  // Yıl alanlarını güncelle: hem id^=year hem .year desteği
  const yearEls = Array.from(document.querySelectorAll('[id^="year"], .year'));
  yearEls.forEach(function(el){
    el.textContent = new Date().getFullYear();
  });
});