var cards=document.querySelectorAll(".card");
var p=document.querySelector("p");

// console.log(cards[0]);
const randomColor =()=>{
     return Math.floor(Math.random()*256);
}

var color=[]

for(var i=0;i<cards.length;i++){
    var arr=[];
    arr.length=3;

    arr[0]=randomColor();
    arr[1]=randomColor();
    arr[2]=randomColor();
    cards[i].style.backgroundColor =
        "rgb(" + arr[0] + "," + arr[1] + ',' + arr[2];
    color.push(cards[i].style.backgroundColor)
}
// console.log(color);

p.textContent=color[Math.floor(Math.random()*9)];

const checkans=(value)=>{
    if(color[value]==p.textContent){
        alert("correct Answer");
       p.style.backgroundColor="green";
    }
    else{
        alert("Wrong Answer");
        p.style.backgroundColor="red";
        // cards[value].style.display="none";
    }
}