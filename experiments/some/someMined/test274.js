





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    var principalType = p.message || undefined;
    var principalId = p.id || undefined;
    return principalType === RoleMapping.ROLE && principalId === role;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument5 = {"157":969,"595":"","627":"e","1.6567243299261103e+308":893,"":"9","7.990503264191458e+307":213,"2.960730553232072e+307":""};
var argument6 = ["9","8f","b","X","=y="];
var argument7 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = snippets[name];
    return !!snippet;
};
var argument8 = [25,100];
var argument9 = r_2;
var argument10 = function (pathRe) {
 callbackArguments.push(arguments) 

    return pathRe.test(path);
};
var argument11 = true;
var argument12 = r_3;
var base_0 = [242,"G}(F","4A!9",100,"h6f"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"G}(F","4A!9",100,"h6f"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"G}(F","4A!9",100,"h6f"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"G}(F","4A!9",100,"h6f"]
var r_3= undefined
try {
r_3 = base_3.some(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/some/someMined/test274.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)