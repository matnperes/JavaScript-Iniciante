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
