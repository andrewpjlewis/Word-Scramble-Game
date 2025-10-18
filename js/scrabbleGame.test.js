global.words = [
  { word: "test", hint: "just a test" },
  { word: "game", hint: "fun" }
];

document.body.innerHTML = `
  <div class="word-class"></div>
  <div class="word"></div>
  <div class="hint"><span></span></div>
  <div class="time"><b>10</b></div>
  <input type="text" />
  <div id="message"></div>
  <div class="score"><b>0</b></div>
  <button class="refresh-word"></button>
  <button class="check-word"></button>
`;


const { checkWord } = require('./script.js');

describe('Word Scramble Game', () => {
  test('checkWord should alert message if input is empty', () => {
    const inputField = document.querySelector('input');
    const messageElement = document.getElementById('message');
    inputField.value = '';

    checkWord();

    expect(messageElement.textContent).toBe('Please enter a word!');
  });
});
