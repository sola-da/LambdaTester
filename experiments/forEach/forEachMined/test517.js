





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    var d = dist(v, pos);
    if (d < minDist || !minDist) {
        minDist = d;
        closest = v;
    }
};
var argument2 = "";
var argument3 = function (num) {
 callbackArguments.push(arguments) 

    obj.versions.push(+num);
};
var argument4 = function (role) {
 callbackArguments.push(arguments) 

    var name = role.name, roleSpec = options[name + 'Role'];
    if (void 0 !== roleSpec) {
        roleOptions || (roleOptions = options.visualRoles = {});
        void 0 === roleOptions[name] && (roleOptions[name] = roleSpec);
    }
};
var argument5 = null;
var argument6 = function (def) {
 callbackArguments.push(arguments) 

    reportRedeclaration(def.name, def.name.name);
};
var argument7 = "";
var base_0 = [627,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test517.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)