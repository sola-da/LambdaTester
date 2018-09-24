





var callbackArguments = [];
var argument1 = function (count, op) {
 callbackArguments.push(arguments) 

    return count + op.getLength();
};
var argument2 = null;
var argument3 = function (sum2, datum) {
 callbackArguments.push(arguments) 

    var value = datum.atoms[dimName].value;
    isAbs && 0 > value && (value = -value);
    return null != sum2 ? sum2 + value : value;
};
var argument4 = function (previousValue, currentValue, index, array) {
 callbackArguments.push(arguments) 

    return array.join();
};
var argument5 = function (sum, number) {
 callbackArguments.push(arguments) 

    return sum += number * number;
};
var base_0 = [595,607,969,460,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,607,969,460,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,607,969,460,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,607,969,460,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)