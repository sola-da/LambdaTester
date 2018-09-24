





var callbackArguments = [];
var argument1 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument2 = null;
var argument3 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument4 = function (frame) {
 callbackArguments.push(arguments) 

    if (/UncoatedModuleInstantiator/.test(frame))
        return true;
    stack.push(frame);
};
var argument5 = function (filter) {
 callbackArguments.push(arguments) 

    return filter(json);
};
var argument6 = true;
var argument7 = true;
var base_0 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["mk","Fk+]d","9","c","<","V",",A","II","vwX","wX"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)