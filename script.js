let s1 = document.getElementById("main")
let arr = ["images/1.jpeg","images/2.jpeg","images/3.jpeg","images/4.jpeg","images/5.jpeg","images/6.jpeg","images/7.jpeg",
"images/8.jpeg","images/9.jpeg","images/10.jpeg"]
s="";

for(i=1;i<=44;i++){
  r = Math.floor(Math.random()*arr.length)
  s+= 
  `<div class="card"><img src=${arr[r]}></div>`
}
main.innerHTML = s;