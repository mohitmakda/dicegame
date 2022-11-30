var randomnumber= Math.floor(Math.random()*6)+1;

var randomdiceimage= "dice" + randomnumber + ".png";

var randomimagesrc="images/" + randomdiceimage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesrc);

var randomnumber2= Math.floor(Math.random() * 6)+1;

var randomdiceimage2= "dice" + randomnumber2 + ".png";

var randomimagesrc2="images/"+ randomdiceimage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesrc2);

if(randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins!";
}

else if(randomnumber2 > randomnumber){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw"
}