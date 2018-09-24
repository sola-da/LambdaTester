





var callbackArguments = [];
var argument1 = function (transformEndLength, op) {
 callbackArguments.push(arguments) 

    return transformEndLength + op.getLength();
};
var argument2 = function (sum, value) {
 callbackArguments.push(arguments) 

    return sum + value;
};
var argument3 = true;
var argument4 = function (lowerCaseKeys, currentKey) {
 callbackArguments.push(arguments) 

    [].concat(wellKnownHosts[currentKey].domains || []).forEach(function (domain) {
        wellKnownDomains[domain] = currentKey.toLowerCase().trim();
    });
    lowerCaseKeys[currentKey.toLowerCase().trim()] = wellKnownHosts[currentKey];
    return lowerCaseKeys;
};
var argument5 = r_0;
var argument6 = 7.702227684025988e+307;
var base_0 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test223.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)