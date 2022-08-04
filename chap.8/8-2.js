//문자열을 연결하는 함수

function myContat(separator) {
    var s = "";
    for (var i = 1; i < arguments.length; i++) {
        s += srguments[i];
        if (i < arguments.length -1) s += separator
    }
    return s;
}
console.log(myContat("/", "apple", "orange", "peach")); //apple/orange/peach