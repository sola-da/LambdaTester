





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = {"0":1.1205405808250292e+307,"25":"I]b","618":"Zl3","705":"[","4.80127363011958e+307":"F","":1.6916266954532082e+308,"4.3452667270098835e+307":"","C":"7"};
var argument3 = null;
var argument4 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument5 = null;
var argument6 = true;
var argument7 = function (output, guest) {
 callbackArguments.push(arguments) 

    guest = extend({}, guest, { mealOptions: options.hash.meals });
    return output + options.fn(guest);
};
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    return (a || '').toString() + (b || '').toString();
};
var argument9 = true;
var argument10 = {"":""};
var base_0 = ["N6","d9m","-","]","U","S","@","2m"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N6","d9m","-","]","U","S","@","2m"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N6","d9m","-","]","U","S","@","2m"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N6","d9m","-","]","U","S","@","2m"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test943.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)