// 퀵 정렬

// x: 정렬할 배열
// first : 정렬할 첫번째 요소의 위치
// last : 정렬할 마지막 요소의 위치

function quicksort(x, first, last) {
    var p = x[Math.floor((first + last) / 2)];
    for(var i = first, j = last; ; i++, j--) {
        //왼쪽부터 차례대로 p 이상의 요소를 검색
        while(x[i] < p) i++;
        //오른쪽부터 차례대로 p 이하의 요소를 검색
        while(p < x[j]) j--;
        //i와 j가 교차하면 다음으로 이동
        if (i >= j) break;
        //발견하면 x[i]와 x[j]를 교환한다
        var w = x[i]; x[i] = x[j]; x[j] = w;
    }
    //왼쪽에 두개 이상 남아있으면 왼쪽을 다시 정렬
    if(first < i-1) quicksort(x, first, i-1);
    //오른쪽에 두개 이상 남아있으면 오른쪽을 다시 정렬
    if(j + 1 < last) quicksort(x, j+1, last);
}
var a = [7, 2, 5, 1, 8, 9, 3];
quicksort(a, 0, a.length-1);
console.log(a) // [1, 2, 3, 5, 7, 8, 9]