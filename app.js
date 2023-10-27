let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");
let allbtn=document.querySelectorAll(".btn");
let bt=document.getElementById("start")

bt.addEventListener("click",function(){
    if(started==false){
    console.log("Game Started");
    started=true;
    levelup();
}})


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randColor=btns[randidx];
    gameseq.push(randColor);
    let randbtn=document.querySelector(`.${randColor}`);
    btnflash(randbtn);

}

function checkAns(idx){
   
   if(userseq[idx]===gameseq[idx]){
    if(userseq.length==gameseq.length){
        setTimeout(levelup(),1000);
    };
   }
   else{
    h2.innerText=`game over! Your score was ${level}`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
   }

}

function btnPress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=fasle;
    gameseq=[];
    userseq=[]
    level=0;

}

