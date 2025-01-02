function showMessage() {
    alert('Hello');
}
function showConsole() {
    console.log('Hi');
}
function handleClick() {
    console.log('Кнопку натиснуто');
   };
let myClick = document.querySelector('.myButton').addEventListener('click', handleClick);;

