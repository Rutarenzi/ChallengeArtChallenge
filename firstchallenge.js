// I referred to the definition of prime numbers
// which is;this a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
function primor(n){
    if(n===1){
        return false;
    }else if(n===2){
        return 2;
    }
    else{
        for( let i=2; i<n;i++){
            if(n%i === 0){
                return false;
            }
        }
        return n;
    }
}
function results(n){
    var arr=[];
    for(let i=2;i<n;i++){
        if(primor(i)){
            arr.push(i);
        }
    }
    return arr;
}
  
console.log(results(20))