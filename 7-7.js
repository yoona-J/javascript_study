//do~while 구문을 이용해 정수 n의 팩토리얼을 구하는 함수

function fact(n) {
    var k = 1, i = n;
    do {
        k *= i--;
    } while (i>0);
    return k;
}
fact (5); //120