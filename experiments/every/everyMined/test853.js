





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument2 = true;
var argument3 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument5 = "a";
var argument6 = r_1;
var argument7 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var base_0 = ["<","C:]M","sW","x","?","<","wDq"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<","C:]M","sW","x","?","<","wDq"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<","C:]M","sW","x","?","<","wDq"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<","C:]M","sW","x","?","<","wDq"]
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
require("fs").writeFileSync("./experiments/every/everyMined/test853.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)