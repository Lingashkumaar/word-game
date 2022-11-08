const scores = document.getElementById("score");
timeText = document.querySelector(".time b");
let main = document.getElementById("main");

let temp,stor,n;
var score =0;
const initTime =maxTime =>{
    timer = setInterval(() =>{
            maxTime++;
            timeText.innerText = maxTime;
            if(maxTime >900000000000){
                if(score < 100){
                    customalert();
                    clearInterval(timer);
                }


            }

    },1000)

}
const initGame =() =>{
    initTime(0);
    let randmObj =words[Math.floor(Math.random() * words.length)];
    let wordsArray = randmObj.word.split("");
    temp=randmObj.answers;
    for(let i= wordsArray.length -1;i > 0; i-- ){
        let j=Math.floor(Math.random()*(i+1));
        [wordsArray[i],wordsArray[j]] = [wordsArray[j],wordsArray[i]];
    }
    for(let i =0;i<wordsArray.length;i++){
        let div =document.createElement("div");
        let p = document.createElement("p");
        p.id="a"+i;
        updatediv(p,wordsArray[i]);
        app=div.append(p)
        document.getElementById("qus").appendChild(div);  
    }
    return wordsArray;
}
let w=100;
let toans=[];
let ans=[];
let array = initGame();
function move(e,pre,cur,next){
    var x = document.getElementById(cur);
    var y =document.getElementById(pre);

    if(next !==""){
            for(let i =0;i<array.length;i++)
            if(x.value == array[i]){
                re=document.getElementById("a"+i)
                if(re.style.display=="none")
                continue
                re.style.display = "none";
                break;
            }
            document.getElementById(next).focus();
        }
        if(next == "")
        {
            stor=cur;
        } 
     
    if(e.key === "Backspace"){
        if(pre !== ""){
        for(let i =0;i<array.length;i++)
        if(y.value == array[i]){
            re=document.getElementById("a"+i)
            if(re.style.display=="")
            continue
            re.style.display = "";
            break
        }
        document.getElementById(pre).focus();
        }
    }
    if(e.key === "Enter"){
        if(stor=="boxa3"){
        for(let i=1;i<=3;i++){
            van = document.forms["add1"]["boxa"+i].value;
            ans.push(van);
            van ="";
        }
        if(ans.length !== 0){
            an=ans.join("");

            console.log(an);
            ans=answer(an);
            ans=ans.split("");
            ans.length=0;
            console.log(ans);
        }
    }
        if(stor=="boxb4"){
        for(let i=1;i<=4;i++){
            va = document.forms["add2"]["boxb"+i].value;
            ans.push(va);
            n=4
        } 
        if(ans.length !== 0){
            ane=ans.join("");
            console.log(ane);
            ans=answer(ane);
            ans=ans.split("");
            ans.length=0;
            console.log(ans);
        }
    }
        if(stor=="boxc5"){
        for(let i=1;i<=5;i++){
            vann = document.forms["add3"]["boxc"+i].value;
            ans.push(vann);
            n=5;
            
        }
        if(ans.length !== 0){
            ann=ans.join("");
            console.log(ann);
            ans=answer(ann);
            ans=ans.split("");
            ans.length=0;
            console.log(ans);
        }
    }
        if(stor=="boxd6"){
        for(let i=1;i<=6;i++){
            v = document.forms["add4"]["boxd"+i].value;
            ans.push(v);
            n=6;
        }
        if(ans.length !== 0){
            anl=ans.join("");
            console.log(anl);
            ans=answer(anl);
            ans=ans.split("");
            ans.length=0;
            console.log(ans);
        }
    }
    }
}
function updatediv(p,a){
    p.innerText ="";
    p.innerText = a;
    return p,a;
    
}
function answer(ans){
    for(let i=0;i<temp.length;i++)
    if(ans == temp[i]){
        if(ans.length == 3){
            score=score+5;
            scores.innerText = score;
            console.log(score);
            
        }
        if(ans.length == 4){
            score =score+10;
            scores.innerText = score;
            console.log(score);
        }
        if(ans.length == 5){
            score =score+20;
            scores.innerText = score;
            console.log(score);
        }
        if(ans.length == 6){
            score =score+100;
            scores.innerText = score;
            console.log(score);
        }
        
    }
        return ans;
}
function customalert(){
    main.innerText =""
    let am = document.createElement("div");
    let bm = document.createElement("button");
    am.id="alert1";
    am.textContent="Game Over";
    am.style.display ="flex";
    am.style.height ="50rem";
    am.style.alignItems ="center";
    am.style.justifyContent = "center";
    am.style.color ="red";
    am.style.fontSize="3rem";
    am.style.fontWeight="800";
    am.style.flexDirection ="column"
    bm.id ="restart";
    bm.textContent="Restart Game";
    bm.style.display ="flex";
    bm.style.height ="3rem";
    bm.style.width ="9rem";
    bm.style.alignItems ="center";
    bm.style.justifyContent = "center";
    bm.style.fontSize="1rem";
    bm.style.borderRadius =".5rem";
    bm.style.backgroundColor = "rgb(5, 139, 5)";
    bm.addEventListener("click",reload=()=>{
        window.location.reload();
    });
    add=am.append(bm);
    main.append(am);
}







