





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x.length > 0;
};
var argument2 = {"":1.7629056187810389e+307};
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = function (haystack) {
 callbackArguments.push(arguments) 

    return contains(haystack, needle);
};
var argument6 = false;
var argument7 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument8 = [714,126,5e-324,823,460,403,823];
var argument9 = true;
var base_0 = [705,"B",25,"|ol"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,"B",25,"|ol"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,"B",25,"|ol"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"B",25,"|ol"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyMined/test622.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)