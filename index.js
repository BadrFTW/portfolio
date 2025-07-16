const sideMenu= document.getElementById('sideMenu');
const navBar =document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

const openMenu=()=>{
    sideMenu.style.transform='translateX(-16rem)';

}
const closeMenu=()=>{
    sideMenu.style.transform='translateX(16rem)';


}

window.addEventListener('scroll',()=>{
if (scrollY > 50){
    navBar.classList.add('bg-white/50', 'backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
    navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:border-white/50');

}
else{

    navBar.classList.remove('bg-white/50', 'backdrop-blur-lg','shadow-sm','dark:bg-darkTheme','dark:shadow-white/20');
    navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:border-white/50');
}

});









// dark mode
document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

const toggleTheme=()=>{

    document.documentElement.classList.toggle('dark');


    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = "dark";
    }   else{
        localStorage.theme = "light";
    }


}



