





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument2 = function (a, b) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    ;
    return b;
};
var argument3 = {"655":"]","705":"","1.36625799563318e+308":"b","1.5512509841868493e+308":1.6782223798316513e+307,"e":"=0-0","1.786553691543186e+308":1.5293947554868919e+308};
var argument4 = null;
var argument5 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return acc + parent.name + '.';
};
var argument6 = "jQ";
var argument7 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument8 = 705;
var base_0 = [157,"y","PQ-",607,"!"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"y","PQ-",607,"!"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"y","PQ-",607,"!"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"y","PQ-",607,"!"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/reduceRight/reduceRightMined/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)