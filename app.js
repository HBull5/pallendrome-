let output = document.querySelector('#output');

function test() {
    let intput = document.querySelector('#input');
    let j = 0;
    for (var i = 0; i < input.length; i++) {
        if (input[i] === input[(input.length - 1) - i]) {
            j++;
        }
    }
    if (j === input.length) {
        output.innerHTML = '"' + input + '"' + ' is a pallendrome';
    } else {
        output.innerHTML = '"' + input + '"' + ' is not a pallendrome';
    }
}