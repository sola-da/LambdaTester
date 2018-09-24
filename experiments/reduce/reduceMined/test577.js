





var callbackArguments = [];
var argument1 = function (lowerCaseKeys, currentKey) {
 callbackArguments.push(arguments) 

    [].concat(wellKnownHosts[currentKey].domains || []).forEach(function (domain) {
        wellKnownDomains[domain] = currentKey.toLowerCase().trim();
    });
    lowerCaseKeys[currentKey.toLowerCase().trim()] = wellKnownHosts[currentKey];
    return lowerCaseKeys;
};
var argument2 = "";
var argument3 = 783;
var base_0 = ["@","e","{G","0YX)_eh","13S0q","@i"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test577.json",JSON.stringify({"baseObjects":serialize([base_0]),"returnObjects":serialize([r_0]),"callbackArgs":callbackArguments}))
},300)