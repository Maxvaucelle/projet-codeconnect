let e=true;
function changer(){
if(e){
document.getElementById("mdp").setAttribute("type","text");
document.getElementById("eye").src="icons8-visible-32.png";
e=false;
}
else{
document.getElementById("mdp").setAttribute("type","password");
document.getElementById("eye").src="icons8-cacher-32.png";
e=true;  
}
}