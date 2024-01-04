const form = document.querySelector('#form');
const input = document.querySelector('rating');
const rateValue = document.querySelector('#rate');
//Get input data when pressing on a submit button
form.addEventListener("submit", (submission) => {
    submission.preventDefault();

    const data = new FormData(form);
    let valid = false;
    let output = "";

    for (const entry of data) {
        output = `${output}${entry[1]}\r`;
    }

    if (output != "") {
        valid = true;
        console.log(output);
        rateValue.textContent = output;
    }
    else {
        console.log('Please choose a rate!');
        return false;

    }


})