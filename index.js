var n=((Math.random()*6))+1;
n=Math.floor(n);
var p=((Math.random()*6))+1;
p=Math.floor(p);
var g1="images/dice"+n+".png";
var g2="images/dice"+p+".png";
document.querySelector("img.img1").setAttribute("src",g1);
document.querySelector("img.img2").setAttribute("src",g2);
var heading=document.querySelector("h1");
if(n>p){
  heading.innerHTML="🚩 Play 1 Wins!";
}else{
if(n<p){
  heading.innerHTML="🚩 Play 2 Wins!";
}
else{
  heading.innerHTML="🚩 Draw!";
}
}
