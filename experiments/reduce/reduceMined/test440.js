





var callbackArguments = [];
var argument1 = function (length, op) {
 callbackArguments.push(arguments) 

    return length + op.getLength();
};
var argument2 = null;
var argument3 = function (output, guest) {
 callbackArguments.push(arguments) 

    guest = extend({}, guest, { mealOptions: options.hash.meals });
    return output + options.fn(guest);
};
var argument4 = r_0;
var argument5 = r_0;
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b.value;
};
var argument7 = function (combined, toAdd) {
 callbackArguments.push(arguments) 

    return _.extend(combined, toAdd);
};
var argument8 = r_1;
var base_0 = [242,-100,403,157,0,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-100,403,157,0,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-100,403,157,0,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-100,403,157,0,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test440.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)