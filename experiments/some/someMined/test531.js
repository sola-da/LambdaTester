





var callbackArguments = [];
var argument1 = function (obj, index) {
 callbackArguments.push(arguments) 

    this.a[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return true;
    }
    return false;
};
var argument2 = r_0;
var argument3 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Dispatcher' && pair[1] === 'express';
};
var argument4 = null;
var argument5 = -100;
var argument6 = function (prop) {
 callbackArguments.push(arguments) 

    nextValue = nextValue.getProperty(prop);
    return nextValue == null;
};
var argument7 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.attributes.some(function (attr) {
        return attr.name === 'Name' && attr.value === baseTypeName;
    });
};
var argument8 = true;
var base_0 = ["D","P|j4","it","G","(","meq","l","#"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D","P|j4","it","G","(","meq","l","#"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D","P|j4","it","G","(","meq","l","#"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","P|j4","it","G","(","meq","l","#"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test531.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)