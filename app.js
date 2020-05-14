let submitBtn = document.querySelector('#submitBtn');
let output = document.querySelector('#output');

function test(input) {
    let j = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === input[(input.length - 1) - i]) {
            j++;
        }
    }
    if (j === input.length) {
        output.innerHTML = '"' + input + '"' + ' is a palindrome';
    } else {
        output.innerHTML = '"' + input + '"' + ' is not a palindrome';
    }
}

submitBtn.addEventListener('click', () => {
    let input = document.querySelector('#input').value;
    test(input);
})