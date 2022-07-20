var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1++;
randomNumber1=Math.floor(randomNumber1);
console.log(randomNumber1);
var arr1=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var select1=randomNumber1-1;
document.querySelector(".img1").setAttribute("src",arr1[select1]);


var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2++;
randomNumber2=Math.floor(randomNumber2);
console.log(randomNumber2);

var select2=randomNumber2-1;
document.querySelector(".img2").setAttribute("src",arr1[select2]);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 Won!";
}
else{
    document.querySelector("h1").innerHTML="Player2 Won!🚩";
}