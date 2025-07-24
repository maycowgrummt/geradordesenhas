function generatePassword() {
  const length = document.getElementById('length').value;
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+=-{}[]<>?';

  let characters = '';
  if (useUpper) characters += upper;
  if (useLower) characters += lower;
  if (useNumbers) characters += numbers;
  if (useSymbols) characters += symbols;

  if (characters.length === 0) {
    alert("Selecione ao menos uma opção!");
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  document.getElementById('password').value = password;
  document.getElementById('copy-msg').classList.remove('copy-visible');
  document.getElementById('copy-msg').classList.add('copy-hidden');
}

function copyPassword() {
  const passwordField = document.getElementById('password');
  if (!passwordField.value) return;

  passwordField.select();
  passwordField.setSelectionRange(0, 99999);
  document.execCommand('copy');

  const msg = document.getElementById('copy-msg');
  msg.classList.remove('copy-hidden');
  msg.classList.add('copy-visible');

  setTimeout(() => {
    msg.classList.remove('copy-visible');
    msg.classList.add('copy-hidden');
  }, 2000);
}
