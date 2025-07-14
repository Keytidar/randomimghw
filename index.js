const fumoComms = [
  'Flandre’s chaotic energy is both dangerous and strangely captivating.', //0
  'Sakuya’s precision turns every moment into a flawless performance.', //1
  'Reisen’s calm gaze hides a mind full of secrets and psychic power.', //2
  'Remilia rules with grace and a hint of mischievous nobility.', //3
  'Yuyuko floats between worlds, carefree and hauntingly beautiful.', //4
  'Sanae’s vibrant spirit brings life wherever she steps.', //5
  'Marisa buzzes around, mixing mischief and magic in perfect harmony.', //6
  'Reimu stands firm, a serene guardian in a world of chaos.', //7
  'Cirno’s playful antics and love for burgers melt even the coldest hearts.', //8
];

const quote = document.getElementById("quote-span");

const fumoDiv = document.getElementById('fumo-div');

const generateImage = () => {
  let number = Math.floor(Math.random() * 9) + 1;
  console.log(number);
  fumoDiv.innerHTML = `<img src="${number}.jpg">`;
  quote.innerHTML = `<span>${fumoComms[number - 1]}</span>`
};

generateImage();

document.getElementById("random-fumo-btn").addEventListener("click", function() {
  generateImage();
})
