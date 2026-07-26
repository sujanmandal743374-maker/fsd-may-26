/* alert('I am naman jindal, and we are testing if js file got connected') */

//select/reference the button through code

const buttonElement = document.querySelector('#js-test');
console.log(buttonElement)

buttonElement.addEventListener('click' , function(){
    alert('I am clicked!! HAWWW')
})