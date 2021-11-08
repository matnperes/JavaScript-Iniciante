function initTabNav(){
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add('ativo')


  function activeTab(index){
    tabContent.forEach((section, i)=>{  
      section.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo');
  }


  tabMenu.forEach((i, index)=>{
    i.addEventListener("click", function(){
      activeTab(index)
    })
  })
}
initTabNav();

function initAccord(){
const accordionItem = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo'
if(accordionItem.length){
function openItem(){
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
}

accordionItem.forEach((i) => {
  i.addEventListener('click', openItem)});
}
}

initAccord();


function initScroll(){
const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event){
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
}

initScroll();

function initAnimaScroll(){
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight *0.6;

function animaScroll(){
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if(isSectionVisible){
      section.classList.add('ativo');
    }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);
}

initAnimaScroll();