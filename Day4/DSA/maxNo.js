function findGretest(a, b, c){
    let max = a;
    if(b > max) max = b;
    if(c > max) max = c;
    return max;
}
console.table(findGretest(10, 10, 5));