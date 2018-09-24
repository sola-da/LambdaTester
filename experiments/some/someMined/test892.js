





var callbackArguments = [];
var argument1 = function (variable) {
 callbackArguments.push(arguments) 

    if (variable.name === ref.identifier.name) {
        if (!isImplicitGlobal(variable) || Object.hasOwnProperty.call(variable, 'writeable')) {
            declaredGlobal = variable;
            return true;
        }
    }
    return false;
};
var argument2 = 3.5375510864761807e+307;
var argument3 = function (frame) {
 callbackArguments.push(arguments) 

    if (/UncoatedModuleInstantiator/.test(frame))
        return true;
    stack.push(frame);
};
var argument4 = [969,618,157,122,59,893,403,618];
var argument5 = function (hint) {
 callbackArguments.push(arguments) 

    return splitUrl[0].indexOf(hint) > -1;
};
var argument6 = true;
var argument7 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
    numberOfRuns += 1;
    if (numberOfRuns == 3) {
        return true;
    }
    return false;
};
var argument8 = r_3;
var argument9 = null;
var base_0 = [82,893,213,655,969,783,403,627,783]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,213,655,969,783,403,627,783]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,893,213,655,969,783,403,627,783]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,213,655,969,783,403,627,783]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test892.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)