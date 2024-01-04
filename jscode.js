const form = document.querySelector('#form');
const rateValue = document.querySelector('#rate');
const successUI = document.querySelector('.UI-2-wrapper');
const rateUI = document.querySelector('.UI-1-wrapper');
//Get input data when pressing on a submit button
form.addEventListener("submit", (submission) => {
    submission.preventDefault();
    const formdata = new FormData(form);
    //Getting the input name property shared between all inputs
    const rating = formdata.get('rating');

    if (!rating) {
        console.log('Please choose a rate!');
    }
    else {
        //Add rating option to the text
        rateValue.textContent = rating;

        //Show success screen and hide Rate screen
        rateUI.classList.add('UI-1-visibility');
        successUI.classList.remove('UI-2-visibility');

    }


})