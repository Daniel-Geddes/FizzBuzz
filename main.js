//Function which uses a ternary operator. The empty strings eval to false. Empty string + empty string OR i. Will take the right side of the OR statement. Whereas True or i would take the Left side true
function fizzBuzz(value1, value2) {
    let returnArray = [];
    for (let i = 1; i <= 100; i++) {
        returnArray[i] = ((i % value1 == 0 ? 'Fizz' : '') + (i % value2 == 0 ? 'Buzz' : '') || i);
    }
    return returnArray;
}

//calls and uses the template
function buzzTemplate() {
    let output = [];
    let headTemplate = document.getElementById('template-header');
    let rowTemplate = document.getElementById('template-row');
    let templateHTML = rowTemplate.innerHTML;
    let resultsHTML = headTemplate.innerHTML;

    //gets the values that the user inputs
    let val1 = document.getElementById("FizzValue").value;
    let val2 = document.getElementById("BuzzValue").value;

    //calls the fizzbuzz function, using an array to hold the values and using templating to replace them.
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