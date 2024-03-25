const navToggle = document.querySelector('.nav-toggle');
const link = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    //console.log(link.classList);
    //console.log(link.classList.contains('ramdo')false);
    //console.log(link.classList.contains('links')true);

       /* if(link.classList.contains("show-links")){
            link.classList.remove("show-links");
        }else{
            link.classList.add("show-links");
        }*/
    link.classList.toggle('show-links');
});