





var callbackArguments = [];
var argument1 = function (kp) {
 callbackArguments.push(arguments) 

    return initialValues[kp.name] != null;
};
var argument2 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument3 = function (pred) {
 callbackArguments.push(arguments) 

    pred._validate(entityType, usesNameOnServer);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return ~actual.indexOf(key);
};
var argument5 = true;
var argument6 = null;
var base_0 = ["GfR7","r#_t][I","P","P:"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["GfR7","r#_t][I","P","P:"]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["GfR7","r#_t][I","P","P:"]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["GfR7","r#_t][I","P","P:"]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyMined/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)