let w = document.querySelector("#winner>h1>span")
let m1 = document.querySelector("#member-1>span")
let m2 = document.querySelector("#member-2>span")
let m3 = document.querySelector("#member-3>span")

let m1div = document.getElementById("member-1")
let m2div = document.getElementById("member-2")
let m3div = document.getElementById("member-3")
w.innerText = " The winner is: "
roll.addEventListener("click",diceRoll);

function diceRoll(){
m1.innerText= Math.floor(Math.random()*6 +1)
m2.innerText= Math.floor(Math.random()*6 +1)
m3.innerText= Math.floor(Math.random()*6 +1)

let m11 = Number(m1.innerText)
let m22 = Number(m2.innerText)
let m33 = Number(m3.innerText)
// console.log(typeof m11, typeof m22, typeof m33)
if(m11>m22 && m11>m33){
    w.innerText = "Member 1 with Score " + m11
    m1div.style.color = "green"
    if(m22>m33){
        m2div.style.color = "yellow"
        m3div.style.color = "red"
    }else if(m22<m33){
        m2div.style.color = "red"
        m3div.style.color = "yellow"
    }
    else{
        m2div.style.color = "blue"
        m3div.style.color  = "blue"
    }
}
else if(m22>m11 && m22>m33){
    w.innerText = "Member 2 with Score " + m22
    m2div.style.color = "green"
    if(m11>m33){
        m1div.style.color = "yellow"
        m3div.style.color = "red"
    }else if(m33>m11){
        m3div.style.color = "yellow"
        m1div.style.color = "red"
    }
    else{
        m3div.style.color = "blue"
        m1div.style.color = "blue"
    }
}
else if(m33>m11 && m33>m22){
    w.innerText = "Member 3 with Score " + m33
    m3div.style.color  = "green"

    if(m22>m11){
        m2div.style.color = "yellow"
        m1div.style.color = "red"
    }else if(m11>m22) {
        m1div.style.color = "yellow"
        m2div.style.color  = "red"
    }
    else{
        m1div.style.color = "blue"
        m2div.style.color = "blue"
    }
}

else if(m11>m22 && m11==m33){
    w.innerText = "Draw"
m1div.style.color = "blue"
m2div.style.color = "yellow"
m3div.style.color = "blue"

}

else if(m11>m33 && m11== m22){
    w.innerText = "Draw"
    m1div.style.color = "blue"
    m2div.style.color = "blue"
    m3div.style.color = "yellow"
}

else if(m22>m11 && m22 == m33){
    w.innerText = "Draw"
    m1div.style.color = "yellow"
    m2div.style.color = "blue"
    m3div.style.color = "blue"
}
else{
    w.innerText = "Draw"
    m1div.style.color = "blue"
    m2div.style.color = "blue"
    m3div.style.color = "blue"
}
}