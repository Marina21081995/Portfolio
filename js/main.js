


document.addEventListener('DOMContentLoaded', function(){

   // показать/скрыть мобильное меню
   const headerMenu = document.querySelector('#header-menu');
   const menuToggle = document.querySelector('#menu-toggle');
   const bodyEl = document.body;

   menuToggle.addEventListener('click', function(){
      if(this.classList.contains('nav-icon--active')){
        this.classList.remove('nav-icon--active');
        headerMenu.classList.remove('open');
        bodyEl.classList.remove('lock');
        
      }
      else{
        this.classList.add('nav-icon--active');
        headerMenu.classList.add('open');
        bodyEl.classList.add('lock');
      }
   });

   headerMenu.addEventListener('click', function(){
        this.classList.remove('open');
        menuToggle.classList.remove('nav-icon--active');
        bodyEl.classList.remove('lock');

   });

});






    
