const close = document.getElementById('hamburger');
const menu = document.querySelector('.main_nav');
const icon_text = document.getElementById('icon_menu');
close.addEventListener('click', function(){
   menu.classList.toggle("show_menu");
    if(menu.classList.contains("show_menu")){
        icon_text.innerText = 'X';
    }
    else{
        icon_text.innerText = 'Menu';
    }
});