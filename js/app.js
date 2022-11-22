document.addEventListener('DOMContentLoaded', function(){

    // changing the content of the buttons upon clicking them
    let theButton = document.querySelectorAll('.buycart');
    theButton.forEach(element => {
        element.addEventListener('click', function(){
            let clicked = false;
            if (element.className == 'buycart'){
                console.log('buycart')
                clicked = true;
                element.className = 'boughtcart'
                if(element.id == 'addtocart'){
                    element.innerHTML=''
                    let theicon = document.createElement('i');
                    theicon.classList = "fa-solid fa-cart-shopping";
                    element.appendChild(theicon);
                    let thename = document.createElement('span');
                    thename.innerText= 'Added to cart'
                    element.appendChild(thename)
                    
                }
                else{
                    element.innerHTML=''
                    let theicon = document.createElement('i');
                    theicon.classList = "fa-regular fa-credit-card";
                    element.appendChild(theicon);
                    let thename = document.createElement('span');
                    thename.innerText= 'Bought'
                    element.appendChild(thename)
                    
                }
            }
            else{
                console.log('buycart')
                clicked = false;
                element.className = 'buycart'
                if(element.id == 'addtocart'){
                    element.innerHTML=''
                    let theicon = document.createElement('i');
                    theicon.classList = "fa-solid fa-cart-shopping";
                    element.appendChild(theicon);
                    let thename = document.createElement('span');
                    thename.innerText= 'Add to cart'
                    element.appendChild(thename)
                    
                }
                else{
                    element.innerHTML=''
                    let theicon = document.createElement('i');
                    theicon.classList = "fa-regular fa-credit-card";
                    element.appendChild(theicon);
                    let thename = document.createElement('span');
                    thename.innerText= 'Buy Now'
                    element.appendChild(thename)
                    
                }  
            }
            
        })
    })

    // Displaying content of the chapter upon clicking the button containing its number

    let thechapters = document.querySelectorAll('.chapter');
    thechapters.forEach(chapter => {
        chapter.style.display = 'none'
    })

    let certainchapters = document.querySelectorAll('.certainchapter');
    certainchapters.forEach(button => {
        button.addEventListener('click', function(){
            thechapters.forEach(onechapter => {
                if (button.id == onechapter.id){
                    onechapter.style.display='block';
                }
                else{
                    onechapter.style.display='none';
                }
            })
        })
    })

    // allowing user to rate the book
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior : "smooth"
            });
        });
    })
    const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
const starClassActive = "rating__star fas fa-star";
const starClassInactive = "rating__star far fa-star";
const starsLength = stars.length;
let i;
stars.map((star) => {
star.onclick = () => {
  i = stars.indexOf(star);

  if (star.className===starClassInactive) {
    for (i; i >= 0; --i) stars[i].className = starClassActive;
  } else {
    for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
  }
};
});
}
executeRating(ratingStars);

// Displaying other books to user through horizontal scrolling bar
var allbuttons = document.querySelectorAll('.iconl');
    allbuttons.forEach(element => {
        
    element.onclick = function(){
        var left=document.querySelector('.allbooks');
        left.scrollBy({
            left: -350,

        })
    }});
    var alllbuttons = document.querySelectorAll('.iconr');
    alllbuttons.forEach(elementt => {
        
    elementt.onclick = function(){
        var right=document.querySelector('.allbooks');
        right.scrollBy(350,0)
    }});

    let thebody = document.querySelector('body');
    let dq = document.querySelector('#descriptionquotes');
    console.log(thebody.style);
    console.log(dq.id);
    if (parseInt(thebody.style.width) < 500){
        
        dq.style.display = 'block';
    }

    let elemm = document.querySelectorall('section');

let rect = elem.getBoundingClientRect();

elemm.forEach(elem =>{
for (const key in rect) {
  if (typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent = `${key} : ${rect[key]}`;
    document.body.appendChild(para);
  }
}
} )

})

