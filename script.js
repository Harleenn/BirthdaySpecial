// SCREEN NAVIGATION

function showScreen(screenId){

    document
    .querySelector(".screen.active")
    .classList.remove("active");

    document
    .getElementById(screenId)
    .classList.add("active");

}

// MISSION 1

function wrongAwesome(){

    document.getElementById("awesomeText")
    .innerHTML =
    "🚨 Incorrect Answer: Please stop lying. Thonu v pta va tuc kine cute ho.... ";

}

// MISSION 2

function wrongLove(){

    document.getElementById("loveText")
    .innerHTML =
    "🚨 SYSTEM ERROR 🚨<br><br>Correct answers are only these⬆️😂";

    document.getElementById("loveButtons")
    .innerHTML =

    `
    <button onclick="correctLove()">YESSSSS🔥🐰</button>
    <button onclick="correctLove()">YESSSSSSS ♾️🌸</button>
    <button onclick="correctLove()">OBVIOUSLY YASSSSSS 💗💖❤️💋</button>
    `;

}

function correctLove(){

    showScreen("mission3");

}

// HEART GAME

const secretHeart = Math.floor(Math.random()*9)+1;

function checkHeart(num){

    if(num === secretHeart){

        document.getElementById("heartResult")
        .innerHTML =
        "💜 Achievement Unlocked:<br><br>Keeper Of Harleen's Heart❤️.... ";

        setTimeout(()=>{

            showScreen("mission5");
            loadQuestion();

        },2500);

    }

    else{

        document.getElementById("heartResult")
        .innerHTML =
        "Nope 😏 Try Again... This is gonna be fun";

    }

}

// RUNNING NO BUTTON

const noBtn = document.getElementById("noBtn");

let attempts = 0;

document.addEventListener("mousemove",(e)=>{

    const currentScreen =
    document.getElementById("mission6");

    if(!currentScreen.classList.contains("active"))
        return;

    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(

        e.clientX - rect.left,
        e.clientY - rect.top

    );

    if(distance < 120){

        attempts++;

        noBtn.style.left =
        Math.random()*300 + "px";

        noBtn.style.top =
        Math.random()*120 + "px";

        if(attempts === 5){

            alert("Bro stop chasing NO 😂");

        }

    }

});

// FLOATING HEARTS

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💜";

    heart.style.left =
    Math.random()*100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize =
    (10 + Math.random()*20) + "px";

    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);


let currentQuestion = 0;
let score = 0;

const quizQuestions = [

{
question:"Where did we first meet?",
answers:[
"City Central",
"At Work",
"Online",
"Don't remember"],
correct:0
},

{
question:"What skill makes Sunny Charming?",
answers:[
"Cooking= Being Mr Chef",
"Handsomeness",
"Absolutely Stunning",
"All Of The Above"
],
correct:3
},

{
question:"Where did we went on our first date???",
answers:[
"Burnaby Mountain",
"White Rock",
"Chaiwala",
"Kapps Cafe",
],
correct:2
},


{
question:"What Ishu misses about Sunny? ",
answers:[
"Everythingggg",
"Smile + Face ",
"Eating from his hands",
"Tight Hugs",
],
correct:0
}

];

function loadQuestion(){

const q = quizQuestions[currentQuestion];

document.getElementById("question").innerHTML =
q.question;

let html = "";

q.answers.forEach((answer,index)=>{

html += `
<button onclick="checkAnswer(${index})">
${answer}
</button><br>
`;

});

document.getElementById("answers").innerHTML = html;

}

function checkAnswer(selected){

const q = quizQuestions[currentQuestion];

if(selected === q.correct){

score++;

document.getElementById("quizResult").innerHTML =
"✅ Correct";

}else{

document.getElementById("quizResult").innerHTML =
"❌ Nice Try";
}

currentQuestion++;

setTimeout(()=>{

document.getElementById("quizResult").innerHTML = "";

if(currentQuestion < quizQuestions.length){

loadQuestion();

}else{

finishQuiz();

}

},1000);

}

function finishQuiz(){

document.getElementById("question").innerHTML =
"🎉 Challenge Complete";

document.getElementById("answers").innerHTML = "";

document.getElementById("scoreDisplay").innerHTML =

`
You scored ${score}/${quizQuestions.length}
<br><br>
🏆 Prize Unlocked 🏆
<br><br>
Harleen's Annoyance❤️ + Love + Anger + Cuteness & Unlimited Premium Membership of meee.. 💋💋💋
<br><br>
<button onclick="showScreen('album')">
OPEN MEMORY ARCHIVE 📸
</button>
`;

}

function checkPassword(){

const password =
document.getElementById("passwordInput").value;

if(password === "sunny07"){

document
.getElementById("loginScreen")
.classList.remove("active");

document
.getElementById("intro")
.classList.add("active");

}
else{

document
.getElementById("passwordMessage")
.innerHTML =
"🚨 ACCESS DENIED";

}

}