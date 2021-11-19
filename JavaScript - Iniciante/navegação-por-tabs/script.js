const activeClass = 'ativo'


function initTabNav(){
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add(activeClass)


  function activeTab(index){
    tabContent.forEach((section, i)=>{  
      section.classList.remove(activeClass)
    })
    tabContent[index].classList.add(activeClass);
  }


  tabMenu.forEach((i, index)=>{
    i.addEventListener("click", function(){
      activeTab(index)
    })
  })
}


function initAccord(){
const accordionItem = document.querySelectorAll('.js-accordion dt');
if(accordionItem.length){
function openItem(){
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
}
accordionItem.forEach((i) => {
  i.addEventListener('click', openItem)});
}
}

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

function initAnimaScroll(){
const sections = document.querySelectorAll('.js-scroll');
const windowMetade = window.innerHeight *0.6;

function animaScroll(){
  sections.forEach((section) =>{
    const sectionTop = section.getBoundingClientRect().top;
    const isSectionVisible = (sectionTop - windowMetade) < 0;
    if(isSectionVisible){
      section.classList.add(activeClass);
    }
  })
}

animaScroll();

window.addEventListener('scroll', animaScroll);
}

initScroll();
initAccord();
initTabNav();
initAnimaScroll();