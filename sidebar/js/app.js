const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const siderbar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', function(){
    //console.log(siderbar.classList);
    /*if(siderbar.classList.contains('show-sidebar')){
        siderbar.classList.remove('show-sidebar');
    }
    else{
        siderbar.classList.add('show-sidebar');
    }*/
    siderbar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    siderbar.classList.remove('show-sidebar');
});