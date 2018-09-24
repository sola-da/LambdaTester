





var callbackArguments = [];
var argument1 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument2 = false;
var argument3 = function (el) {
 callbackArguments.push(arguments) 

    return !fn(el);
};
var argument4 = null;
var argument5 = [655,893,893,213,157,100];
var argument6 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return false;
    }
    return true;
};
var argument7 = r_2;
var argument8 = false;
var argument9 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument10 = {"":1.2698532555181689e+308,"1.0475217259250793e+308":"kO$","1.7302138513579631e+308":1.593805534012537e+308,"4.0770177338325194e+307":1.5386628933053223e+308};
var argument11 = false;
var base_0 = [100,0,157,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,0,157,122]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,0,157,122]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,0,157,122]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyMined/test422.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)