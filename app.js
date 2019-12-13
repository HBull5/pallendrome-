var output = document.querySelector('#output');
var test1 = 'abc!!cba';
var test2 = 'apple';
var test3 = 'racecar';
var test4 = 'tacocat';

function test(test) {
    let j = 0;
    for (var i = 0; i < test.length; i++) {
        if (test[i] === test[(test.length - 1) - i]) {
            j++;
        }
    }
    if (j === test.length) {
        output.innerHTML = '"' + test + '"' + ' is a pallendrome';
    } else {
        output.innerHTML = '"' + test + '"' + ' is not a pallendrome';
    }
}

test(test2);