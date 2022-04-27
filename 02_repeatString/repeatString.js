const repeatString = function(string,times) {
    var text = ''
    if (times < 0) {
        return "ERROR"; 
    } else {
        for (var i=0; i < times; i++) {
        text += string
        }    return text;
    }
    };

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

repeatString('hey',3);
repeatString('hey',10);
repeatString('hey',1);
repeatString('hey',0);
repeatString('hey',-1);
repeatString('hey',randomNumber(999));
repeatString('', 4);

// Do not edit below this line
module.exports = repeatString;
