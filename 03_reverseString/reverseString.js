const reverseString = function(string) {
    let arr = string.split('');
    let reverseArr = arr.reverse();
    return reverseArr.join('');
};

reverseString('hello');
reverseString('hello there');
reverseString('123! abc!');
reverseString('');

// Do not edit below this line
module.exports = reverseString;


/*  for (let i = 0; i <= content.length; i++)
        var contentArray = [content.slice(i)];
        contentArray = contentArray.reverse();
        return contentArray.toString(); */;

