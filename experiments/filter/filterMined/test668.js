





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    if (node.nodeType !== 1) {
        node.parentNode.removeChild(node);
    } else {
        return true;
    }
};
var argument2 = function (log) {
 callbackArguments.push(arguments) 

    return log.objName === objName && log.fnName === fnName;
};
var argument3 = 9.3122177168595e+307;
var argument4 = function (pred) {
 callbackArguments.push(arguments) 

    return pred != null;
};
var argument5 = false;
var argument6 = function (a) {
 callbackArguments.push(arguments) 

    if (relationArray._addsInProcess.indexOf(a) >= 0) {
        return false;
    }
    var inverseValue = a.getProperty(inverseProp.name);
    return inverseValue !== parentEntity;
};
var argument7 = false;
var argument8 = ["*R@","]n","3",")","e"];
var base_0 = [714,969,893,618,242,0,618]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,969,893,618,242,0,618]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,969,893,618,242,0,618]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,969,893,618,242,0,618]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test668.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)