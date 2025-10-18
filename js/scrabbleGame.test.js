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

global.words = [{ word: "test", hint: "just a test" }];

const { checkWord } = require('./script.js');

test('checkWord should show message when input is empty', () => {
  const inputField = document.querySelector('input');
  const messageElement = document.getElementById('message');

  inputField.value = '';
  checkWord();

  if (messageElement.textContent === 'Please enter a word!') {
    console.log('PASS: Empty input shows correct message');
  } else {
    console.log('FAIL: Empty input did not show correct message');
  }

  expect(messageElement.textContent).toBe('Please enter a word!');
});