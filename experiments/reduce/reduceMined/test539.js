





var callbackArguments = [];
var argument1 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument2 = 969;
var argument3 = true;
var argument4 = function (lowerCaseKeys, currentKey) {
 callbackArguments.push(arguments) 

    [].concat(wellKnownHosts[currentKey].domains || []).forEach(function (domain) {
        wellKnownDomains[domain] = currentKey.toLowerCase().trim();
    });
    lowerCaseKeys[currentKey.toLowerCase().trim()] = wellKnownHosts[currentKey];
    return lowerCaseKeys;
};
var base_0 = [-1,"W",655,655,"V)",242,"-cGR",213,82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"W",655,655,"V)",242,"-cGR",213,82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test539.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)