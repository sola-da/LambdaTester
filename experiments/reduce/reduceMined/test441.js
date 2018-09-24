





var callbackArguments = [];
var argument1 = function (length, delta) {
 callbackArguments.push(arguments) 

    return length + delta.getLength();
};
var argument2 = true;
var argument3 = true;
var argument4 = function (prev, curr) {
 callbackArguments.push(arguments) 

    return prev.concat(curr.ast.body);
};
var argument5 = null;
var argument6 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument7 = function (count, op) {
 callbackArguments.push(arguments) 

    return count + op.getLength();
};
var base_0 = [-1,49,893,5e-324,618,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,49,893,5e-324,618,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,49,893,5e-324,618,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,49,893,5e-324,618,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test441.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)