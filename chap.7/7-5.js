//순차 검색

function linearSearch (x, a) {
    var i = 0;
    var n = a.length;
    while (i < n && x > a[i]) i++ ;
    //배열 a에서 x를 발견하면 그 요소가 있는 위치를 반환하고 아니면 null 값을 반환한다.
    if (x == a[i]) return i;
    return null
}

var a = [2, 4, 7, 12, 15, 21, 34, 35, 46, 57, 70, 82, 86, 92, 99]
console.log(linearSearch(35, a)) //7