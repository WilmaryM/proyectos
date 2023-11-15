const slider = document.querySelectorAll(".slider");
const btn_next = document.querySelector(".btn_next");
console.log(btn_next);
const btn_back = document.querySelector(".btn_back");

//cada elemto pasara a la izquierda
slider.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

//inicio del contador
let inicio = 0;

//evento click para que el boton aumente contando y se logre mover a la izquierda
btn_next.addEventListener("click", function() {
    inicio++;
    updateSlides();
});

//evento click para que el boton decremente contando y se logre mover a la izquierda
btn_back.addEventListener("click", function() {
    inicio--;
    updateSlides();
});

function updateSlides() {
    //trabajdno con os botones btn next
    if (inicio < slider.length - 1) {
        btn_next.style.display = 'block';
    } else {
        btn_next.style.display = 'none';
    }
//trabajando con los botones btn back
    if (inicio > 0) {
        btn_back.style.display = 'block';
    } else {
        btn_back.style.display = 'none';
    }
//trabajando con la funccion deslizar
    slider.forEach(function(slide) {
        slide.style.transform = `translateX(-${inicio * 100}%)`;
    });
}
//no quiero que se muestre a primera vista el boton back
btn_back.style.display = 'none';
