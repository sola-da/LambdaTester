





var callbackArguments = [];
var argument1 = function (prefix) {
 callbackArguments.push(arguments) 

    return inputTrimmed.indexOf(prefix) === 0;
};
var argument2 = null;
var argument3 = true;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    if (m.route !== match.route)
        return false;
    for (var property in m.params)
        if (m.params[property] !== match.params[property])
            return false;
    return true;
};
var argument5 = function (feature) {
 callbackArguments.push(arguments) 

    return feature.name === cachingLayer;
};
var argument6 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var base_0 = [403,"5am",655,705,"ELr^","wZ"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"5am",655,705,"ELr^","wZ"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"5am",655,705,"ELr^","wZ"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"5am",655,705,"ELr^","wZ"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test891.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)