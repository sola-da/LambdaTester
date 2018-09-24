





var callbackArguments = [];
var argument1 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = snippets[name];
    return !!snippet;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (module) {
 callbackArguments.push(arguments) 

    return ngDeps.modules[module].indexOf(dependency) > -1;
};
var argument5 = false;
var argument6 = false;
var argument7 = function (klass) {
 callbackArguments.push(arguments) 

    return $a.hasClass(klass);
};
var argument8 = null;
var argument9 = {"100":"","":"","MU":"Zg","f":"","OZ":7.282750732095509e+307};
var argument10 = function (m) {
 callbackArguments.push(arguments) 

    if (m.route !== match.route)
        return false;
    for (var property in m.params)
        if (m.params[property] !== match.params[property])
            return false;
    return true;
};
var base_0 = [823,1.7976931348623157e+308,823,100,843,627]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,1.7976931348623157e+308,823,100,843,627]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,1.7976931348623157e+308,823,100,843,627]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,1.7976931348623157e+308,823,100,843,627]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test106.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)