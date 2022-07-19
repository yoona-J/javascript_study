//while함수를 이용해 정수 n의 팩토리얼을 구하는 함수

function fact(n) {
    var k = 1, i = 1;
    while (i < n) {
        k *= (++i);
    }
    return k
}
fact (5)  //120