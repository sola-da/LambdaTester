





var callbackArguments = [];
var argument1 = function (s) {
 callbackArguments.push(arguments) 

    return s[vars.id.value] == c[vars.id.value];
};
var argument2 = "";
var argument3 = 783;
var argument4 = function (log) {
 callbackArguments.push(arguments) 

    return log.reactID.indexOf(rootID) === 0;
};
var argument5 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.Jail === $scope.activeJail.name;
};
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return fns.isin(v.property, data.related_properties);
};
var argument7 = {"705":893,"=c1q@":1.3386090199822135e+308,"-100":5.98707394921223e+307,"d":1.7832159851993802e+308,"":"h","sS":"","1.1758970264500925e+308":49};
var base_0 = ["@","e","{G","0YX)_eh","13S0q","@i"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@","e","{G","0YX)_eh","13S0q","@i"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@","e","{G","0YX)_eh","13S0q","@i"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@","e","{G","0YX)_eh","13S0q","@i"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test572.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)