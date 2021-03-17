//Get 1 to 255
function buildArr(){
    var arr= [];
    for(var i=1; i<= 255; i++){
        sum = sum + arr[i]
        arr.push(i);
    }
    return arr;
}
var result = buildArr
// console.log(result)

//Get even 1000
function getSum(){
    var sum = 0;
    for(var i=1; i <= 1000; i++){
        if(i % 2 == 0){
            sum = sum + i;
        }
    }
    return sum;
}
// console.log (getSum());

//Get odd 5000
function sum_odd(){
    var sum=0;
    for(var i=1; i<= 500; i+=2){
        if(i % 2 == 1);
        sum = sum + i;
        console.log(i);
    }
    return sum;
}
// console.log(sum_odd());

//Get Iterate an Array
function interArray(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
// console.log(interArray());


//Find Max 
function findMax(arr){
    var max = arr[0]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
// console.log(findMax();

//Find Average
function findAvg(arr){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}
// console.log(findAvg());

//Array odd
function oddNums(arr) {
    var arr= [];
    for(var i = 1; i < 50; i+=2){
        arr.push(i);
        }
        return arr;
    }
    return arr;
}
// console.log(oddNums())

//Greater than Y
function  greaterY (arr, Y) {
    var counter = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i] > Y){
            counter ++;
        }
    }
    return counter;
}
// console.log(greaterY());

//Squares
function squares(arr){
    for(var i = 0; i< arr.length; i++){
        arr[i]=arr[i] * arr[i];
    }
    return arr;
}
// console.log(squares());

//Negatives
function noNeg(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i = 0];
        }
    }
}
// console.log(noNeg());

//Max/Min/Avg
function maxMinAvg(arr){
    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    for(var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
        if(arr[i] > max){
            max = arr[i];
        }
        else if(arr[i] < min){
            min = arr[i];
        }
    }
    var arrNew = [];
    arrNew.push(max);
    arrNew.push(min);
    var avg = sum / arr.length;
    arrNew.push(avg);
    retrurn arrNew;
}
// console.log(maxMinAvg());

//Number to String
function numStr(arr){
    for(var i=0; i < arr.length; i++){
        if(arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}
// console.log(numStr());