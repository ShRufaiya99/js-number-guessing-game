const toggle = document.querySelector(".game-box .toggle")
const toggle2 = document.querySelector(".game-box2 .toggle2")
const reset = document.querySelector(".reset")
const gameBox = document.querySelector(".game-box")
const gameBox2 = document.querySelector(".game-box2")
const b1input = document.querySelector(".input")
const b2input = document.querySelector(".input2")
const h2 = document.querySelector(".msg")

console.log(toggle)
console.log(gameBox)

console.log(toggle2)
console.log(gameBox2)

console.log(b1input)
console.log(b2input)

toggle.addEventListener("click",()=>{
    gameBox.style.display = "none"
    gameBox2.style.display = "block"
    gameBox2.style.display = "flex"
})

toggle2.addEventListener("click",()=>{
    if( b2input.value ===""){
        h2.innerHTML= " PLEASE ENTER YOUR NUMBER";
        h2.style.position = 'absolute';
        h2.style.top = '80%';
        h2.style.left = '36.5%';

    } else if (b1input.value == b2input.value){
        h2.innerHTML= " PLAYER TWO IS WINNER";
        h2.style.position = 'absolute';
        h2.style.top = '80%';
        h2.style.left = '38%';
    }else{
        h2.innerHTML= " PLAYER ONE IS WINNER";
        h2.style.position = 'absolute';
        h2.style.top = '80%';
        h2.style.left = '38%';
    }
})

reset.addEventListener("click", ()=>{
    location.reload(); 
})