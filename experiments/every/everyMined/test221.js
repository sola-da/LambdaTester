





var callbackArguments = [];
var argument1 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return false;
    }
    return true;
};
var argument2 = false;
var argument3 = function (element) {
 callbackArguments.push(arguments) 

    return this.indexOf(element) >= 0;
};
var argument4 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument5 = true;
var argument6 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var base_0 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" l-","V","[",969,"K81x",893,5e-324,"E","hQ"]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyMined/test221.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)