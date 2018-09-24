





var callbackArguments = [];
var argument1 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument2 = function (a, b) {
 callbackArguments.push(arguments) 

    return a * b;
};
var argument3 = false;
var argument4 = null;
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev && cur(entity);
};
var argument6 = true;
var argument7 = {"783":"D","":"","6.648664471301545e+307":"C","1.3892391742165722e+308":3.134409782720327e+307,"<ir":"","9.665197851445013e+307":"k^"};
var argument8 = function (object, localizedDigit, i) {
 callbackArguments.push(arguments) 

    object[localizedDigit] = String(i);
    return object;
};
var base_0 = [100,627,213,59,1.7976931348623157e+308,5e-324,242,460,0,-1]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,627,213,59,1.7976931348623157e+308,5e-324,242,460,0,-1]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,627,213,59,1.7976931348623157e+308,5e-324,242,460,0,-1]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,627,213,59,1.7976931348623157e+308,5e-324,242,460,0,-1]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test636.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)