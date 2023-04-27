let btn=document.querySelector("#dropdownbtn");
let fa=document.querySelector("#firstarrow");
console.log(fa);
let dropdown=document.querySelector(".dropdown");
dropdown.style.display="none";
btn.addEventListener("click",()=>{
  if(dropdown.style.display==="none"){
    dropdown.style.display="block";
    fa.src="./images/upload1.png";
 
  }else{
    dropdown.style.display="none";
    fa.src="./images/down-arrow.png";
  
  }
 
})