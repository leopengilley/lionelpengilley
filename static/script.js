console.log('hello world');


const button = document.querySelector('.emailButton');

button.addEventListener('click', event => {
  writeToClipboard();

  document.querySelector('.emailAlert').animate({
    opacity: 1 }, 2000)
});


async function writeToClipboard() {
  try {
    await navigator.clipboard.writeText('lionel.pengilley@hotmail.com');
  } catch (error) {
    console.error(error);
  }
};
