//익명 함수로 카운터 함수를 만드는 함수

function makeCounter() {
    var count = 0;
    return function() {
        return count++
    }
}

var counter = makeCounter()

console.log(counter());  //0
console.log(counter());  //1
console.log(counter());  //2