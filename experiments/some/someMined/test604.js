





var callbackArguments = [];
var argument1 = function (fk, i) {
 callbackArguments.push(arguments) 

    var keyProp = keyProps[i].name;
    var keyVal = parentEntity.getProperty(keyProp);
    var fkVal = a.getProperty(fk);
    return keyVal !== fkVal;
};
var argument2 = null;
var argument3 = function (m) {
 callbackArguments.push(arguments) 

    if (m.route !== match.route)
        return false;
    for (var property in m.params)
        if (m.params[property] !== match.params[property])
            return false;
    return true;
};
var argument4 = true;
var argument5 = "m";
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument7 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Framework' && pair[1] === 'express';
};
var argument8 = r_3;
var base_0 = ["rY","b","2","sGm","gn"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rY","b","2","sGm","gn"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rY","b","2","sGm","gn"]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rY","b","2","sGm","gn"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)