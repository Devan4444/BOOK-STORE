let mainl = JSON.parse(localStorage.getItem("mainl")) || [];
let l=[];
function login(){
    let n=document.getElementById("email").value;
    let p=document.getElementById("pwd").value;
    let c=0;
    console.log(mainl)
     for(let i=0;i<mainl.length;i++){
            if(mainl[i][1].toLowerCase()==n.toLowerCase()){
                if(mainl[i][3]==p){
                    window.location.href="index3.html";
                    c=1;
                    break;
                }
        }
     }
     if(c===0){
        alert("Passward or username is incorrect");
     }
}
function signup(){
let n=document.getElementById("name").value;
let e=document.getElementById("email").value;
let a=document.getElementById("phone").value;
let p1=document.getElementById("pwd1").value;
let p2=document.getElementById("pwd2").value;
let verify=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let pverify=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
let phverify=/^\d{10}$/;
if(n.trim()!=="" && verify.test(e) && pverify.test(p1) && phverify.test(a) && p1==p2){
document.getElementById("re").innerHTML="registered successfully!";
let subl=[n,e,a,p1];
mainl.push(subl);
localStorage.setItem("mainl", JSON.stringify(mainl));
console.log(mainl);
window.location.href="index.html";
}
else{
    if(n.trim()==="" ){
        alert("Name cannot be emptied")
    }
    if(!verify.test(e)){
        alert("invalid mail format")
    }
    if( !pverify.test(p1)){
        alert("Passward must contain atleat 8 digits and it must have numbers albhabet and symbols")
    }
    if(!phverify.test(a)){
        alert("invalid number")
    }
    if(p1!=p2){
        alert("re-entered passward not match")
    }
}
}

function startCountdown() {
    let remainingTime = 604800;

    const timerInterval = setInterval(() => {
        let minutes = Math.floor(remainingTime / 60);
        let seconds = remainingTime % 60;
        let formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        let uidElement = document.getElementById("uid");
        if (uidElement) {
            uidElement.innerHTML = "ANNUAL DAY IN🥳="+formattedTime;
        }
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("ITS Annual day🥳🥳");
        }
        remainingTime--; 
    }, 1000); 
}
function addtocart(book){
 l.push(book);
 alert(book+" added to cart");
}
function cart(){
    for(let i=0;i<l.length;i++){
        document.getElementById("cart").innerHTML=l[i]+"\n";
    }
}