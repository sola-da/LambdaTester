





var callbackArguments = [];
var argument1 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev + curr;
};
var argument2 = function (object, digit) {
 callbackArguments.push(arguments) 

    object[digit] = 'invalid';
    return object;
};
var argument3 = {"157":714,"705":100,"1.7080655697317329e+308":122,"":82,"_":1.5146125140865533e+308,"3.2789088158878554e+307":"","YD":1.595511630167922e+307};
var argument4 = false;
var argument5 = function (result, key) {
 callbackArguments.push(arguments) 

    var pair = cb(obj[key], key, obj);
    result[pair[0]] = pair[1];
    return result;
};
var argument6 = {"126":1.214522557021266e+308,"843":714,"":1.1985050344457018e+308};
var argument7 = function (result, child, idx) {
 callbackArguments.push(arguments) 

    var name = child.getKey(idx);
    result[name] = child;
    return result;
};
var argument8 = "a";
var base_0 = [607,460,"Ic"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,460,"Ic"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,460,"Ic"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,460,"Ic"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)