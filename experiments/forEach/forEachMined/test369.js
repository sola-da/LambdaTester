





var callbackArguments = [];
var argument1 = function (paramName, index) {
 callbackArguments.push(arguments) 

    params[paramName] = match[index + 1];
};
var argument2 = null;
var argument3 = true;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var code = definitions[key];
    if (code && typeof code === 'object' && !(code instanceof RegExp)) {
        walkDefinitions(code, prefix + key + '.');
        applyObjectDefine(prefix + key, code);
        return;
    }
    applyDefineKey(prefix, key);
    applyDefine(prefix + key, code);
};
var argument5 = function (n, i) {
 callbackArguments.push(arguments) 

    if (i > depth && a[n])
        delete a[n];
};
var argument6 = 1.1154971973994899e+307;
var argument7 = r_0;
var argument8 = function (point) {
 callbackArguments.push(arguments) 

    scalars.push(new Vector(point).dotProduct(axis));
};
var argument9 = false;
var argument10 = false;
var base_0 = [-1,0,-1,126,823,82,627,49,-100,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,0,-1,126,823,82,627,49,-100,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,0,-1,126,823,82,627,49,-100,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,0,-1,126,823,82,627,49,-100,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test369.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)