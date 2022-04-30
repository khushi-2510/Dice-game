var randomNumber1= Math.floor((Math.random()*6)+1);

var randomimage= "images/dice" + randomNumber1 + ".png"; //generates random images between dice1 to dice6

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage); //first parameter is the attribute which needs to be changed and second parameteris the value.



var randomNumber2= Math.floor((Math.random()*6)+1);

var randomimage2= "images/dice" + randomNumber2 + ".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 won!!";
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML="Player 2 won!!";
}
else{
  document.querySelector("h1").innerHTML="It is a TIE!!";
}
