const slider = document.querySelectorAll(".slider");
const btn_next = document.querySelector(".btn-next");
const btn_back = document.querySelector(".btn-back");

slider.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
});

let inicio = 0;

btn_next.addEventListener("click", function() {
    inicio++;
    updateSlides();
});

btn_back.addEventListener("click", function() {
    inicio--;
    updateSlides();
});

function updateSlides() {
    if (inicio < slider.length - 1) {
        btn_next.style.display = 'block';
    } else {
        btn_next.style.display = 'none';
    }

    if (inicio > 0) {
        btn_back.style.display = 'block';
    } else {
        btn_back.style.display = 'none';
    }

    slider.forEach(function(slide) {
        slide.style.transform = `translateX(-${inicio * 100}%)`;
    });
}

btn_back.style.display = 'none';
