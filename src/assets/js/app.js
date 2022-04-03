const iconBtn = document.getElementById('icon');
const title = document.getElementById('title');
const quote = document.getElementById('quote');

iconBtn.addEventListener('click', (e) => {
  triggerAdvice();
});

let randomNum;
function randomN() {
  randomNum = Math.floor(Math.random(1) * 220) + 1;
}

async function advice() {
  let temp = randomNum;
  randomN();
  if (randomNum === temp) {
    randomN();
  }
  const response = await fetch(
    `https://api.adviceslip.com/advice/${randomNum}`
  );
  const data = await response.json();
  return data;
}

function triggerAdvice() {
  advice().then((data) => {
    console.log(data.slip.id);
    title.innerHTML = `Advice #${data.slip.id}`;
    quote.innerHTML = `"${data.slip.advice}"`;
  });
}

triggerAdvice();
