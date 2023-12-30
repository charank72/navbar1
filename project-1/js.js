let menu =document.querySelector(".nav-links");
let button=document.querySelector(".btn-responsive");
let questions = document.querySelector('.accordion-header')
function toogle(){
  menu.classList.toggle("responsive");
}


  button.addEventListener('click',function(){
    var aContent = button.nextElementSibling;
    button.classList.toggle('active');

    if(button.classList.contains('active')) {
      aContent.style.maxHeight =aContent.scrollHeight + 'px';
    }else{
      aContent.style.maxHeight=0;
    }

    questions.forEach(oBtn => {
      if(oBtn !==button){
        oBtn.classList.remove('active');
        oBtn.nextElementSibling.style.maxHeight=0;
      }
    })
  })

document.getElementById("yr").innerText=new Date().getFullYear();