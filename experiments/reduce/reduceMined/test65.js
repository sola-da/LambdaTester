





var callbackArguments = [];
var argument1 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument2 = r_0;
var argument3 = function (pv, cv, ix) {
 callbackArguments.push(arguments) 

    return validateTarget(cv, ix) && pv;
};
var argument4 = r_0;
var argument5 = function (lowerCaseKeys, currentKey) {
 callbackArguments.push(arguments) 

    [].concat(wellKnownHosts[currentKey].domains || []).forEach(function (domain) {
        wellKnownDomains[domain] = currentKey.toLowerCase().trim();
    });
    lowerCaseKeys[currentKey.toLowerCase().trim()] = wellKnownHosts[currentKey];
    return lowerCaseKeys;
};
var argument6 = r_0;
var argument7 = {"460":618,"893":655,"MN<":"VB","j":1.459191566968577e+307,"X":"","%&":893,"1.6068018034271523e+308":1.2558075892575456e+308};
var base_0 = [0,823,595,714,25,460]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,823,595,714,25,460]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,823,595,714,25,460]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2]),"returnObjects":serialize([r_0,r_1,r_2]),"callbackArgs":callbackArguments}))
},300)