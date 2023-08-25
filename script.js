let bubbleCreate = "";
let timeCounter = 60;
var rm = 0;
let score = 0;
document.querySelector("#scoreVal").textContent = score;


function bubbleCreation(){
    for(let i = 0; i <= 74; i++){
        let changeValue = Math.floor(Math.random() * 10);
        bubbleCreate += `<div class="bubble">${changeValue}</div>`;
        document.querySelector(".gamecontainer").innerHTML = bubbleCreate;
        
    }
    bubbleCreate = ""
}


function hitChanger(){
     rm =  Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = rm;
    
}

function scoreIncreaser(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}





function timerChanger(){
    let interval = setInterval(function(){
       
        if(timeCounter >= 0){
            let counter = timeCounter--;
            document.querySelector("#timeVal").textContent = counter;
           
            
        }else{
            clearInterval(interval)
            gameClose();
            timeCounter = 60;
        }
        
    }, 1000)
}

function gameOn(){
    document.querySelector(".gamecontainer").addEventListener('click', function(e){
        let num = Number(e.target.textContent);
        
            if(rm == num){
                scoreIncreaser();
                hitChanger();
                bubbleCreation();
            }else{
                alert("Enter a correct number!!")
            }
            
            
    })
}
    

function gameClose(){
   let b = document.querySelector(".gamecontainer").innerHTML = `<div class="rcon"><div class = "results">Thank You For Playing Game!!</div>
   <div class = "results">Your Score is ${score} <div> </div> `;
   

}


bubbleCreation();
gameOn();
timerChanger();
hitChanger();

setTimeout(function(){
    document.querySelector("#start").addEventListener('click',function(){
        bubbleCreation();
        gameOn();
        timerChanger();
        hitChanger();
    })
}, 60000)




