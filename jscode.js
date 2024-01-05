const form = document.querySelector('#form');
const rateValue = document.querySelector('#rate');
const rateUI = document.querySelector('.UI-1-wrapper');
const successUI = document.querySelector('.UI-2-wrapper');

//Get input data when pressing on a submit button
form.addEventListener("submit", (submission) => {
    submission.preventDefault();
    const formdata = new FormData(form);
    //Getting the input name attribute shared between all inputs
    const rating = formdata.get('rating');

    //Add rating option to the text
    rateValue.textContent = rating;

    //Show success screen and hide Rate screen
    rateUI.classList.add('UI-1-visibility');
    successUI.classList.remove('UI-2-visibility');

})