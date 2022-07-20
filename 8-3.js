//재귀 함수로 n의 팩토리얼 구하기

function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n-1);
}
fact(5);  //120