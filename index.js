let starsElement = document.getElementById("stars-element");
let displayValue = document.getElementById('value');
for(let i = 0;i<5;i++){
    let starImg = document.createElement('img');
    starImg.src = './star.svg';
    starImg.className = 'star';
    starImg.style.width = "40px";
    starImg.style.height = "40px";
    starImg.style.marginRight = "5px";
    starsElement.appendChild(starImg);

    starImg.addEventListener('mouseover', () => onStarHover(i));
    starImg.addEventListener('mouseleave', onStarLeave);
    starImg.addEventListener('click', () => onStarClick(i));
}

let active = -1;
let stars = document.querySelectorAll(".star")
function onStarHover(index){
    fill(index);
}

function fill(rangeValue){
    for(let i = 0;i<5;i++){
        if(i<=rangeValue){
            stars[i].src = "./color-star.svg";
        }
        else{
            stars[i].src = "./star.svg";
        }
    }
}

function onStarLeave(){
    fill(active);
}
function onStarClick(index){
    active = index;
    fill(active);
    displayValue.innerHTML = index + 1;
}
