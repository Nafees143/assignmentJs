//"1st quistion"

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var mile = feetToMile(1350);

if (mile < 0){
    console.log(` Value can't be "-" `)
}
else{
console.log(mile);
}



//"2d quistion"

function woodCalculator (chair, table, bed){
    
    var chair = chair * 1;
    var table = table * 3;
    var bed = bed * 5;
    
    var result = chair + table + bed;
    return result;
}

var input = woodCalculator(3, 3, 3);

console.log(input);


//"3rd quistion"

function brickCalculator (tfloor){
    var count = 0;
    if ( tfloor>=0 ){
    for (let i=0; i<tfloor; i++){
        if ( i<11 ){
            count += 15000;   //15*1000=15000
        }
        else if ( i>=11 && i<20 ){
            count += 12000;   //12*1000=12000
        }
        else{
            count += 10000;   //10*1000=10000
        }
      }
    return count;
    }
    else {
        return `Wrong Value`
    }
}
var input = brickCalculator (10);
console.log(input);



//"4th quistion"


var name = [ `Shafayet`, `Monsurul`, `Tutul`, `Topu`, `Jamil`, `Islam`, `Alexandro` ];

console.log(tinyFriend(name));

function tinyFriend (arr){
    var count = Infinity, pos = null;
    for( var i = 0; i<arr.length; i++ ){
        if ( arr[i].length<count ){
            count = arr[i].length;
            pos = i;
        }
    }
    return arr[pos];
}