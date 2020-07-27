//This function implements the FizzBuzz algorithm, returning an array of strings. Multiples of fizzMultiple are converted to Fizz. Multiples of buzzMultiple
// are converted to Buzz. Multiples of value 1 and value 2 are converted to FizzBuzz. All other values returned unchanged.
function fizzBuzz(fizzMultiple, buzzMultiple) {
    let returnArray = [];
    for (let i = 1; i <= 100; i++) {
        returnArray[i] = ((i % fizzMultiple == 0 ? 'Fizz' : '') + (i % buzzMultiple == 0 ? 'Buzz' : '') || i);
    }
    return returnArray;
}


//This function gets the values that the user submits and calls the fizzBuzz function, using an array to hold the values and then updates the display table templates with results.
function onSubmit() {
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row');
    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;
    let val1 = document.getElementById("FizzValue").value;
    let val2 = document.getElementById("BuzzValue").value;
    output = fizzBuzz(val1, val2);
    for (let i = 1; i < output.length; i+=5) {
        resultsHTML += templateHTML.replace('{{val1}}', output[i])
        .replace('{{val2}}', output[i+1])
        .replace('{{val3}}', output[i+2])
        .replace('{{val4}}', output[i+3])
        .replace('{{val5}}', output[i+4]);
    }
    document.getElementById('results').innerHTML = resultsHTML;
}