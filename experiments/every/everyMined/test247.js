





var callbackArguments = [];
var argument1 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument2 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument3 = [122,627,126,5e-324,0,25,25,126,242];
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    return !r || r === 'linked' || /^https?:\/\//.test(r) || /^gh:/.test(r) || /^github:/.test(r) || semver.satisfies(version, r);
};
var argument5 = true;
var argument6 = true;
var argument7 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var base_0 = ["b",627,5e-324]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["b",627,5e-324]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["b",627,5e-324]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["b",627,5e-324]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyMined/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)