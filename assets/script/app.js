const user_choice = document.getElementById('user-choice');
const Rock_box = document.getElementById('Rock');
const Paper_box = document.getElementById('Paper');
const Scissors_box = document.getElementById('Scissors');
const winmsgbox = document.getElementById('status');
const winmsg = document.getElementById('winmsg');
const userScore = document.getElementById('user-score');
const comScore = document.getElementById('com-score');
const comimg = document.getElementById('com-choice');

let user_point = 0;
let com_point = 0;
let isStart = false;

userScore.addEventListener("dblclick", () => {
    let nus = prompt("Enter Your Custom Score");
    if (nus === null || nus.trim() === "") {
        // Agar prompt cancel karein ya blank string ho
        alert("Invalid input!");
    } else {
        user_point = nus;
        userScore.innerText = user_point;
    }
});

comScore.addEventListener("dblclick", () => {
    let ncs = prompt("Enter Custom Score");
    if (ncs === null || ncs.trim() === "") {
        // Agar prompt cancel karein ya blank string ho
        alert("Invalid input!");
    } else {
        com_point = ncs;
        comScore.innerText = com_point;
    }
});
const choices = ['Rock', 'Paper', 'Scissors'];

function gen_com_choice() {
  comimg.src = `https://i.ibb.co/Bqh0Bzg/rock2.png`;

  const y = choices[Math.floor(Math.random() * 3)];
  setTimeout(() => {
  if(y=="Paper"){
    comimg.src = `https://i.ibb.co/8NZ48S2/Paper2.png`;
  }
  else if(y=="Scissors"){
    comimg.src = `https://i.ibb.co/4NRTbhJ/Scissors2.png`;
  }
  else{
    comimg.src = `https://i.ibb.co/Bqh0Bzg/rock2.png`;
  }
  }, 1500)
  return y;


}

function shake() {
  user_choice.classList.add('user-hand');
  comimg.classList.add('com-hand');
  setTimeout(() => {
    user_choice.classList.remove('user-hand');
    comimg.classList.remove('com-hand');
  }, 1500)
}

function checkwin(x, y) {
  shake();
  setTimeout(() => {


    if (x === y) {
      winmsg.innerText = 'Match Draw!';
      winmsg.style.color = 'blueviolet';
    } else if (
      (x === "Rock" && y === "Scissors") ||
      (x === "Paper" && y === "Rock") ||
      (x === "Scissors" && y === "Paper")
    ) {
      winmsg.innerText = 'You won!!';
      winmsg.style.color = 'green';
      user_point++;
      userScore.innerText = user_point;
    } else {
      winmsg.innerText = 'You lose!!';
      winmsg.style.color = 'red';
      com_point++;
      comScore.innerText = com_point;
    }
    isStart = false;


  }, 1500);
}

if (!isStart) {
  Rock_box.addEventListener('click', () => {
    user_choice.src = `https://i.ibb.co/Bqh0Bzg/rock2.png`;
    winmsg.style.color = 'blueviolet';
    winmsg.innerText = 'Wait';
    if (isStart) return; 
    isStart = true;

    const x = "Rock";
    const y = gen_com_choice();
    checkwin(x, y);
    setTimeout(() => {

      user_choice.src = `https://i.ibb.co/Bqh0Bzg/rock2.png` ;

    }, 1500)

  });

  Paper_box.addEventListener('click', () => {
    user_choice.src = `https://i.ibb.co/Bqh0Bzg/rock2.png`;
    winmsg.style.color = 'blueviolet';
    winmsg.innerText = 'Wait';
    if (isStart) return;
    isStart = true;

    const x = "Paper";
    const y = gen_com_choice();
    checkwin(x, y);
    setTimeout(() => {

      user_choice.src = `https://i.ibb.co/8NZ48S2/Paper2.png`;

    }, 1500)
  });

  Scissors_box.addEventListener('click', () => {
    user_choice.src = `https://i.ibb.co/Bqh0Bzg/rock2.png`;
    winmsg.style.color = 'blueviolet';
    winmsg.innerText = 'Wait';
    if (isStart) return;
    isStart = true;

    const x = "Scissors";
    const y = gen_com_choice();
    checkwin(x, y);
    setTimeout(() => {

      user_choice.src = `https://i.ibb.co/4NRTbhJ/Scissors2.png`;

    }, 1500)
  });
}
