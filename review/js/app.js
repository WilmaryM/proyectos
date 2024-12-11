const reviews = [
    {
      id: 1,
      nombre: 'susan smith',
      profesion: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      nombre: 'anna johnson',
      profesion: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enombrel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      nombre: 'peter jones',
      profesion: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      nombre: 'bill anderson',
      profesion: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

//select items
const img = document.getElementById('img-persona');
const nombre = document.getElementById('nombre');
const profesion = document.getElementById('profesion');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextvBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item 
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
})

//show person based on item
function showPerson() {
    const item = reviews[currentItem];
        img.src = item.img;
        nombre.textContent = item.nombre;
        profesion.textContent = item.profesion;
        info.textContent = item.text;
}

//show de netx person
nextvBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});


//show de prev person
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem <0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//show a random person
randomBtn.addEventListener("click", function(){
    currentItem= Math.floor(Math.random() * reviews.length);
    showPerson();
});
